export type Locale = "en" | "ko";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      available: "Available for new opportunities",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      role: "Backend Engineer",
      bio: "Backend developer who loves identifying problems, analyzing root causes, and improving systems. I build reliable services using Java, Spring, and modern backend technologies.",
    },
    about: {
      label: "About",
      title: "A bit about me",
      p1: "Hi, I'm Hong Eze, a backend developer.",
      p2: "I love the process of identifying problems, analyzing root causes, and making things better. Working on public-sector systems in production, I've built experience creating reliable services by resolving performance bottlenecks and data integrity issues. Through personal projects, I continue to broaden my skills by independently learning and applying new technologies.",
      p3: "I've worked across a range of projects — from Java/Spring backend development and JavaScript-based web applications to automation systems using Open APIs and RAG-based AI services. I enjoy learning new technologies and make a habit of applying what I learn to real projects and documenting my progress.",
      p4: "I'm currently majoring in Computer Science at Korea National Open University, steadily growing toward becoming a developer who creates value for both users and fellow developers.",
      locationLabel: "Location",
      focusLabel: "Focus",
      currentlyLabel: "Currently",
      openToLabel: "Open to",
      focusValue: "Backend Development — Java / Spring Ecosystem",
      currentlyValue: "Learning Computer Science and building projects with Spring, AI",
      openToValue: "Backend / Full-stack roles",
    },
    skills: {
      label: "Skills",
      title: "What I work with",
      description: "Technologies and tools I reach for when building products.",
    },
    projects: {
      label: "Projects",
      title: "Things I've built",
      description: "A selection of personal and professional projects.",
      items: {
        "iris-maintenance": {
          title: "IRIS Maintenance Development",
          description:
            "Handled backend, DB, security, and integration operations for the national R&D data management platform (SIMS). Classified 1,500+ web vulnerabilities by type, established a remediation guide, and reduced findings to 11. Also improved service stability and performance through query tuning (5s → 1s) and Excel upload exception handling.",
        },
        "bid-notice-collector": {
          title: "G2B Bid Notice Auto-Collection System",
          description:
            "A system that automatically collects bid notices, pre-specifications, and order plan data from 11 client organizations via the G2B Open API daily and saves them to Excel. Independently designed and implemented deduplication, pagination, atomic file saving, and retry logic. After deployment, conducted a self code review to improve the architecture with data loss detection and file corruption prevention.",
        },
        "moe-info-system": {
          title: "Ministry of Education Information System Service",
          description:
            "Solely developed the information system management service in a Ministry of Education enhancement project, handling everything end-to-end from requirements analysis to DB design, screen development, and operations. Directly designed To-Be screens to visualize abstract requirements and completed development after pre-meetings with stakeholders.",
        },
        "paper-qa-chatbot": {
          title: "Academic Paper PDF Q&A Chatbot (RAG)",
          description:
            "A RAG system that stores Korean academic paper PDFs in a vector DB and answers natural language queries. Implemented using only a local embedding model (ko-sroberta) and the Gemini free tier. Conducted comparative experiments with different chunk sizes (300/500/700 chars) and selected the optimal configuration via RAGAS quantitative evaluation.",
        },
      },
    },
    experience: {
      label: "Experience",
      title: "Where I've worked",
      items: {
        "kistep-sims": {
          company: "Nexchel (KISTEP — Korea Institute of S&T Evaluation and Planning)",
          role: "IRIS Maintenance Developer (SIMS)",
          description:
            "Responsible for backend, DB, security, and integration operations of the national R&D project/performance data management platform (SIMS).",
          highlights: [
            "Classified Sparrow web vulnerabilities by type, established a common remediation guide, and reduced findings from 1,500+ to 11",
            "Improved response speed (5s → within 1s) through query tuning by analyzing domain structure to eliminate unnecessary queries",
            "Monitored IRIS-SIMS and SIMS-NTIS integration/batch operations and performed status-code-based failure analysis and reprocessing",
            "Established data matching standards between linked organizations and corrected 5,000+ data integrity issues through evidence-based coordination",
          ],
        },
        "moe-enhancement": {
          company: "Nexchel (Ministry of Education)",
          role: "MOE System Enhancement Developer",
          description:
            "Participated in a Ministry of Education enhancement project (8-person team), solely developing the information system management service and analyzing usage metrics.",
          highlights: [
            "Solely responsible for the information system management service — handled everything end-to-end from requirements analysis to DB design, screen development, and operations",
            "Directly designed To-Be screens to visualize abstract requirements and coordinated pre-meetings with stakeholders for requirements alignment",
            "Analyzed monthly usage metrics for the e-government website based on Google Analytics and produced regular reports",
          ],
        },
      },
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      description: "Have a project in mind or just want to say hi? My inbox is always open.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },

  ko: {
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      experience: "경력",
      contact: "연락처",
    },
    hero: {
      available: "새로운 기회를 찾고 있습니다",
      viewProjects: "프로젝트 보기",
      getInTouch: "연락하기",
      role: "백엔드 개발자",
      bio: "문제를 발견하고 원인을 분석해 더 나은 방향으로 개선하는 것을 좋아하는 백엔드 개발자입니다. Java, Spring 등 백엔드 기술로 안정적인 서비스를 만들어갑니다.",
    },
    about: {
      label: "소개",
      title: "저에 대해",
      p1: "안녕하세요. 개발자 홍이제입니다.",
      p2: "저는 문제를 발견하고, 원인을 분석해 더 나은 방향으로 개선하는 과정을 가장 좋아합니다. 운영 중인 공공기관 시스템에서는 성능 개선과 데이터 정합성 문제를 해결하며 안정적인 서비스를 만드는 경험을 쌓았고, 개인 프로젝트에서는 새로운 기술을 직접 학습하고 적용하며 개발의 범위를 넓혀가고 있습니다.",
      p3: "Java와 Spring 기반의 백엔드 개발부터 JavaScript를 활용한 웹 개발, Open API를 활용한 자동화 시스템, RAG 기반 AI 서비스까지 다양한 프로젝트를 경험했습니다. 새로운 기술을 배우는 것을 즐기며, 배운 내용을 실제 프로젝트에 적용하고 기록으로 남기는 습관을 가지고 있습니다.",
      p4: "현재는 방송통신대학교에서 컴퓨터과학을 전공하며, 사용자와 개발자 모두에게 가치 있는 서비스를 만드는 개발자가 되기 위해 꾸준히 성장하고 있습니다.",
      locationLabel: "위치",
      focusLabel: "집중 분야",
      currentlyLabel: "현재",
      openToLabel: "관심 있는 기회",
      focusValue: "백엔드 개발 — Java / Spring 생태계",
      currentlyValue: "컴퓨터과학 전공 중, Spring & AI 프로젝트 개발",
      openToValue: "백엔드 / 풀스택 포지션",
    },
    skills: {
      label: "기술",
      title: "사용하는 기술",
      description: "제품을 만들 때 사용하는 기술과 도구들입니다.",
    },
    projects: {
      label: "프로젝트",
      title: "제가 만든 것들",
      description: "개인 및 업무 프로젝트 모음입니다.",
      items: {
        "iris-maintenance": {
          title: "IRIS 유지보수 개발",
          description:
            "국가 R&D 과제·성과 데이터 통합관리 플랫폼(SIMS)의 백엔드·DB·보안·연계 운영 전반을 담당. Sparrow 점검으로 검출된 웹 취약점 1,500여 건을 유형별 분류, 공통 조치 가이드 수립 및 재점검 루프를 통해 11건까지 감축했습니다. 또한, 엑셀 업로드 예외 처리 및 조회 쿼리 튜닝(5초 → 1초)을 통해 서비스 안정성과 성능을 개선했습니다.",
        },
        "bid-notice-collector": {
          title: "나라장터 입찰공고 자동수집 시스템",
          description:
            "11개 수요기관의 입찰공고·사전규격·발주계획 데이터를 나라장터 Open API로 매일 자동 수집해 엑셀로 저장하는 시스템. 중복 제거, 페이지네이션, 원자적 파일 저장, 재시도 로직까지 단독 설계·구현했습니다. 배포 후 스스로 코드 리뷰를 진행해 데이터 유실 감지, 파일 손상 방지 등 구조를 개선하고 전 과정을 회고 문서로 남겼습니다.",
        },
        "moe-info-system": {
          title: "교육부 정보시스템 관리 서비스 신규 개발",
          description:
            "교육부 고도화 사업에서 정보시스템 관리 서비스를 전담 개발하여 요구사항 분석부터 DB 설계, 화면 개발, 운영까지 End-to-End로 수행했습니다. To-Be 화면을 직접 설계하여 추상적 요구사항을 시각화하고, 담당자와 사전 미팅을 거쳐 개발을 완료했습니다.",
        },
        "paper-qa-chatbot": {
          title: "논문 PDF Q&A 챗봇 (RAG)",
          description:
            "한국어 학술 논문 PDF를 벡터 DB에 저장하고 자연어로 검색·답변하는 RAG 시스템. 외부 유료 서비스 없이 로컬 임베딩 모델(ko-sroberta)과 Gemini 무료 티어만으로 구현했습니다. 청크 크기(300/500/700자)를 비교 실험하고 RAGAS로 정량 평가해 최적의 설정을 선택했습니다.",
        },
      },
    },
    experience: {
      label: "경력",
      title: "경력 사항",
      items: {
        "kistep-sims": {
          company: "넥스챌 (한국과학기술기획평가원 KISTEP)",
          role: "IRIS 유지보수 개발 (SIMS 담당)",
          description:
            "국가 R&D 과제·성과 데이터 통합관리 플랫폼(SIMS)의 백엔드, DB, 보안, 연계 운영 전반을 담당했습니다.",
          highlights: [
            "Sparrow 웹 취약점을 유형별로 분류하고 공통 조치 가이드를 수립해 1,500여 건을 11건까지 감축",
            "조회 쿼리의 도메인 구조 분석을 통한 쿼리 튜닝으로 불필요한 조회를 제거하여 응답 속도 개선 (5초 → 1초 이내)",
            "IRIS-SIMS, SIMS-NTIS 간 연계·배치 모니터링 수행 및 상태코드 기반 장애 원인 분석과 재처리",
            "연계 기관 간 데이터 매칭 기준 정립 및 근거 기반 협의를 통한 5,000건 이상의 데이터 정합성 보정",
          ],
        },
        "moe-enhancement": {
          company: "넥스챌 (교육부)",
          role: "교육부 기능개선 고도화 개발",
          description:
            "교육부 고도화 사업 프로젝트 팀(8명)에 참여하여 정보시스템 관리 서비스를 전담 개발하고 사용량을 분석했습니다.",
          highlights: [
            "정보시스템 관리 서비스를 단독 담당하여 요구사항 분석부터 DB 설계, 화면 개발, 운영까지 End-to-End 전 과정 수행",
            "To-Be 화면을 직접 설계하여 추상적인 요구사항을 시각화하고, 담당자와의 사전 미팅 조율을 통해 요구사항 매칭",
            "Google Analytics 기반 전자정부 누리집 월간 사용량 지표 분석 및 정기 보고서 작성",
          ],
        },
      },
    },
    contact: {
      label: "연락처",
      title: "함께 일해요",
      description: "프로젝트 제안이나 간단한 인사도 환영합니다. 언제든지 연락 주세요.",
    },
    footer: {
      rights: "모든 권리 보유.",
      builtWith: "개발 스택",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
