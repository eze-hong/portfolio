"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { useTranslation } from "@/components/LanguageProvider";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24">
      <Container>
        <SectionHeader
          label={t.experience.label}
          title={t.experience.title}
          id="experience-heading"
        />

        <ol className="relative space-y-0" aria-label="Work history">
          {experiences.map((exp, idx) => {
            const expI18n = t.experience.items[exp.id as keyof typeof t.experience.items];
            const company = expI18n?.company ?? exp.company;
            const role = expI18n?.role ?? exp.role;
            const description = expI18n?.description ?? exp.description;
            const highlights = expI18n?.highlights ?? exp.highlights;

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center" aria-hidden="true">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950" />
                  {idx !== experiences.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{role}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{company}</p>
                    </div>
                    <time
                      className="shrink-0 text-xs text-zinc-400 dark:text-zinc-600"
                      dateTime={exp.endDate ?? exp.startDate}
                    >
                      {exp.period}
                    </time>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                    {description}
                  </p>

                  <ul className="mt-3 space-y-1.5" role="list">
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
                    {exp.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="muted">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
