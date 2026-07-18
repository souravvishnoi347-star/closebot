export interface CaseStudy {
  slug: string;
  year: string;
  title: string;
  companyName: string;
  color: string; // Tailwind color class for the card
  heroImage: string;
  aboutCompany: string;
  challenge: string;
  solution: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nexora",
    year: "2026",
    title: "How Voltchat AI helped boost deal closures by 40% in just 3 months",
    companyName: "Nexora",
    color: "bg-red-600",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1600&q=80",
    aboutCompany: "Nexora, a fast-growing B2B software provider, faced stagnant online sales despite strong website traffic. Their marketing and sales efforts were disjointed, and campaign execution was delayed due to manual processes and a lack of integration across systems.",
    challenge: "Before adopting Voltchat AI, Nexora's sales team relied on outdated spreadsheets, scattered CRM tools, and manual updates. Leads were falling through the cracks, pipeline visibility was poor, and follow-ups were inconsistent. As a result, their close rates were stagnant and sales reps were frustrated.",
    solution: [
      "Centralized all lead data into one unified WhatsApp CRM platform",
      "Customized their pipeline stages to match specific sales journeys",
      "Enabled real-time deal tracking for every sales rep and manager",
      "Set up automation for follow-ups, reminders, and lead nurturing",
      "Used performance dashboards to monitor activity and conversions"
    ],
    results: [
      "Deal closure rate increased by 40%",
      "Average follow-up time decreased by 55%",
      "Team collaboration improved, thanks to shared deal timelines and notes",
      "Sales cycle shortened by 18%, especially for mid-tier deals",
      "Sales managers had full pipeline visibility, enabling better coaching and forecasting"
    ],
    testimonial: {
      quote: "Voltchat AI changed everything for us. We finally have one source of truth for our pipeline. The automation alone helped our reps follow up faster, and we're seeing real impact on our bottom line.",
      author: "Elena Moore, Head of Growth at Nexora"
    }
  },
  {
    slug: "fluxenta",
    year: "2026",
    title: "How Voltchat AI reduced lead response time by 60% for Fluxenta",
    companyName: "Fluxenta",
    color: "bg-[#8AA482]",
    heroImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    aboutCompany: "Fluxenta, a mid-sized e-commerce company specializing in home and lifestyle products, faced challenges in engaging leads promptly. Their sales cycle heavily depended on immediate response to inquiries from Meta ads.",
    challenge: "Fluxenta's sales team was overwhelmed with the volume of incoming leads from WhatsApp. Manual sorting and responding meant a 12-hour average response time. By the time they reached out, the lead had often gone cold.",
    solution: [
      "Deployed the Voltchat AI smart chatbot to instantly qualify incoming leads",
      "Integrated directly with Meta Ads to pipe leads directly into the CRM",
      "Created visual automation flows to route high-value leads directly to human agents",
      "Implemented quick-reply templates for the most common product inquiries",
      "Enabled the multi-agent inbox so the entire team could collaborate on heavy traffic days"
    ],
    results: [
      "Lead response time plummeted from 12 hours to under 5 minutes",
      "60% reduction in average lead response time overall",
      "Customer satisfaction score (CSAT) increased by 25%",
      "Sales agents saved 15 hours per week on manual lead qualification",
      "Conversion rate from Meta ads improved by 32%"
    ],
    testimonial: {
      quote: "The speed at which we can now engage with potential customers is unbelievable. The AI handles the initial qualification, so my team only talks to people who are ready to buy.",
      author: "David Chen, VP of Sales at Fluxenta"
    }
  },
  {
    slug: "growthspark",
    year: "2025",
    title: "Turning missed leads into wins: A B2B success story with Voltchat AI",
    companyName: "GrowthSpark",
    color: "bg-blue-500",
    heroImage: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600&q=80",
    aboutCompany: "GrowthSpark is a boutique marketing agency helping local businesses scale. They manage high-ticket B2B sales where nurturing and building trust are paramount.",
    challenge: "Their sales process was highly personalized but incredibly manual. Follow-ups were frequently missed because they relied on sticky notes and memory. Important client details were lost in personal WhatsApp chats rather than centralized.",
    solution: [
      "Migrated all client communications to Voltchat AI's unified inbox",
      "Configured automated follow-up sequences using the visual flow builder",
      "Implemented lead scoring to identify which prospects were engaging with content",
      "Set up automated meeting reminders via WhatsApp to reduce no-shows"
    ],
    results: [
      "Zero missed follow-ups in the first quarter of implementation",
      "Meeting no-show rate dropped by 45%",
      "Closed-won revenue increased by 22% year-over-year",
      "Saved the founders 10+ hours a week in administrative tracking"
    ],
    testimonial: {
      quote: "Before Voltchat AI, we were losing money simply by forgetting to follow up. Now, the system remembers for us. It's like having a virtual sales assistant that never sleeps.",
      author: "Sarah Jenkins, Co-Founder at GrowthSpark"
    }
  },
  {
    slug: "remoterev",
    year: "2025",
    title: "How Voltchat AI helped a remote sales team work like a single unit",
    companyName: "RemoteRev",
    color: "bg-[#F97316]",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    aboutCompany: "RemoteRev provides virtual staffing solutions across the globe. Their entirely remote sales team of 25 agents operates across 4 different time zones.",
    challenge: "Visibility was non-existent. Sales managers had no idea what conversations were happening in individual agents' WhatsApp accounts. Handoffs between time zones were messy, leading to duplicate outreach and confused prospects.",
    solution: [
      "Adopted the multi-agent shared inbox with role-based access control",
      "Implemented internal notes and tagging to allow seamless shift handoffs",
      "Built comprehensive revenue analytics dashboards for managers to track performance",
      "Standardized messaging using team-wide templates"
    ],
    results: [
      "Complete visibility into all sales conversations for management",
      "Seamless 24/5 coverage across time zones without duplicate messages",
      "Onboarding time for new sales agents reduced by 2 weeks",
      "Team productivity increased by 35% as measured by outbound activity"
    ],
    testimonial: {
      quote: "Managing a remote team is hard enough. Managing a remote sales team on WhatsApp was impossible before Voltchat AI. It brought order to our chaos and unified our entire revenue engine.",
      author: "Michael Chang, Director of Sales at RemoteRev"
    }
  }
];
