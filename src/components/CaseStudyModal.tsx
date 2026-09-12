import { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/projects";

export default function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md transition-opacity duration-200 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="flex min-h-full items-start justify-center py-8 sm:py-12">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95 sm:p-9"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Project {project.index}
          </span>
          <h3 id="modal-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                The Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                The Automation
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {project.solution}
              </p>
            </div>

            {project.canvas && (
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <img
                  src={project.canvas}
                  alt={`Screenshot of the n8n workflow canvas for ${project.title}`}
                  width={project.canvasWidth}
                  height={project.canvasHeight}
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {project.canvasCaption && (
                  <figcaption className="border-t border-white/5 bg-slate-900/60 px-4 py-2.5 text-center text-xs italic text-slate-400">
                    {project.canvasCaption}
                  </figcaption>
                )}
              </figure>
            )}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Key Capabilities
              </h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.capabilities.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Result
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.outcome.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {project.pdf && (
              <div className="mt-8 flex justify-center border-t border-white/10 pt-6">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-300 hover:shadow-emerald-500/30"
                >
                  <span aria-hidden="true" className="text-base">📄</span>
                  Download Full Case Study (PDF)
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

