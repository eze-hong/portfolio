"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <Container>
        <SectionHeader
          label="About"
          title="A bit about me"
          id="about-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="space-y-4 text-zinc-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              I&rsquo;m a frontend engineer with a passion for building products
              that feel great to use. I care deeply about performance,
              accessibility, and the details that make an interface feel{" "}
              <em className="text-zinc-300 not-italic">right</em>.
            </p>
            <p>
              Over the last few years I&rsquo;ve worked on design systems, data-
              heavy dashboards, and consumer apps — always with an eye on the
              user experience and the developer experience of the teams around
              me.
            </p>
            <p>
              When I&rsquo;m not writing code, I&rsquo;m probably reading about
              programming language theory, tinkering with mechanical keyboards,
              or hiking somewhere with too much elevation gain.
            </p>
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
              { label: "Location", value: profile.location, icon: <MapPin className="h-4 w-4" aria-hidden="true" /> },
              { label: "Focus", value: "Frontend — React / Next.js ecosystem" },
              { label: "Currently", value: "Building scalable fintech UIs at Toss" },
              { label: "Open to", value: "Full-time roles & open-source collaboration" },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-4 py-3"
              >
                {icon && <span className="mt-0.5 shrink-0 text-zinc-500">{icon}</span>}
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-300">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
