export interface Project {
  id: string;
  index: string;
  title: string;
  stack: string[];
  summary: string;
  thumbnail: string;
  canvas: string;
  canvasCaption?: string;
  pdf?: string;
  pdfLabel?: string;
  capabilities: string[];
  problem: string;
  solution: string;
  outcome: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "lead-qualification",
    index: "01",
    title: "AI Lead Qualification & Routing System",
    stack: ["n8n", "Gemini", "Gmail", "Google Sheets"],
    summary:
      "An AI-powered lead triage workflow that receives leads via webhook, cleans the data, qualifies leads as HOT/WARM/COLD, and automatically routes each lead to the appropriate action.",
    thumbnail: "/images/projects/lead-qualification/thumbnail.png",
    canvas: "/images/projects/lead-qualification/workflow-canvas.png",
    canvasCaption: "The n8n workflow canvas for the AI lead qualification & routing system.",
    pdf: "/case-studies/ai-lead-qualification-case-study.pdf",
    pdfLabel: "Lead Qualification — PDF",
    capabilities: [
      "AI lead qualification",
      "Structured JSON output",
      "Lead scoring",
      "Hot/Warm/Cold routing",
      "Gmail alerts",
      "Google Sheets tracking",
    ],
    problem:
      "Incoming leads from forms and landing pages were piling up in one inbox with no way to tell which ones were worth immediate attention. Sales reps were spending time manually reading every submission before deciding who to contact first.",
    solution:
      "Leads are captured through a webhook, normalized and cleaned, then passed to an AI step that returns a structured JSON verdict (HOT / WARM / COLD) along with a lead score and reasoning. A switch node routes the lead: HOT leads trigger an instant Gmail alert to the sales team, WARM leads are queued for follow-up, and every lead is logged to Google Sheets for tracking and reporting.",
    outcome: [
      "Sales team is notified instantly for high-intent leads",
      "Every lead is scored and logged automatically",
      "No manual sorting of incoming leads",
    ],
  },
  {
    id: "support-rag",
    index: "02",
    title: "AI Customer Support RAG Automation",
    stack: ["n8n", "Gemini", "Supabase", "Google Docs"],
    summary:
      "A RAG-based customer support system that indexes internal documentation, stores embeddings in Supabase, retrieves relevant knowledge, and generates context-aware answers using Gemini. Queries that need additional review can be escalated to a human.",
    thumbnail: "/images/projects/customer-support-rag/thumbnail.png",
    canvas: "/images/projects/customer-support-rag/workflow-canvas.png",
    canvasCaption: "The n8n workflow canvas for the AI customer support RAG automation.",
    pdf: "/case-studies/ai-customer-support-rag-case-study.pdf",
    pdfLabel: "Customer Support RAG — PDF",
    capabilities: [
      "RAG pipeline",
      "Document indexing",
      "Gemini embeddings",
      "Supabase vector search",
      "AI support agent",
      "Structured output",
      "Human escalation",
    ],
    problem:
      "Support documentation was scattered across Google Docs and existing FAQ pages, making it slow for a support team to find accurate answers and respond consistently to repeated customer questions.",
    solution:
      "Internal docs are chunked and converted into embeddings with Gemini, then stored in a Supabase vector store. When a customer question comes in, the workflow retrieves the most relevant chunks, and an AI agent generates a context-aware answer with structured output. If the AI's confidence is low or the query needs judgement, it is escalated to a human agent instead of guessing.",
    outcome: [
      "Faster, more consistent answers to common questions",
      "Documentation stays searchable as it grows",
      "Human agents only step in when it actually matters",
    ],
  },
  {
    id: "sales-outreach",
    index: "03",
    title: "AI Sales Outreach & Follow-up Automation",
    stack: ["n8n", "Google Sheets", "Gmail", "AI"],
    summary:
      "An automated B2B outreach workflow that prepares leads, generates personalized emails with AI, requires human approval before sending, and manages follow-ups and lead status updates.",
    thumbnail: "/images/projects/sales-outreach/thumbnail.png",
    canvas: "/images/projects/sales-outreach/workflow-canvas.png",
    canvasCaption: "The n8n workflow canvas for the AI sales outreach & follow-up automation.",
    pdf: "/case-studies/ai-sales-outreach-case-study.pdf",
    pdfLabel: "Sales Outreach — PDF",
    capabilities: [
      "Scheduled lead processing",
      "AI email personalization",
      "Structured output",
      "Human approval",
      "Automated follow-up",
      "Lead status tracking",
    ],
    problem:
      "Manually writing personalized outreach emails for every prospect and tracking who needed a follow-up was time-consuming and easy to fall behind on, especially at volume.",
    solution:
      "A scheduled workflow pulls new leads from Google Sheets, gathers relevant context, and uses AI to draft a personalized outreach email in a structured format. Drafts are sent for human approval before going out, keeping a person in control of tone and accuracy. Once approved, emails are sent via Gmail, and the workflow automatically schedules and tracks follow-ups while updating lead status in the sheet.",
    outcome: [
      "Personalized outreach at scale without losing quality control",
      "No lead falls through the cracks on follow-up",
      "Lead status stays up to date automatically",
    ],
  },
];
