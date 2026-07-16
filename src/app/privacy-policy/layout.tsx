import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Chatmagnet AI's privacy policy to understand how we collect, use, and protect your data while using our WhatsApp CRM platform.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
