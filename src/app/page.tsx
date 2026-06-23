import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Zap,
  ArrowRight,
  PlayCircle,
  LayoutDashboard,
  MoreHorizontal,
  Calendar,
  Bot,
  Kanban,
  Settings,
  Tag,
  Webhook,
  CheckCircle2,
  Hexagon,
  Triangle,
  Circle,
  Shield,
  Diamond,
  Star
} from 'lucide-react';

export default function RootPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30] font-sans selection:bg-blue-600/20">
      
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-[#0b1c30]">
            <Zap className="h-6 w-6 text-blue-600 fill-blue-600" />
            Closebot
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-[16px]">
            <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How it Works</Link>
            <Link href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
          </div>
          
          {/* Primary Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-600 font-semibold hover:text-blue-600 hover:bg-blue-50">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-sky-400 text-white font-bold rounded-full px-6 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDEgMSAwIDIiIGZpbGw9InJnYmEoMCwgNzQsIDE5OCwgMC4wNSkiLz48L3N2Zz4=')]">
          {/* Decorative Glows */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-sm mb-8 animate-fade-in-up shadow-sm">
              <Zap className="w-4 h-4 fill-blue-600" />
              Meta Ads Integration Now Live
            </div>
            
            {/* Headlines */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0b1c30] max-w-4xl mx-auto mb-6 leading-[1.1] tracking-tight">
              Turn WhatsApp Leads into <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">Customers</span> on Autopilot
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The ultimate CRM for sales teams. Capture leads straight from Meta Ads, let AI engage them instantly on WhatsApp, and visualize your pipeline in real-time.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto">
              <Link href="/signup" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-14 bg-gradient-to-r from-blue-600 to-sky-400 text-white font-bold text-lg px-8 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#demo" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-14 bg-white border-slate-300 text-slate-700 font-bold text-lg px-8 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Hero Mockup (Kanban UI) */}
            <div className="w-full max-w-5xl mx-auto relative rounded-2xl shadow-2xl border border-slate-200 bg-white/50 backdrop-blur-sm overflow-hidden transform-gpu hover:scale-[1.01] transition-transform duration-500">
              {/* Mockup Header */}
              <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 flex items-center gap-2 text-slate-500 font-semibold text-sm">
                  <LayoutDashboard className="w-4 h-4" />
                  Sales Pipeline - Q3
                </div>
              </div>
              
              {/* Kanban Board Area */}
              <div className="bg-slate-50 p-6 flex gap-6 overflow-x-auto min-h-[400px] text-left">
                {/* Column 1: New Lead */}
                <div className="min-w-[280px] flex-1 bg-white/60 rounded-xl p-3 border border-slate-200 flex flex-col gap-3 shadow-sm">
                  <div className="flex justify-between items-center px-1 mb-2">
                    <h3 className="font-bold text-slate-800">New Lead</h3>
                    <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">2</span>
                  </div>
                  
                  {/* Card 1 */}
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Meta Ad</span>
                      <MoreHorizontal className="text-slate-400 w-4 h-4" />
                    </div>
                    <p className="font-bold text-slate-800 mb-1 text-sm">Rohan Sharma</p>
                    <p className="text-xs text-slate-500 mb-3">+91 98765 43210</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-700">RS</div>
                      <span className="text-[10px] text-slate-400 font-medium">Just now</span>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Organic</span>
                      <MoreHorizontal className="text-slate-400 w-4 h-4" />
                    </div>
                    <p className="font-bold text-slate-800 mb-1 text-sm">Priya Desai</p>
                    <p className="text-xs text-slate-500 mb-3">+91 91234 56789</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-xs font-bold text-emerald-700">PD</div>
                      <span className="text-[10px] text-slate-400 font-medium">10m ago</span>
                    </div>
                  </div>
                </div>
                
                {/* Column 2: Meeting Booked */}
                <div className="min-w-[280px] flex-1 bg-white/60 rounded-xl p-3 border border-slate-200 flex flex-col gap-3 shadow-sm">
                  <div className="flex justify-between items-center px-1 mb-2">
                    <h3 className="font-bold text-slate-800">Meeting Booked</h3>
                    <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">1</span>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-l-blue-600 border-y-slate-100 border-r-slate-100 hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 pl-1">
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Hot Lead</span>
                      <MoreHorizontal className="text-slate-400 w-4 h-4" />
                    </div>
                    <p className="font-bold text-slate-800 mb-1 pl-1 text-sm">Amit Patel</p>
                    <div className="flex items-center gap-1 text-xs text-blue-700 mb-3 pl-1 font-semibold bg-blue-50 p-1.5 rounded inline-flex">
                      <Calendar className="w-3.5 h-3.5" />
                      Tomorrow, 2:00 PM
                    </div>
                    <div className="flex items-center gap-2 pl-1 mt-1">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Agent&background=0D8ABC&color=fff" alt="Avatar" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">Assigned to You</span>
                    </div>
                  </div>
                </div>
                
                {/* Column 3: Closed Won */}
                <div className="min-w-[280px] flex-1 bg-white/30 rounded-xl p-3 border border-slate-200/50 flex flex-col gap-3 opacity-70">
                  <div className="flex justify-between items-center px-1 mb-2">
                    <h3 className="font-bold text-slate-800">Closed Won</h3>
                    <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">0</span>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg h-24 flex items-center justify-center text-slate-400 font-medium text-sm">
                    Drop leads here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Social Proof Section */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
              TRUSTED BY 500+ GROWING BUSINESSES AND AGENCIES
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-slate-700"><Hexagon className="w-8 h-8"/><span className="font-extrabold text-xl">HexaCorp</span></div>
              <div className="flex items-center gap-2 text-slate-700"><Triangle className="w-8 h-8"/><span className="font-extrabold text-xl">Trigon</span></div>
              <div className="flex items-center gap-2 text-slate-700"><Circle className="w-8 h-8"/><span className="font-extrabold text-xl">Orbit</span></div>
              <div className="flex items-center gap-2 text-slate-700"><Shield className="w-8 h-8"/><span className="font-extrabold text-xl">Guardia</span></div>
              <div className="flex items-center gap-2 text-slate-700"><Diamond className="w-8 h-8"/><span className="font-extrabold text-xl">Gemini</span></div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid Section */}
        <section className="py-24 bg-[#f8f9ff]" id="features">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1c30] tracking-tight mb-4">
                Everything you need to scale
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Powerful tools designed to help you capture, qualify, and close more deals without the manual grunt work.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: AI Auto-Replies (Col span 2) */}
              <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 overflow-hidden group">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Bot className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">AI Auto-Replies</h3>
                  <p className="text-slate-600 leading-relaxed">Our AI doesn't just chat; it qualifies. It understands intent, answers FAQs, and books meetings directly into your calendar 24/7.</p>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-center justify-center">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="bg-white p-3.5 rounded-2xl rounded-bl-none shadow-sm max-w-[85%] text-sm border border-slate-100 text-slate-700">
                      Hi! I'm interested in your pricing for agencies.
                    </div>
                    <div className="bg-blue-600 text-white p-3.5 rounded-2xl rounded-br-none shadow-sm max-w-[85%] self-end text-sm">
                      <div className="flex items-center gap-1.5 mb-1.5 opacity-90">
                        <Zap className="w-3.5 h-3.5 fill-white" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">AI Assistant</span>
                      </div>
                      Of course! We have a dedicated Agency plan starting at $199/mo. Would you like to see a breakdown of the features?
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2: Visual Pipelines (Col span 1) */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Kanban className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Visual Pipelines</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Track every deal's progress with a drag-and-drop interface that keeps your team aligned.</p>
                <div className="flex gap-2.5">
                  <div className="h-2.5 w-1/3 bg-blue-600 rounded-full"></div>
                  <div className="h-2.5 w-1/3 bg-slate-200 rounded-full"></div>
                  <div className="h-2.5 w-1/3 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              
              {/* Card 3: Smart Automations (Col span 3) */}
              <div className="md:col-span-3 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="max-w-md">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Settings className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Smart Automations</h3>
                  <p className="text-slate-600 leading-relaxed">Connect Closebot to your existing stack. Trigger webhooks, tag leads, and sync data across 5,000+ apps via Zapier or Make.</p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center bg-slate-50 p-6 rounded-xl border border-slate-100 flex-1 w-full md:w-auto">
                  <div className="px-4 py-2 bg-white rounded-full border border-slate-200 flex items-center gap-2 text-sm font-semibold text-slate-700 shadow-sm">
                    <Tag className="w-4 h-4 text-blue-600" />
                    Tag: "Hot Lead"
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  <div className="px-4 py-2 bg-white rounded-full border border-slate-200 flex items-center gap-2 text-sm font-semibold text-slate-700 shadow-sm">
                    <Webhook className="w-4 h-4 text-sky-600" />
                    Post to Webhook
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  <div className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 text-sm font-bold shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                    Slack Notified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-white border-y border-slate-200" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1c30] tracking-tight mb-4">How it Works</h2>
            </div>
            <div className="max-w-2xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-blue-100"></div>
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white font-bold shadow-lg shadow-blue-500/30 shrink-0 text-xl">
                    1
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Connect your WhatsApp Business number.</h3>
                    <p className="text-slate-600 text-lg">Link your official WhatsApp API or Business account in seconds with our secure integration.</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white font-bold shadow-lg shadow-blue-500/30 shrink-0 text-xl">
                    2
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Train the AI by pasting your business knowledge.</h3>
                    <p className="text-slate-600 text-lg">Upload PDFs, paste URLs, or type FAQs. Our AI learns your business tone and details instantly.</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative flex items-start gap-8">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 text-white font-bold shadow-lg shadow-blue-500/30 shrink-0 text-xl">
                    3
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Run ads and watch the AI close deals.</h3>
                    <p className="text-slate-600 text-lg">Launch your Meta Ads. Closebot handles every conversation, qualifies leads, and books meetings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#f8f9ff]" id="pricing">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1c30] tracking-tight mb-4">Simple, Transparent Pricing</h2>
              <p className="text-slate-600 text-lg">Choose the plan that fits your growth stage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
              {/* Monthly Plan */}
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-md flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Monthly Plan</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-slate-900">₹1,499</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6" />
                    Unlimited AI Conversations
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6" />
                    Meta Ads Integration
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6" />
                    CRM Dashboard Access
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full h-14 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg rounded-full transition-all">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
              
              {/* Lifetime Deal */}
              <div className="bg-white p-10 rounded-3xl border-2 border-blue-600 shadow-2xl relative md:scale-105 z-10 flex flex-col">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-400 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Lifetime Deal</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-slate-900">₹24,999</span>
                  <span className="text-slate-500 font-medium">/one-time</span>
                </div>
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6 fill-blue-50" />
                    Everything in Monthly
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6 fill-blue-50" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-6 h-6 fill-blue-50" />
                    No Monthly Fees Ever
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-sky-400 hover:shadow-lg hover:shadow-blue-500/40 text-white font-bold text-lg rounded-full transition-all hover:-translate-y-0.5">
                    Get Lifetime Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white border-t border-slate-200" id="testimonials">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1c30] tracking-tight">Loved by teams closing more deals.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-6">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg">"Closebot turned our WhatsApp from a mess into a machine. We qualify patients before they even walk in."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">SL</div>
                  <div>
                    <p className="font-bold text-slate-900">Dr. Sarah L.</p>
                    <p className="text-sm text-slate-500 font-medium">Dental Clinic Owner</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Card 2 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-6">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg">"The AI auto-replies are a game-changer. I don't lose leads to slow response times anymore."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">MR</div>
                  <div>
                    <p className="font-bold text-slate-900">Mark R.</p>
                    <p className="text-sm text-slate-500 font-medium">Real Estate Agent</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Card 3 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-6">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg">"Finally, a CRM that actually works with WhatsApp. The lifetime deal paid for itself in a week."</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">EV</div>
                  <div>
                    <p className="font-bold text-slate-900">Elena V.</p>
                    <p className="text-sm text-slate-500 font-medium">Course Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Logo */}
          <div className="font-extrabold text-2xl tracking-tight text-[#0b1c30] flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600 fill-blue-600" />
            Closebot
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 font-medium text-slate-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact Support</Link>
          </div>
          
          {/* Copyright */}
          <div className="font-medium text-slate-400 text-sm">
            © {new Date().getFullYear()} Closebot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
