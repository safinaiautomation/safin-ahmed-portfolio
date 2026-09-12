import { Cpu, GitBranch, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: Cpu,
    title: "Practical, not theoretical",
    text: "Real n8n workflows, AI agents, APIs, and business tools — built to actually run in production.",
  },
  {
    icon: GitBranch,
    title: "Process-first thinking",
    text: "I turn repetitive business processes into reliable workflows that are easier to manage, scale, and monitor.",
  },
  {
    icon: ShieldCheck,
    title: "Built to be trusted",
    text: "Lead qualification, support automation, RAG systems, sales outreach, and approval steps where humans stay in control.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              I build practical AI automation systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Using n8n, AI agents, APIs, and business tools, my focus is
              turning repetitive business processes into reliable workflows
              that are easier to manage, scale, and monitor.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              I work with AI-powered lead qualification, customer support
              automation, RAG systems, sales outreach, human approval
              workflows, and API-based automation.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1">
            {POINTS.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 80}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-emerald-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

