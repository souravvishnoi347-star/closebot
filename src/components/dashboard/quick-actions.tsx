"use client"

import Link from 'next/link'
import { UserPlus, Briefcase, Radio, Zap } from 'lucide-react'
import type { ComponentType } from 'react'

// Quick-action shortcuts. Each navigates to the page that owns the
// relevant "create" flow. We deliberately don't try to auto-open any
// modal on the target page — that'd require touching those pages,
// which is out of scope here.
interface Action {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
  tint: string
}

const ACTIONS: Action[] = [
  { label: 'New Contact', href: '/contacts', icon: UserPlus, tint: 'text-blue-600' },
  { label: 'New Deal', href: '/pipelines', icon: Briefcase, tint: 'text-blue-600' },
  { label: 'New Broadcast', href: '/broadcasts/new', icon: Radio, tint: 'text-blue-600' },
  { label: 'New Automation', href: '/automations/new', icon: Zap, tint: 'text-blue-600' },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ACTIONS.map((a) => {
        const Icon = a.icon
        return (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-all hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ${a.tint}`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold text-slate-900">{a.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
