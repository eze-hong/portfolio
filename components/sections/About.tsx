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
            className="space-y-4 text-zinc-500 leading-relaxed dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              안녕하세요. 개발자 홍이제입니다.
            </p>
            <p>
              저는 문제를 발견하고, 원인을 분석해 더 나은 방향으로 개선하는
              과정을 가장 좋아합니다. 운영 중인 공공기관 시스템에서는 성능
              개선과 데이터 정합성 문제를 해결하며 안정적인 서비스를 만드는
              경험을 쌓았고, 개인 프로젝트에서는 새로운 기술을 직접 학습하고
              적용하며 개발의 범위를 넓혀가고 있습니다.
            </p>
            <p>
              Java와 Spring 기반의 백엔드 개발부터 JavaScript를 활용한 웹 개발,
              Open API를 활용한 자동화 시스템, RAG 기반 AI 서비스까지 다양한
              프로젝트를 경험했습니다. 새로운 기술을 배우는 것을 즐기며, 배운
              내용을 실제 프로젝트에 적용하고 기록으로 남기는 습관을 가지고
              있습니다.
            </p>
            <p>
              현재는 방송통신대학교에서 컴퓨터과학을 전공하며, 사용자와 개발자
              모두에게 가치 있는 서비스를 만드는 개발자가 되기 위해 꾸준히
              성장하고 있습니다.
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
              { label: "Focus", value: "Backend Development — Java / Spring Ecosystem" },
              { label: "Currently", value: "Learning Computer Science and building projects with Spring, AI" },
              { label: "Open to", value: "Backend / Full-stack roles" },
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
