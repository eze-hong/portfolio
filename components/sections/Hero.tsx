"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { useTranslation } from "@/components/LanguageProvider";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-14"
    >
      {/* Background grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg" />

      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950"
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900/[0.03] blur-3xl dark:bg-white/[0.03]"
      />

      <Container className="relative z-10 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          {profile.availableForWork && (
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/80 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.available}
              </span>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="mt-3 text-2xl font-light tracking-tight text-zinc-500 sm:text-3xl dark:text-zinc-400"
          >
            {t.hero.role}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400"
          >
            {t.hero.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" variant="primary" size="lg">
              {t.hero.viewProjects}
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              {t.hero.getInTouch}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: [0, 1, 1, 0], y: [-10, 0, 0, 10] }
          }
          transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
          aria-hidden="true"
        >
          <ArrowDown className="h-4 w-4 text-zinc-400 dark:text-zinc-600" />
        </motion.div>
      </Container>
    </section>
  );
}
