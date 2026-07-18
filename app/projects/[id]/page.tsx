"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Database, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/components/LanguageProvider";
import { projectDetails, type SectionType } from "@/data/projectDetails";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

const projectIconMap: Record<string, { Icon: React.ComponentType<{ className?: string }>; color: string; bg: string; darkBg: string }> = {
  "bid-notice-collector": {
    Icon: Database,
    color: "text-emerald-500",
    bg: "from-emerald-50 to-emerald-100/50",
    darkBg: "dark:from-emerald-950/40 dark:to-emerald-900/20",
  },
  "paper-qa-chatbot": {
    Icon: MessageSquare,
    color: "text-amber-500",
    bg: "from-amber-50 to-amber-100/50",
    darkBg: "dark:from-amber-950/40 dark:to-amber-900/20",
  },
};

function SectionRenderer({ section }: { section: SectionType }) {
  switch (section.type) {
    case "prose":
      return (
        <div className="space-y-4">
          {section.heading && (
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          )}
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-600 leading-relaxed dark:text-zinc-400">{p}</p>
          ))}
        </div>
      );

    case "pipeline":
      return (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          <ol className="space-y-2">
            {section.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {i + 1}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    case "highlights":
      return (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {section.items.map((item, i) => (
              <div key={i} className="rounded-lg border border-zinc-200/60 bg-zinc-50/40 p-4 dark:border-zinc-800/60 dark:bg-zinc-900/40">
                <h3 className="mb-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "code":
      return (
        <div>
          {section.heading && (
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          )}
          <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            <code className="text-zinc-700 dark:text-zinc-300">{section.code}</code>
          </pre>
        </div>
      );

    case "table":
      return (
        <div>
          {section.heading && (
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          )}
          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60">
                  {section.headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {section.rows.map((row, ri) => (
                  <tr key={ri} className="hover:bg-zinc-50/60 dark:hover:bg-zinc-900/30">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "list":
      return (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { locale } = useTranslation();

  const detail = projectDetails[id];
  if (!detail) notFound();

  const content = detail[locale];
  const iconDef = projectIconMap[id];

  return (
    <div className="min-h-screen pt-14">
      <Container className="py-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "ko" ? "프로젝트 목록으로" : "Back to projects"}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Icon */}
          {iconDef && (
            <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${iconDef.bg} ${iconDef.darkBg}`}>
              <iconDef.Icon className={`h-8 w-8 ${iconDef.color}`} aria-hidden="true" />
            </div>
          )}

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {content.title}
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-500 leading-relaxed dark:text-zinc-400">
            {content.tagline}
          </p>

          {/* Tech + Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {detail.tech.map((t) => (
                <Badge key={t} variant="muted">{t}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 border-l border-zinc-200 pl-3 dark:border-zinc-700">
              <a
                href={detail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              {detail.demoUrl && (
                <a
                  href={detail.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-12 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Content sections */}
        <div className="space-y-12">
          {content.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <SectionRenderer section={section} />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
