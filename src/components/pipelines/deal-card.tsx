"use client";

import type { Deal, PipelineStage } from "@/types";
import { Calendar, Check, X } from "lucide-react";

interface DealCardProps {
  deal: Deal;
  stage: PipelineStage | null;
  onEdit: (deal: Deal) => void;
  isOverlay?: boolean;
}

function formatCurrency(value: number, currency?: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function initials(name?: string, fallback?: string) {
  const source = (name || fallback || "?").trim();
  if (!source) return "?";
  return source.charAt(0).toUpperCase();
}

export function DealCard({ deal, stage, onEdit, isOverlay }: DealCardProps) {
  const contactLabel = deal.contact?.name || deal.contact?.phone || "No contact";
  const assigneeLabel = deal.assignee?.full_name || null;

  return (
    <button
      type="button"
      onClick={(e) => {
        if (isOverlay) return;
        e.stopPropagation();
        onEdit(deal);
      }}
      style={{ borderTopColor: stage?.color ?? "#94a3b8" }}
      className={`group relative w-full cursor-pointer rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all border-t-4 ${
        isOverlay
          ? "shadow-xl scale-105 rotate-2"
          : "hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300"
      }`}
    >

      <div className="flex justify-between items-start mb-2">
        <span className="bg-slate-100 text-slate-700 font-medium text-xs px-2 py-1 rounded line-clamp-1 break-all">
          {deal.title}
        </span>
        {deal.status === "won" && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-100 ml-2">
            <Check className="h-3 w-3" />
            Won
          </span>
        )}
        {deal.status === "lost" && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 border border-red-100 ml-2">
            <X className="h-3 w-3" />
            Lost
          </span>
        )}
      </div>

      <h4 className="font-bold text-lg text-slate-900 mb-1">
        {formatCurrency(deal.value, deal.currency)}
      </h4>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700 border border-blue-200">
            {initials(deal.contact?.name, deal.contact?.phone)}
          </span>
          <span className="font-medium text-xs text-slate-600 truncate max-w-[100px]">
            {contactLabel}
          </span>
        </div>

        {deal.expected_close_date && (
          <span className="text-slate-500 text-[11px] flex items-center gap-1 font-medium">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(deal.expected_close_date)}
          </span>
        )}
      </div>

      {assigneeLabel && (
        <div className="absolute top-4 right-4 flex items-center justify-end">
          <span
            title={assigneeLabel}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100 text-[9px] font-bold text-indigo-700 shadow-sm"
          >
            {initials(assigneeLabel)}
          </span>
        </div>
      )}
    </button>
  );
}
