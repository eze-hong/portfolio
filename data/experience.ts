import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "kistep-sims",
    company: "넥스챌 (한국과학기술기획평가원 KISTEP)",
    role: "IRIS 유지보수 개발 (SIMS 담당)",
    period: "2025.02 – 2026.03",
    startDate: "2025-02",
    description:
      "국가 R&D 과제·성과 데이터 통합관리 플랫폼(SIMS)의 백엔드, DB, 보안, 연계 운영 전반을 담당했습니다.",
    highlights: [
      "Sparrow 웹 취약점을 유형별로 분류하고 공통 조치 가이드를 수립해 1,500여 건을 11건까지 감축",
      "조회 쿼리의 도메인 구조 분석을 통한 쿼리 튜닝으로 불필요한 조회를 제거하여 응답 속도 개선 (5초 → 1초 이내)",
      "IRIS-SIMS, SIMS-NTIS 간 연계·배치 모니터링 수행 및 상태코드 기반 장애 원인 분석과 재처리",
      "연계 기관 간 데이터 매칭 기준 정립 및 근거 기반 협의를 통한 5,000건 이상의 데이터 정합성 보정"
    ],
    tech: ["Java", "Spring", "EgovFramework", "JSP", "Oracle", "Sparrow"]
  },
  {
    id: "moe-enhancement",
    company: "넥스챌 (교육부)",
    role: "교육부 기능개선 고도화 개발",
    period: "2024.01 – 2025.01",
    startDate: "2024-01",
    description:
      "교육부 고도화 사업 프로젝트 팀(8명)에 참여하여 정보시스템 관리 서비스를 전담 개발하고 사용량을 분석했습니다.",
    highlights: [
      "정보시스템 관리 서비스를 단독 담당하여 요구사항 분석부터 DB 설계, 화면 개발, 운영까지 End-to-End 전 과정 수행",
      "To-Be 화면을 직접 설계하여 추상적인 요구사항을 시각화하고, 담당자와의 사전 미팅 조율을 통해 요구사항 매칭",
      "Google Analytics 기반 전자정부 누리집 월간 사용량 지표 분석 및 정기 보고서 작성"
    ],
    tech: ["Java", "Spring", "EgovFramework", "JSP", "Oracle", "Google Analytics"]
  },
];
