import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Voltchat AI team. Reach us via email, WhatsApp, or social media for sales inquiries, support, and partnerships.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
