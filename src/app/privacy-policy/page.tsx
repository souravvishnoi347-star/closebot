"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-slate-500">Last Updated: 06 May, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed
            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 
            [&>p]:mb-6
            [&>strong]:text-slate-900 [&>strong]:font-bold"
        >
          <h2>Protecting Your Privacy, Our Top Priority</h2>
          <p>
            At Chatmagnet AI, your trust is our greatest asset. As a premier WhatsApp CRM and automation software, we are dedicated to maintaining the highest standards of privacy and data security. Our commitment extends to ensuring your information is handled responsibly, securely, and transparently. Whether you&apos;re a small business or a large enterprise relying on our sales pipelines, we prioritize your privacy above all else.
          </p>

          <h2>What We Collect and How We Use It</h2>
          
          <p>
            <strong>Personal Information:</strong> This includes details such as your name, email, phone number, and any other contact information you provide when signing up or interacting with our CRM services.
          </p>
          
          <p>
            <strong>Platform Usage Data:</strong> To continually improve our WhatsApp visual flow builder and automation algorithms, we gather insights about how you interact with Chatmagnet AI, including login activity, feature usage (like Kanban board movements), and routing preferences.
          </p>

          <p>
            <strong>Customer Data (Your Leads):</strong> Information you upload or manage within Chatmagnet AI, such as client details, WhatsApp chat logs, and Meta ads attributions, remains strictly your property. We use this data <em>only</em> to support your business needs, route chats, and generate analytics. We do not sell your customer data.
          </p>

          <h2>WhatsApp API Compliance</h2>
          <p>
            Because Chatmagnet AI interfaces with the official WhatsApp Business API, we strictly adhere to Meta&apos;s data privacy requirements. Any messages sent or received are processed securely in real-time. Message content is encrypted where applicable and stored securely on our cloud infrastructure exclusively for your team&apos;s access.
          </p>

          <h2>Data Security Measures</h2>
          <p>
            We deploy industry-standard encryption, firewalls, and secure socket layer (SSL) technology to protect your data. Access to your CRM data is restricted to authorized users within your organization.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy periodically to reflect changes in our software or legal requirements. We will notify you of any significant updates via email or an in-app notification.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
