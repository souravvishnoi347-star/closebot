-- Table: client_payment_configs (Stores Razorpay Route linked account details)
CREATE TABLE IF NOT EXISTS public.client_payment_configs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    razorpay_linked_account_id TEXT NOT NULL,
    commission_rate NUMERIC NOT NULL DEFAULT 2.00, -- Default 2% commission
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id)
);

-- Table: payment_links (Tracks generated payment links)
CREATE TABLE IF NOT EXISTS public.payment_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    contact_id UUID NOT NULL REFERENCES public.contacts(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    currency TEXT NOT NULL DEFAULT 'INR',
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'cancelled')),
    razorpay_payment_link_id TEXT NOT NULL UNIQUE,
    razorpay_payment_link_url TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Triggers for updated_at
CREATE TRIGGER update_client_payment_configs_modtime
    BEFORE UPDATE ON public.client_payment_configs
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_payment_links_modtime
    BEFORE UPDATE ON public.payment_links
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- Enable RLS
ALTER TABLE public.client_payment_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_links ENABLE ROW LEVEL SECURITY;

-- Policies for client_payment_configs
CREATE POLICY "Users can view own payment config" ON public.client_payment_configs
    FOR SELECT USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can manage own payment config" ON public.client_payment_configs
    FOR ALL USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- Policies for payment_links
CREATE POLICY "Users can view own payment links" ON public.payment_links
    FOR SELECT USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can manage own payment links" ON public.payment_links
    FOR ALL USING (user_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
