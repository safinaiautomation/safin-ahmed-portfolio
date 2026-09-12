import { motion } from "framer-motion";
import { Search, PenTool, Hammer, FlaskConical, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Understand",
    text: "Understand the business process and requirements.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Map the workflow and automation logic.",
  },
  {
    icon: Hammer,
    title: "Build",
    text: "Build and connect the required AI, APIs, and business tools.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    text: "Test different inputs, edge cases, and workflow outcomes.",
  },
  {
    icon: PackageCheck,
    title: "Deliver",
    text: "Provide a clean, documented automation ready for use.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            How I Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A straightforward, repeatable process
          </h2>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <span className="absolute -top-3 right-4 font-mono text-xs text-slate-600">
                0{i + 1}
              </span>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 text-emerald-400">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
