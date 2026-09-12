import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROJECTS, type Project } from "../data/projects";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Featured Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Problem → Automation → Proof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Real automation systems built to solve specific business
            problems — not demos.
          </p>
        </motion.div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-emerald-400/30 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-400/10" />

              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
                <div>
                  <span className="mb-2 block font-mono text-5xl font-extrabold text-white/10 select-none sm:text-6xl">
                    {project.index}
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Key Capabilities
                    </p>
                    <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
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

                  <button
                    onClick={() => setActive(project)}
                    className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                <div
                  onClick={() => setActive(project)}
                  className="group/img w-full self-center cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-emerald-400/30 hover:shadow-emerald-500/5"
                >
                  <img
                    src={project.thumbnail}
                    alt={`Thumbnail of the n8n workflow canvas for ${project.title}`}
                    className="block h-auto w-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
