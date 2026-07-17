import type { Project } from "@/types";

export const projects: Project[] = [
  {
  id: "iris-maintenance",
  title: "IRIS 유지보수 개발",
  description:
    "국가 R&D 과제·성과 데이터 통합관리 플랫폼(SIMS)의 백엔드·DB·보안·연계 운영 전반을 담당. Sparrow 점검으로 검출된 웹 취약점 1,500여 건을 유형별 분류, 공통 조치 가이드 수립 및 재점검 루프를 통해 11건까지 감축했습니다. 또한, 시스템 간 연계·배치 운영과 데이터 정합성 보정을 수행하고, 엑셀 업로드 예외 처리 및 조회 쿼리 튜닝(5초 → 1초)을 통해 서비스 안정성과 성능을 개선했습니다.",
  tech: ["Java", "Spring", "Oracle", "Sparrow", "MyBatis"],
  githubUrl: "", // 공공 시스템 - 코드 비공개
  demoUrl: "",
  imageUrl: "https://picsum.photos/seed/iris/800/450",
  featured: true,
  },
  {
  id: "bid-notice-collector",
  title: "나라장터 입찰공고 자동수집 시스템",
  description:
    "11개 수요기관의 입찰공고·사전규격·발주계획 데이터를 나라장터 Open API로 매일 자동 수집해 엑셀로 저장하는 시스템. 중복 제거, 페이지네이션, 원자적 파일 저장, 재시도 로직까지 단독 설계·구현했습니다. 배포 후 스스로 코드 리뷰를 진행해 데이터 유실 감지, 파일 손상 방지 등 구조를 개선하고 전 과정을 회고 문서로 남겼습니다.",
  tech: ["Python", "Open API", "pandas", "openpyxl"],
  githubUrl: "https://github.com/eze-hong/bid-notice",
  demoUrl: "https://github.com/eze-hong/bid-notice/blob/main/REFACTORING.md", // 리팩토링 회고 문서로 대체 연결
  imageUrl: "https://picsum.photos/seed/bid-notice/800/450",
  featured: true,
  },
  {
  id: "moe-info-system",
  title: "교육부 정보시스템 관리 서비스 신규 개발",
  description:
    "교육부 고도화 사업에서 정보시스템 관리 서비스를 전담 개발하여 요구사항 분석부터 DB 설계, 화면 개발, 운영까지 End-to-End로 수행했습니다. To-Be 화면을 직접 설계하여 추상적 요구사항을 시각화하고, 담당자와 사전 미팅을 거쳐 개발을 완료함으로써 프로젝트 요건을 정확히 충족했습니다.",
  tech: ["Java", "Spring", "EgovFramework", "Oracle", "JSP"],
  githubUrl: "", // 공공 시스템 - 코드 비공개
  demoUrl: "",
  imageUrl: "https://picsum.photos/seed/moe-info/800/450",
  featured: true,
  },
  {
  id: "paper-qa-chatbot",
  title: "논문 PDF Q&A 챗봇 (RAG)",
  description:
    "한국어 학술 논문 PDF를 벡터 DB에 저장하고 자연어로 검색·답변하는 RAG 시스템. 외부 유료 서비스 없이 로컬 임베딩 모델(ko-sroberta)과 Gemini 무료 티어만으로 구현했습니다. 청크 크기(300/500/700자)를 비교 실험하고 RAGAS로 정량 평가해 최적의 설정을 선택했습니다.",
  tech: ["Python", "RAG", "ChromaDB", "Gemini", "Streamlit"],
  githubUrl: "https://github.com/eze-hong/paper-chatbot",
  demoUrl: "",
  imageUrl: "https://picsum.photos/seed/paper-chatbot/800/450",
  featured: true,
  },
];
