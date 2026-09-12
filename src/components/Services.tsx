import {
  Workflow,
  Bot,
  Target,
  Headset,
  Send,
  Plug,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    text: "Automate repetitive business processes with n8n.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    text: "Build AI agents that can reason, use tools, and perform actions.",
  },
  {
    icon: Target,
    title: "Lead Automation",
    text: "Capture, qualify, score, and route leads automatically.",
  },
  {
    icon: Headset,
    title: "Customer Support Automation",
    text: "Build knowledge-based AI support systems with RAG.",
  },
  {
    icon: Send,
    title: "Sales Automation",
    text: "Generate personalized outreach, manage approvals, and automate follow-ups.",
  },
  {
    icon: Plug,
    title: "API & Business Integrations",
    text: "Connect forms, apps, databases, CRMs, email, and AI services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            What I Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Automation systems that solve real business problems
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 70}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/0 blur-2xl transition-colors group-hover:bg-emerald-400/10" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 text-emerald-400">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

