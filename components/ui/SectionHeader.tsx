"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {label}
        </p>
      )}
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-zinc-500 leading-relaxed dark:text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
