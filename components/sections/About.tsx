"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { useTranslation } from "@/components/LanguageProvider";

export function About() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <Container>
        <SectionHeader
          label={a.label}
          title={a.title}
          id="about-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="space-y-4 text-zinc-500 leading-relaxed dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
            <p>{a.p4}</p>
          </motion.div>

          {/* Facts / meta */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { label: a.locationLabel, value: profile.location, icon: <MapPin className="h-4 w-4" aria-hidden="true" /> },
              { label: a.focusLabel, value: a.focusValue },
              { label: a.currentlyLabel, value: a.currentlyValue },
              { label: a.openToLabel, value: a.openToValue },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-lg border border-zinc-200/60 bg-zinc-50/40 px-4 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/40"
              >
                {icon && <span className="mt-0.5 shrink-0 text-zinc-400 dark:text-zinc-500">{icon}</span>}
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-700 dark:text-zinc-300">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
