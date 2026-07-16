import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest insights on WhatsApp marketing, sales automation, AI chatbots, and CRM strategies from the Chatmagnet AI team.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
