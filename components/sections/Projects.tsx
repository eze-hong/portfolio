"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Database, GraduationCap, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useTranslation } from "@/components/LanguageProvider";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

type ProjectIcon = React.ComponentType<{ className?: string }>;

const projectIcons: Record<string, { Icon: ProjectIcon; color: string; bg: string; darkBg: string }> = {
  "iris-maintenance": {
    Icon: Shield,
    color: "text-blue-500",
    bg: "from-blue-50 to-blue-100/50",
    darkBg: "dark:from-blue-950/40 dark:to-blue-900/20",
  },
  "bid-notice-collector": {
    Icon: Database,
    color: "text-emerald-500",
    bg: "from-emerald-50 to-emerald-100/50",
    darkBg: "dark:from-emerald-950/40 dark:to-emerald-900/20",
  },
  "moe-info-system": {
    Icon: GraduationCap,
    color: "text-violet-500",
    bg: "from-violet-50 to-violet-100/50",
    darkBg: "dark:from-violet-950/40 dark:to-violet-900/20",
  },
  "paper-qa-chatbot": {
    Icon: MessageSquare,
    color: "text-amber-500",
    bg: "from-amber-50 to-amber-100/50",
    darkBg: "dark:from-amber-950/40 dark:to-amber-900/20",
  },
};

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24">
      <Container>
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
          id="projects-heading"
        />

        <ul className="grid gap-6 sm:grid-cols-2" role="list">
          {projects.map((project, idx) => {
            const projectI18n = t.projects.items[project.id as keyof typeof t.projects.items];
            const title = projectI18n?.title ?? project.title;
            const description = projectI18n?.description ?? project.description;
            const iconDef = projectIcons[project.id];

            return (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200/60 bg-zinc-50/40 transition-colors hover:border-zinc-300 hover:bg-zinc-100/80 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80"
              >
                {/* Icon banner */}
                {iconDef && (
                  <div
                    className={`flex h-36 w-full items-center justify-center bg-gradient-to-br ${iconDef.bg} ${iconDef.darkBg}`}
                  >
                    <iconDef.Icon
                      className={`h-14 w-14 ${iconDef.color} opacity-80 transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${title} GitHub`}
                          className="text-zinc-400 transition-colors hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded dark:text-zinc-500 dark:hover:text-zinc-200"
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${title} demo`}
                          className="text-zinc-400 transition-colors hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded dark:text-zinc-500 dark:hover:text-zinc-200"
                        >
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="muted">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
