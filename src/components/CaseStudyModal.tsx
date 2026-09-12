import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <div className="flex min-h-full items-start justify-center py-8 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl sm:p-9"
            >
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Project {project.index}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
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
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    The Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
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
                      className="block h-auto w-full object-cover"
                      loading="lazy"
                    />
                    {project.canvasCaption && (
                      <figcaption className="border-t border-white/5 bg-slate-900/60 px-4 py-2.5 text-center text-xs italic text-slate-400">
                        {project.canvasCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
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
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
