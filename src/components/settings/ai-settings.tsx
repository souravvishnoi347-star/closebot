"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AISettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">AI Settings</h1>
        <p className="text-slate-500 mt-2">
          Configure how Closebot&apos;s AI interacts with your contacts and manages pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: Primary Configs */}
        <div className="xl:col-span-2 space-y-8">
          {/* AI Model Configuration Card */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">AI Model Configuration</h2>
                  <p className="text-sm text-slate-500">
                    Select the underlying engine and tune its creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Model Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Primary AI Engine
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative flex cursor-pointer rounded-xl border-2 border-primary bg-primary/5 p-4 shadow-sm focus:outline-none">
                    <input defaultChecked className="sr-only" name="ai_model" type="radio" value="gpt4" />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="font-bold text-slate-900">Closebot Premium</p>
                          <p className="text-slate-500 mt-1">
                            Best for complex reasoning and nuanced sales conversations.
                          </p>
                        </div>
                      </div>
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    </div>
                  </label>
                  <label className="relative flex cursor-pointer rounded-xl border-2 border-transparent bg-slate-50 p-4 hover:bg-slate-100 transition-colors focus:outline-none ring-1 ring-slate-200">
                    <input className="sr-only" name="ai_model" type="radio" value="gpt35" />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="font-bold text-slate-900">Closebot Fast</p>
                          <p className="text-slate-500 mt-1">
                            Optimized for speed and high-volume, simple inquiries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Temperature Slider */}
              <div className="pt-4">
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-semibold text-slate-900">
                    Creativity (Temperature)
                  </label>
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded-md">
                    Balanced (0.7)
                  </span>
                </div>
                <input
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  max="1"
                  min="0"
                  step="0.1"
                  type="range"
                  defaultValue="0.7"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>Precise & Factual</span>
                  <span>Creative & Conversational</span>
                </div>
              </div>

              {/* System Prompt */}
              <div className="pt-4">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Base System Prompt (Advanced)
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
                  placeholder="You are a helpful sales assistant..."
                  rows={4}
                ></textarea>
                <p className="text-xs text-slate-500 mt-2">
                  This overrides default bot behavior. Leave blank to use standard Closebot persona.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <Button className="bg-primary text-slate-900 shadow-sm hover:bg-primary/90">
                Save Model Settings
              </Button>
            </div>
          </section>

          {/* Suggested Reply Training */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined">model_training</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Suggested Reply Context</h2>
                  <p className="text-sm text-slate-500">
                    Upload documents or link pages to train the AI on your specific business knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-primary transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-primary">
                    upload_file
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Upload Knowledge Base Documents
                </h3>
                <p className="text-sm text-slate-500 mb-4">PDF, DOCX, or TXT up to 10MB each.</p>
                <Button variant="outline" className="bg-white hover:bg-slate-50">
                  Browse Files
                </Button>
              </div>

              {/* Active Knowledge Sources */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Active Knowledge Sources
                </h3>
                <div className="space-y-3">
                  {/* Source Item */}
                  <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">description</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Product_Pricing_Q3.pdf
                        </p>
                        <p className="text-xs text-slate-500">Synced 2 hours ago • 2.4 MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md font-semibold border border-emerald-100">
                        Indexed
                      </span>
                      <button className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Source Item */}
                  <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">language</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Website FAQ Scrape</p>
                        <p className="text-xs text-slate-500">Synced 1 day ago • 45 pages</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md font-semibold border border-emerald-100">
                        Indexed
                      </span>
                      <button className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Integrations & Toggles */}
        <div className="space-y-8">
          {/* WhatsApp Auto-pilot */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full -z-0 opacity-50"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">WhatsApp Auto-Pilot</h2>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Allow AI to autonomously reply to incoming WhatsApp messages based on your training
                data.
              </p>

              <div className="space-y-6">
                {/* Main Toggle */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Enable Auto-Pilot</p>
                    <p className="text-xs text-slate-500 mt-1">Currently active on 2 numbers</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Sub Settings */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 text-sm">
                        schedule
                      </span>
                      <span className="text-sm font-medium text-slate-700">Delay before reply</span>
                    </div>
                    <select className="text-sm bg-white border border-slate-200 rounded-lg py-1.5 px-3 focus:ring-primary focus:border-primary font-medium text-slate-700">
                      <option>Instant</option>
                      <option defaultValue="30 seconds">30 seconds</option>
                      <option>1 minute</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 text-sm">
                        front_hand
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        Handoff on complex intent
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 text-sm">
                        notifications_active
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        Notify agent on handoff
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats Widget */}
          <section
            className="rounded-2xl p-6 relative overflow-hidden text-slate-900 shadow-md"
            style={{ background: "linear-gradient(135deg, #004ac6 0%, #003ea8 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xs font-bold text-blue-200 mb-4 uppercase tracking-wider">
                AI Performance (Last 7 Days)
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-3xl font-bold">4,289</span>
                    <span className="text-sm font-bold text-emerald-300 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 12%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-200">Messages Auto-replied</p>
                </div>
                <div className="h-px w-full bg-white/20"></div>
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-3xl font-bold">87%</span>
                    <span className="text-sm font-bold text-emerald-300 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 3%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-200">Resolution Rate w/o Handoff</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
