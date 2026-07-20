"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export function PaymentSettings() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [config, setConfig] = useState({
    razorpay_linked_account_id: "",
    commission_rate: "5.00",
    is_active: false
  })

  const supabase = createClient()

  useEffect(() => {
    async function loadConfig() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data } = await supabase
        .from("client_payment_configs")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle()

      if (data) {
        setConfig({
          razorpay_linked_account_id: data.razorpay_linked_account_id || "",
          commission_rate: data.commission_rate || "5.00",
          is_active: data.is_active || false
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
      .from("client_payment_configs")
      .upsert({
        user_id: session.user.id,
        razorpay_linked_account_id: config.razorpay_linked_account_id,
        commission_rate: config.commission_rate,
        is_active: config.is_active
      }, { onConflict: "user_id" })

    if (error) {
      toast.error("Failed to save payment settings")
      console.error(error)
    } else {
      toast.success("Payment settings saved")
    }
    setSaving(false)
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Payment Configuration</h2>
        <p className="text-sm text-slate-500">Configure your Razorpay Route linked account.</p>
      </div>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="text-sm font-semibold">Razorpay Linked Account ID</label>
          <Input 
            value={config.razorpay_linked_account_id}
            onChange={(e) => setConfig({ ...config, razorpay_linked_account_id: e.target.value })}
            placeholder="acc_..." 
          />
        </div>
        
        <div>
          <label className="text-sm font-semibold">Commission Rate (%)</label>
          <Input 
            type="number"
            value={config.commission_rate}
            onChange={(e) => setConfig({ ...config, commission_rate: e.target.value })}
            placeholder="5.00" 
          />
          <p className="text-xs text-slate-500 mt-1">Our platform fee deducted per transaction</p>
        </div>

        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={config.is_active}
            onChange={(e) => setConfig({ ...config, is_active: e.target.checked })}
          />
          <label className="text-sm">Enable Payments in Automation Builder</label>
        </div>

        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Configuration"}
        </Button>
      </div>
    </div>
  )
}
