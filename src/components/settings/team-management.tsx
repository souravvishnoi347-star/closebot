'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Loader2, Plus, User, Mail, ShieldAlert } from 'lucide-react';

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string | null;
  role: 'admin' | 'agent';
};

export function TeamManagement() {
  const [members, setMembers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInviting, setIsInviting] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteError, setInviteError] = useState('');
  const [inviteSuccess, setInviteSuccess] = useState('');
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // In RLS, admins can see users they invited. Agents can see their admin.
      // But we just fetch all profiles we have access to.
      const { data, error } = await supabase
        .from('profiles')
        .select('*');

      if (error) throw error;
      
      // Also fetch the current user's profile to check if they are admin
      setMembers(data as Profile[]);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    
    setIsInviting(true);
    setInviteError('');
    setInviteSuccess('');

    try {
      // We will call our new API endpoint to invite the user
      const response = await fetch('/api/team/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: inviteEmail }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to invite user');
      }

      setInviteSuccess(`Invitation sent to ${inviteEmail}`);
      setInviteEmail('');
      // Refresh list in a few seconds in case backend created profile
      setTimeout(fetchTeamMembers, 2000);
    } catch (err: any) {
      setInviteError(err.message);
    } finally {
      setIsInviting(false);
    }
  };

  const isAdmin = members.find(m => m.role === 'admin') !== undefined;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Management</CardTitle>
          <CardDescription>
            Invite team members and assign them chats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            {/* Invite Form */}
            <form onSubmit={handleInvite} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                Invite a new Agent
              </h3>
              
              <div className="flex gap-4 items-end">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="agent@yourcompany.com"
                      className="pl-9"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      disabled={isInviting}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" disabled={isInviting} className="w-32 bg-blue-600 hover:bg-blue-700">
                  {isInviting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Invite'}
                </Button>
              </div>

              {inviteError && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  {inviteError}
                </div>
              )}
              
              {inviteSuccess && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg">
                  {inviteSuccess}
                </div>
              )}
            </form>

            {/* Team Members List */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Current Team</h3>
              
              {isLoading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                </div>
              ) : (
                <div className="border rounded-xl divide-y">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-white first:rounded-t-xl last:rounded-b-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-slate-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {member.first_name || 'Pending'} {member.last_name || 'Invite'}
                          </p>
                          <p className="text-sm text-slate-500">{member.email}</p>
                        </div>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                          member.role === 'admin' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {member.role}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {members.length === 0 && (
                    <div className="p-8 text-center text-slate-500">
                      No team members found.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
