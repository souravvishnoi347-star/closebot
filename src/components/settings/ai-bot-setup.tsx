"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export function AiBotSetup() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [config, setConfig] = useState({
    system_prompt: "You are a helpful customer support agent. Answer questions politely.",
    is_enabled: false
  })

  const supabase = createClient()

  useEffect(() => {
    async function loadConfig() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data } = await supabase
        .from("ai_bot_configs")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle()

      if (data) {
        setConfig({
          system_prompt: data.system_prompt || "You are a helpful customer support agent. Answer questions politely.",
          is_enabled: data.is_enabled || false
        })
      }
      setLoading(false)
    }
    loadConfig()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return

    const { error } = await supabase
      .from("ai_bot_configs")
      .upsert({
        user_id: session.user.id,
        system_prompt: config.system_prompt,
        is_enabled: config.is_enabled
      }, { onConflict: "user_id" })

    if (error) {
      toast.error("Failed to save AI configuration")
      console.error(error)
    } else {
      toast.success("AI configuration saved")
    }
    setSaving(false)
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Gemini AI Auto-Reply Bot</h2>
        <p className="text-sm text-slate-500">Configure your AI bot to automatically reply to inbound messages that don't match any automation keywords.</p>
      </div>

      <div className="space-y-4 max-w-xl">
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={config.is_enabled}
            onChange={(e) => setConfig({ ...config, is_enabled: e.target.checked })}
          />
          <label className="text-sm font-semibold">Enable AI Auto-Reply Bot</label>
        </div>

        <div>
          <label className="text-sm font-semibold">System Prompt</label>
          <Textarea 
            value={config.system_prompt}
            onChange={(e) => setConfig({ ...config, system_prompt: e.target.value })}
            placeholder="You are a helpful customer support agent..." 
            className="mt-1 h-48"
          />
          <p className="text-xs text-slate-500 mt-1">This instructs the Gemini model on how to behave, what information to provide, and how to format its answers.</p>
        </div>

        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save AI Configuration"}
        </Button>
      </div>
    </div>
  )
}
