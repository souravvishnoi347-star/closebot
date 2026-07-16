import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn the story behind Chatmagnet AI — our mission, vision, and core values that drive us to build the smartest WhatsApp CRM for sales teams.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
