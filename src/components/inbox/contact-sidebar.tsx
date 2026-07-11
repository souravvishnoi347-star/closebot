"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import type { Contact, Deal, ContactNote, Tag } from "@/types";
import {
  Phone,
  Mail,
  Copy,
  Check,
  User,
  Tag as TagIcon,
  DollarSign,
  StickyNote,
  Plus,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Profile } from "@/types";

interface ContactSidebarProps {
  contact: Contact | null;
}

export function ContactSidebar({ contact }: ContactSidebarProps) {
  const [copied, setCopied] = useState(false);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [notes, setNotes] = useState<ContactNote[]>([]);
  const [tags, setTags] = useState<(Tag & { contact_tag_id: string })[]>([]);
  const [newNote, setNewNote] = useState("");
  const [addingNote, setAddingNote] = useState(false);
  const [teamMembers, setTeamMembers] = useState<Profile[]>([]);
  const [assignedTo, setAssignedTo] = useState<string | null>(contact?.assigned_to || null);
  const [isAssigning, setIsAssigning] = useState(false);

  useEffect(() => {
    if (contact) {
      setAssignedTo(contact.assigned_to || null);
    }
  }, [contact?.assigned_to, contact?.id]);

  const fetchContactData = useCallback(async () => {
    if (!contact) return;

    const supabase = createClient();

    // Fetch deals, notes, and tags in parallel
    const [dealsRes, notesRes, tagsRes] = await Promise.all([
      supabase
        .from("deals")
        .select("*, stage:pipeline_stages(*)")
        .eq("contact_id", contact.id)
        .order("created_at", { ascending: false }),
      supabase
        .from("contact_notes")
        .select("*")
        .eq("contact_id", contact.id)
        .order("created_at", { ascending: false }),
      supabase
        .from("contact_tags")
        .select("id, tag_id, tags(*)")
        .eq("contact_id", contact.id),
    ]);

    if (dealsRes.data) setDeals(dealsRes.data);
    if (notesRes.data) setNotes(notesRes.data);
    if (tagsRes.data) {
      const mapped = tagsRes.data
        .filter((ct: Record<string, unknown>) => ct.tags)
        .map((ct: Record<string, unknown>) => ({
          ...(ct.tags as Tag),
          contact_tag_id: ct.id as string,
        }));
      setTags(mapped);
    }

    // Fetch team members for assignment
    const { data: teamData } = await supabase.from("profiles").select("*");
    if (teamData) {
      setTeamMembers(teamData as Profile[]);
    }
  }, [contact]);

  // Load on contact change. setContactData/setTags run inside async
  // Supabase callbacks, not synchronously in the effect body.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContactData();
  }, [fetchContactData]);

  const handleCopyPhone = useCallback(async () => {
    if (!contact?.phone) return;
    await navigator.clipboard.writeText(contact.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // Dep is the whole `contact` object (not `contact?.phone`) so the
    // React Compiler's inference agrees with the manual dep list —
    // fixes the `preserve-manual-memoization` lint error.
  }, [contact]);

  const handleAddNote = useCallback(async () => {
    if (!contact || !newNote.trim()) return;
    setAddingNote(true);

    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const user = session?.user;

    const { data, error } = await supabase
      .from("contact_notes")
      .insert({
        contact_id: contact.id,
        user_id: user?.id,
        note_text: newNote.trim(),
      })
      .select()
      .single();

    if (!error && data) {
      setNotes((prev) => [data, ...prev]);
      setNewNote("");
    }
    setAddingNote(false);
  }, [contact, newNote]);

  const handleAssign = useCallback(async (agentId: string | null) => {
    if (!contact || !agentId) return;
    setIsAssigning(true);
    const newAssignedTo = agentId === "unassigned" ? null : agentId;
    
    const supabase = createClient();
    const { error } = await supabase
      .from("contacts")
      .update({ assigned_to: newAssignedTo })
      .eq("id", contact.id);
      
    if (!error) {
      setAssignedTo(newAssignedTo);
      // We mutate the local object so it stays consistent without a full refetch
      contact.assigned_to = newAssignedTo || undefined;
    }
    setIsAssigning(false);
  }, [contact]);

  if (!contact) {
    return (
      <div className="flex h-full w-80 items-center justify-center border-l border-slate-200 bg-white">
        <p className="text-sm text-slate-500">Select a conversation</p>
      </div>
    );
  }

  const displayName = contact.name || contact.phone;
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex h-full w-80 flex-col border-l border-slate-200 bg-white shrink-0">
      <ScrollArea className="flex-1">
        {/* AI Copilot Mockup */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 className="font-semibold text-lg">AI Copilot</h3>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
            <p className="text-sm text-indigo-50 leading-relaxed">
              <strong>Suggested Reply:</strong> &quot;Hi there! Let me check on that for you.&quot;
            </p>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-white text-indigo-600 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors shadow-sm">Use</button>
              <button className="flex-1 bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/10">Rewrite</button>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col items-center border-b border-slate-200">
          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 border border-slate-200 shadow-sm">
              {contact.avatar_url ? (
                <img
                  src={contact.avatar_url}
                  alt={displayName}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              {displayName}
            </h3>
            {contact.company && (
              <p className="text-sm text-slate-500 mt-1">{contact.company}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mt-6 w-full space-y-3">
            <button
              onClick={handleCopyPhone}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 bg-slate-50 border border-slate-200 transition-colors hover:bg-slate-100 shadow-sm"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="flex-1 text-left font-medium">{contact.phone}</span>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {contact.email && (
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 bg-slate-50 border border-slate-200 shadow-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="truncate font-medium">{contact.email}</span>
              </div>
            )}
            
            {/* Agent Assignment */}
            <div className="pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                Assigned To
              </label>
              <Select
                value={assignedTo || "unassigned"}
                onValueChange={handleAssign}
                disabled={isAssigning}
              >
                <SelectTrigger className="w-full bg-slate-50 border-slate-200 shadow-sm">
                  <SelectValue placeholder="Select Agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned" className="text-slate-500 italic">Unassigned</SelectItem>
                  {teamMembers.map((member) => (
                    <SelectItem key={member.id} value={member.id}>
                      {member.full_name || member.email} {member.role === 'admin' ? '(Admin)' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>

        <div className="p-6">
          {/* Tags */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <TagIcon className="h-4 w-4" />
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.length === 0 ? (
                <p className="text-sm text-slate-500 italic">No tags</p>
              ) : (
                tags.map((tag) => (
                  <span
                    key={tag.contact_tag_id}
                    className="rounded-lg px-2.5 py-1 text-xs font-semibold shadow-sm border"
                    style={{
                      backgroundColor: `${tag.color}15`,
                      color: tag.color,
                      borderColor: `${tag.color}30`
                    }}
                  >
                    {tag.name}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-slate-200" />

          {/* Active Deals */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <DollarSign className="h-4 w-4" />
              Active Deals
            </div>
            <div className="space-y-3">
              {deals.length === 0 ? (
                <p className="text-sm text-slate-500 italic">No deals</p>
              ) : (
                deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {deal.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm text-slate-600 font-medium">
                      <span>
                        {deal.currency ?? "$"}
                        {deal.value.toLocaleString()}
                      </span>
                      {deal.stage && (
                        <span
                          className="rounded-lg px-2 py-1 text-xs font-semibold border"
                          style={{
                            backgroundColor: `${deal.stage.color}15`,
                            color: deal.stage.color,
                            borderColor: `${deal.stage.color}30`
                          }}
                        >
                          {deal.stage.name}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-slate-200" />

          {/* Notes */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <StickyNote className="h-4 w-4" />
              Notes
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note..."
                  rows={2}
                  className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner"
                />
                <Button
                  size="sm"
                  className="h-10 w-10 shrink-0 bg-primary p-0 text-white hover:bg-primary/90 disabled:opacity-40 shadow-sm rounded-xl"
                  onClick={handleAddNote}
                  disabled={!newNote.trim() || addingNote}
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-3">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-sm"
                  >
                    <p className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed">
                      {note.note_text}
                    </p>
                    <p className="mt-2 text-xs text-slate-400 font-medium">
                      {format(new Date(note.created_at), "MMM d, yyyy HH:mm")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
