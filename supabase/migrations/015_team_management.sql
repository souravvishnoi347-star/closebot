-- Create an enum for roles if we don't have one, or just use text check
ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'agent')),
  ADD COLUMN IF NOT EXISTS invited_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL;

-- Allow admins to see profiles of users they invited
CREATE POLICY "Users can view profiles of their agents" ON public.profiles
  FOR SELECT USING (auth.uid() = invited_by);

-- Allow agents to view the profile of their admin
CREATE POLICY "Agents can view their admin's profile" ON public.profiles
  FOR SELECT USING (id = (SELECT invited_by FROM public.profiles WHERE id = auth.uid()));

-- Update contacts table
ALTER TABLE public.contacts
  ADD COLUMN IF NOT EXISTS assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL;

-- Note: In a real multi-tenant architecture, 'contacts' should have a 'tenant_id' or 'account_id'. 
-- Currently, we use the user_id (who created it).
-- We need to update RLS on contacts to allow agents to see them if they are assigned.
-- However, currently contacts belong to user_id.
-- Let's update RLS on contacts to allow access if assigned_to = auth.uid() OR user_id = auth.uid()
-- OR user_id = (SELECT invited_by FROM public.profiles WHERE id = auth.uid())

DROP POLICY IF EXISTS "Users can view their own contacts" ON public.contacts;
CREATE POLICY "Users and agents can view contacts" ON public.contacts
  FOR SELECT USING (
    user_id = auth.uid() OR 
    assigned_to = auth.uid() OR 
    user_id = (SELECT invited_by FROM public.profiles WHERE id = auth.uid())
  );

DROP POLICY IF EXISTS "Users can update their own contacts" ON public.contacts;
CREATE POLICY "Users and assigned agents can update contacts" ON public.contacts
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    assigned_to = auth.uid()
  );

DROP POLICY IF EXISTS "Users can insert their own contacts" ON public.contacts;
CREATE POLICY "Users and agents can insert contacts" ON public.contacts
  FOR INSERT WITH CHECK (
    user_id = auth.uid() OR 
    user_id = (SELECT invited_by FROM public.profiles WHERE id = auth.uid())
  );

-- Do the same for conversations/messages if they rely on user_id
-- We'll assume for now they are accessed through contacts or have similar RLS.
