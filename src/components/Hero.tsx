import { ArrowRight, Mail } from "lucide-react";

const STACK = [
  "n8n",
  "AI Agents",
  "Google Gemini",
  "APIs",
  "Webhooks",
  "Google Sheets",
  "Gmail",
  "Supabase",
];

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-28 pb-20"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE FOR AUTOMATION PROJECTS
        </div>

        {/* Critical LCP element: rendered immediately without JS animation delay */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          AI Automation &amp;{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            n8n Workflow
          </span>{" "}
          Expert
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
          I build AI-powered automation systems that help businesses automate
          repetitive tasks, qualify leads, manage customer support, and
          streamline sales workflows.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("#projects")}
            className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95"
          >
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </div>

        <div className="mt-16 w-full">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Core Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

