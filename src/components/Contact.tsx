import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MessageCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const CONTACT_EMAIL = "safin.new03@gmail.com";
const TELEGRAM_URL = "https://t.me/SafinAIAutomation";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Project Automation Inquiry from ${form.name || "Portfolio Visitor"}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: open user's default email client
      const subject = encodeURIComponent(
        `Automation project inquiry from ${form.name || "website visitor"}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nWhat they want to automate:\n${form.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />

          <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Contact
          </p>
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a repetitive business process
            <br className="hidden sm:block" /> that could be automated?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Tell me what you're doing manually, and I'll help turn it into an
            automated workflow.
          </p>

          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-300 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-300 backdrop-blur transition-all hover:border-emerald-400/60 hover:bg-emerald-400/20"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on Telegram
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mt-10 grid grid-cols-1 gap-5 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Your name"
                className="min-h-[48px] w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@company.com"
                className="min-h-[48px] w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              >
                What do you want to automate?
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="e.g. Qualifying and routing inbound leads from our website form..."
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-300 hover:shadow-emerald-500/30 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                Thank you! Your message has been sent successfully. I will get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <p className="text-sm text-amber-300">
                Opening your email client to send this message directly to {CONTACT_EMAIL}…
              </p>
            )}
          </form>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Mail className="h-4 w-4" />
              </span>
              Email
            </a>
            <a
              href="#home"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Globe className="h-4 w-4" />
              </span>
              Website
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <MessageCircle className="h-4 w-4" />
              </span>
              Chat / Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
