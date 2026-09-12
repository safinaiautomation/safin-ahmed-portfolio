import { motion } from "framer-motion";
import {
  Workflow,
  Sparkles,
  Plug,
  Database,
  Mail,
  Search,
  GitFork,
} from "lucide-react";

const GROUPS = [
  {
    icon: Workflow,
    label: "Automation",
    items: ["n8n"],
  },
  {
    icon: Sparkles,
    label: "AI",
    items: ["Google Gemini", "AI Agents"],
  },
  {
    icon: Plug,
    label: "Integration",
    items: ["REST API", "Webhooks", "JSON"],
  },
  {
    icon: Database,
    label: "Data",
    items: ["Google Sheets", "Supabase"],
  },
  {
    icon: Mail,
    label: "Communication",
    items: ["Gmail"],
  },
  {
    icon: Search,
    label: "RAG",
    items: ["Embeddings", "Vector Search", "Retrieval"],
  },
  {
    icon: GitFork,
    label: "Logic",
    items: ["Switch", "Conditions", "Structured Output", "Human Approval"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Skills / Tech Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The tools behind every workflow
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
