import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Chatmagnet AI account to manage your WhatsApp CRM, respond to leads, and build visual automation flows.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
