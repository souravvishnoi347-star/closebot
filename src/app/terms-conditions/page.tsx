"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm font-medium text-slate-500">Last Updated: 06 May, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed
            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 
            [&>p]:mb-6
            [&>strong]:text-slate-900 [&>strong]:font-bold"
        >
          <h2>Welcome to Closebot</h2>
          <p>
            These Terms & Conditions govern your use of the Closebot software, including our WhatsApp CRM, shared team inbox, visual flow builder, and any associated services provided by Rivonic Solutions. By accessing or using Closebot, you agree to be bound by these terms.
          </p>

          <h2>Use of the Software</h2>
          <p>
            Closebot provides a Software as a Service (SaaS) platform to help businesses manage leads and automate WhatsApp communication. 
          </p>
          <p>
            <strong>Authorized Use:</strong> You agree to use the software solely for lawful business purposes. You must not use Closebot to send spam, unsolicited promotional messages, or any content that violates Meta&apos;s WhatsApp Business policies.
          </p>

          <h2>WhatsApp Business API Compliance</h2>
          <p>
            As a user of Closebot, you are responsible for maintaining compliance with WhatsApp&apos;s Commerce and Business Policies. Closebot is not liable if your WhatsApp Business number is banned or restricted by Meta due to policy violations, spam complaints, or unauthorized broadcasts.
          </p>

          <h2>Subscriptions and Payments</h2>
          <p>
            <strong>Billing:</strong> Access to premium features requires an active subscription. Payments are processed securely (e.g., via Razorpay). Subscriptions are billed in advance on a monthly or yearly cycle.
          </p>
          <p>
            <strong>Refunds:</strong> Unless required by law, subscription fees are non-refundable. You may cancel your subscription at any time, and the cancellation will take effect at the end of the current billing cycle.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Closebot and Rivonic Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of the CRM platform, including but not limited to loss of data, loss of business revenue, or interruptions to your sales pipeline.
          </p>

          <h2>Account Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms & Conditions, particularly regarding WhatsApp spam policies or unauthorized access to our platform.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact our support team at hello@closebot.io.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
