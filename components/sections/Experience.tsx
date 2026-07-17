"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24">
      <Container>
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          id="experience-heading"
        />

        <ol className="relative space-y-0" aria-label="Work history">
          {experiences.map((exp, idx) => (
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
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-zinc-600 bg-zinc-950" />
                {idx !== experiences.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-zinc-800" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-zinc-400">{exp.company}</p>
                  </div>
                  <time
                    className="shrink-0 text-xs text-zinc-600"
                    dateTime={exp.endDate ?? exp.startDate}
                  >
                    {exp.period}
                  </time>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {exp.description}
                </p>

                <ul className="mt-3 space-y-1.5" role="list">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
                  {exp.tech.map((t) => (
                    <li key={t}>
                      <Badge variant="muted">{t}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
