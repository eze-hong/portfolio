"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills, skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24">
      <Container>
        <SectionHeader
          label="Skills"
          title="What I work with"
          description="Technologies and tools I reach for when building products."
          id="skills-heading"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ key, label }, idx) => {
            const categorySkills = skills.filter((s) => s.category === key);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                  {label}
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {categorySkills.map((skill) => (
                    <li key={skill.name}>
                      <motion.span
                        className={cn(
                          "inline-flex cursor-default items-center rounded-md border border-zinc-200 bg-zinc-100/60 px-2.5 py-1 text-xs font-medium text-zinc-600",
                          "transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-200 hover:text-zinc-900",
                          "dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300",
                          "dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
                        )}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        {skill.name}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
