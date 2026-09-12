import { Workflow } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950">
            <Workflow className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-bold tracking-wider uppercase">
            SAFIN <span className="text-emerald-400">AHMED</span>
          </span>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} — AI Automation &amp; n8n Workflow Systems.
        </p>
      </div>
    </footer>
  );
}
