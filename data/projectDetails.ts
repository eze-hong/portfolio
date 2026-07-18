export type SectionType =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "code"; heading?: string; lang: string; code: string }
  | { type: "table"; heading?: string; headers: string[]; rows: string[][] }
  | { type: "highlights"; heading: string; items: { title: string; body: string }[] }
  | { type: "pipeline"; heading: string; steps: string[] }
  | { type: "list"; heading: string; items: string[] };

export interface ProjectDetailLocale {
  title: string;
  tagline: string;
  sections: SectionType[];
}

export interface ProjectDetail {
  id: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  ko: ProjectDetailLocale;
  en: ProjectDetailLocale;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "bid-notice-collector": {
    id: "bid-notice-collector",
    tech: ["Python", "Open API", "pandas", "openpyxl"],
    githubUrl: "https://github.com/eze-hong/bid-notice",
    ko: {
      title: "나라장터 입찰공고 자동수집 시스템",
      tagline: "나라장터 공공데이터 Open API를 활용해 매일 오전 8시 자동으로 11개 수요기관의 입찰공고·사전규격·발주계획 데이터를 수집하고 엑셀 파일로 저장하는 업무 자동화 도구",
      sections: [
        {
          type: "prose",
          heading: "배경",
          paragraphs: [
            "기존에는 담당자가 나라장터 웹사이트에 직접 접속해 수동으로 공고를 조회하고 정리했습니다. 수요기관이 11개, 공고 유형이 3종이라 매일 반복 조회 작업이 필요했고, 누락이나 중복 발생 가능성도 있었습니다.",
            "사용자 요청을 계기로 자동화 도구를 직접 기획·개발했고, 이후 리팩토링을 통해 코드 품질과 안정성을 개선했습니다.",
          ],
        },
        {
          type: "pipeline",
          heading: "시스템 흐름",
          steps: [
            "Windows Scheduler → 매일 오전 8시 자동 실행",
            "요일 판단 → 월요일: 금~일 조회 / 화~금: 전일 조회",
            "나라장터 Open API 호출 (입찰공고 / 사전규격공개 / 발주계획)",
            "XML 파싱 + 페이지네이션 (페이지당 50건 자동 순회)",
            "필터링 → 수요기관 11개 · 업무구분 기준",
            "중복 제거 → 동일 공고번호에서 최신 차수만 유지",
            "pandas DataFrame 변환 후 atomic write로 엑셀 저장",
            "네트워크 드라이브에 3개 파일 생성 완료",
          ],
        },
        {
          type: "table",
          heading: "출력 파일",
          headers: ["파일", "수집 항목"],
          rows: [
            ["01. 입찰공고목록", "공고명, 수요기관, 게시일시, 마감일시, 계약방법, 낙찰방법, 예산금액"],
            ["02. 사전규격공개", "사업명, 수요기관, 담당자, 진행일자, 예산금액"],
            ["03. 발주계획", "사업명, 수요기관, 담당자, 발주시기, 예산금액"],
          ],
        },
        {
          type: "highlights",
          heading: "주요 구현 포인트",
          items: [
            {
              title: "최신 차수 유지 로직",
              body: "입찰공고는 변경·취소 시 동일 공고번호로 차수가 올라갑니다. 동일 bidNtceNo에 대해 가장 높은 bidNtceOrd(차수)만 남겨 항상 최신 상태를 반영합니다.",
            },
            {
              title: "Atomic Write로 파일 손상 방지",
              body: "저장 중 프로세스 중단 시 불완전한 파일이 남는 문제를 방지합니다. 임시 파일에 완전히 쓴 뒤 os.replace()로 원자적 교체하며, 실패 시 임시 파일을 자동 삭제합니다.",
            },
            {
              title: "페이지네이션 최적화",
              body: "기존 구현은 총 페이지 수 파악을 위해 1페이지를 먼저 호출한 뒤 루프에서 1페이지부터 다시 순회해 API를 2회 호출했습니다. 첫 응답을 즉시 재사용하고 루프를 2페이지부터 시작해 불필요한 호출을 제거했습니다.",
            },
            {
              title: "데이터 유실 방지",
              body: "중간 페이지 수집 실패 시 기존 코드는 조용히 넘어가 불완전한 데이터가 저장됐습니다. 변경 후에는 RuntimeError로 상위에 전파해 데이터 유실을 즉시 감지합니다.",
            },
          ],
        },
        {
          type: "code",
          heading: "Atomic Write 구현",
          lang: "python",
          code: `@contextmanager
def atomic_write(target_path: Path):
    tmp_fd, tmp_path = tempfile.mkstemp(suffix=".xlsx", dir=target_path.parent)
    os.close(tmp_fd)
    try:
        yield tmp_path
        os.replace(tmp_path, target_path)  # 성공 시 원자적 교체
    except Exception:
        Path(tmp_path).unlink(missing_ok=True)  # 실패 시 임시 파일 삭제
        raise`,
        },
        {
          type: "table",
          heading: "리팩토링 전/후",
          headers: ["항목", "Before", "After"],
          rows: [
            ["API 키 관리", "소스코드 하드코딩", ".env 분리"],
            ["설정값 관리", "전역 변수 분산", "Config 데이터클래스 통합"],
            ["1페이지 API 호출", "2회 중복", "1회로 통합"],
            ["중간 페이지 오류", "조용히 무시", "RuntimeError 전파"],
            ["파일 저장 방식", "직접 덮어쓰기", "atomic write"],
            ["열 파싱", "chr(ord(col) + 1) — 두 자리 열 오작동", "openpyxl 공식 함수"],
            ["빈 데이터 처리", "빈 시트 그대로 저장", "\"조회된 데이터 없음\" 안내"],
            ["경로 처리", "os.path.join", "pathlib.Path"],
          ],
        },
        {
          type: "table",
          heading: "기술 스택",
          headers: ["분류", "라이브러리", "용도"],
          rows: [
            ["HTTP", "requests + urllib3 Retry", "API 호출, 네트워크 오류 재시도 (최대 3회)"],
            ["XML 파싱", "xml.etree.ElementTree", "나라장터 API 응답 파싱"],
            ["데이터 처리", "pandas", "DataFrame 변환 및 중복 제거"],
            ["엑셀 생성", "openpyxl", "스타일링 포함 xlsx 생성"],
            ["환경 변수", "python-dotenv", "API 키, 경로 외부화"],
            ["스케줄링", "Windows Task Scheduler", "매일 오전 8시 자동 실행"],
          ],
        },
      ],
    },
    en: {
      title: "G2B Bid Notice Auto-Collection System",
      tagline: "A work automation tool that automatically collects bid notice, pre-specification, and order plan data from 11 client organizations via the G2B Open API every day at 8 AM and saves them as Excel files",
      sections: [
        {
          type: "prose",
          heading: "Background",
          paragraphs: [
            "Previously, staff had to manually log in to the G2B website daily to look up and organize notices. With 11 client organizations and 3 types of notices, this required daily repetitive lookups with the risk of omissions and duplicates.",
            "At a user's request, I independently planned and developed this automation tool, then improved the code quality and stability through refactoring.",
          ],
        },
        {
          type: "pipeline",
          heading: "System Flow",
          steps: [
            "Windows Scheduler → automatic execution every day at 8 AM",
            "Day detection → Monday: Fri–Sun range / Tue–Fri: previous day",
            "G2B Open API calls (bid notices / pre-specs / order plans)",
            "XML parsing + pagination (auto-traversal, 50 items per page)",
            "Filtering → 11 client organizations, by work category",
            "Deduplication → keep only the latest revision per notice number",
            "pandas DataFrame conversion + atomic write to Excel",
            "3 output files written to network drive",
          ],
        },
        {
          type: "table",
          heading: "Output Files",
          headers: ["File", "Collected Fields"],
          rows: [
            ["01. Bid Notice List", "Notice name, client org, posted date, deadline, contract method, award method, budget"],
            ["02. Pre-Specification", "Project name, client org, contact, date, budget"],
            ["03. Order Plan", "Project name, client org, contact, planned order date, budget"],
          ],
        },
        {
          type: "highlights",
          heading: "Key Implementation Points",
          items: [
            {
              title: "Latest Revision Logic",
              body: "Bid notices get a new revision number when amended or canceled. For the same bidNtceNo, only the highest bidNtceOrd (revision) is kept to always reflect the latest state.",
            },
            {
              title: "Atomic Write for File Integrity",
              body: "Prevents incomplete files from being left behind if the process is interrupted during a write. The file is written to a temp location first, then atomically replaced with os.replace(). On failure, the temp file is automatically cleaned up.",
            },
            {
              title: "Pagination Optimization",
              body: "The original code called page 1 twice — once to get the total page count and again inside the loop. The fix reuses the first response immediately and starts the loop from page 2, eliminating the duplicate API call.",
            },
            {
              title: "Data Loss Prevention",
              body: "Previously, if a mid-pagination fetch failed, the code silently continued and saved incomplete data. Now it raises a RuntimeError that propagates upward, making data loss immediately detectable.",
            },
          ],
        },
        {
          type: "code",
          heading: "Atomic Write Implementation",
          lang: "python",
          code: `@contextmanager
def atomic_write(target_path: Path):
    tmp_fd, tmp_path = tempfile.mkstemp(suffix=".xlsx", dir=target_path.parent)
    os.close(tmp_fd)
    try:
        yield tmp_path
        os.replace(tmp_path, target_path)  # atomic replace on success
    except Exception:
        Path(tmp_path).unlink(missing_ok=True)  # clean up on failure
        raise`,
        },
        {
          type: "table",
          heading: "Refactoring: Before vs After",
          headers: ["Item", "Before", "After"],
          rows: [
            ["API key", "Hardcoded in source", "Separated to .env"],
            ["Config", "Scattered global vars", "Config dataclass"],
            ["Page 1 API call", "Called twice", "Unified to 1 call"],
            ["Mid-page errors", "Silently ignored", "RuntimeError propagation"],
            ["File saving", "Direct overwrite", "Atomic write"],
            ["Column parsing", "chr(ord(col)+1) — broken for 2-char cols", "openpyxl official function"],
            ["Empty data", "Blank sheet saved", "\"No data found\" message"],
            ["Path handling", "os.path.join", "pathlib.Path"],
          ],
        },
        {
          type: "table",
          heading: "Tech Stack",
          headers: ["Category", "Library", "Purpose"],
          rows: [
            ["HTTP", "requests + urllib3 Retry", "API calls, retry on network errors (max 3x)"],
            ["XML parsing", "xml.etree.ElementTree", "Parse G2B API responses"],
            ["Data processing", "pandas", "DataFrame conversion and deduplication"],
            ["Excel output", "openpyxl", "Styled xlsx generation"],
            ["Config", "python-dotenv", "Externalize API key and paths"],
            ["Scheduling", "Windows Task Scheduler", "Automatic 8 AM daily execution"],
          ],
        },
      ],
    },
  },

  "paper-qa-chatbot": {
    id: "paper-qa-chatbot",
    tech: ["Python", "RAG", "ChromaDB", "Gemini", "Streamlit"],
    githubUrl: "https://github.com/eze-hong/paper-chatbot",
    ko: {
      title: "논문 PDF Q&A 챗봇 (RAG)",
      tagline: "한국어 학술 논문 PDF를 벡터 DB에 저장하고 자연어 질문으로 내용을 검색·답변하는 RAG 시스템. 외부 유료 서비스 없이 로컬 임베딩 모델과 Gemini 무료 티어만으로 구현.",
      sections: [
        {
          type: "prose",
          heading: "프로젝트 소개",
          paragraphs: [
            "공공 AI 사업 제안서를 검토하다 RAG 구조가 반복적으로 등장하는 것을 보고, 개념만 아는 상태에서 직접 구현해봐야 실제로 이해할 수 있겠다고 판단해 시작한 프로젝트입니다.",
            "RAG(Retrieval-Augmented Generation)의 전체 파이프라인을 외부 유료 서비스 없이 직접 구현했습니다. OpenAI API 미사용, 임베딩은 로컬 모델, LLM은 Gemini 무료 티어를 활용했습니다.",
          ],
        },
        {
          type: "pipeline",
          heading: "Ingest 파이프라인",
          steps: [
            "data/*.pdf → PyMuPDF로 페이지별 텍스트 + 페이지번호 추출",
            "RecursiveCharacterTextSplitter (500자, overlap 50자)로 청킹",
            "ko-sroberta (768차원, 로컬 실행)로 임베딩 생성",
            "벡터 + metadata {source, page} → ChromaDB.upsert() 저장",
            "chroma_db/ 로컬 영구 저장 완료",
          ],
        },
        {
          type: "pipeline",
          heading: "Query 파이프라인",
          steps: [
            "사용자 질문 입력",
            "ko-sroberta로 질문 벡터 생성 (ingest와 동일 모델)",
            "ChromaDB.query(top-3)로 관련 청크 + 출처 검색",
            "PromptTemplate으로 컨텍스트 + 질문 조합",
            "Gemini 2.5 Flash로 답변 생성 + 출처(파일명·페이지) 표시",
          ],
        },
        {
          type: "highlights",
          heading: "주요 설계 결정",
          items: [
            {
              title: "공통 모듈 분리 (embeddings.py / db.py)",
              body: "ingest.py와 query.py가 임베딩 모델과 ChromaDB 연결을 각자 들고 있으면, 모델명 변경 시 두 파일을 동시에 수정해야 하고 불일치 버그가 생깁니다. 공통 모듈로 분리해 단일 책임 원칙을 유지했습니다.",
            },
            {
              title: "upsert() 사용",
              body: "collection.add() 대신 collection.upsert()를 사용해 동일 PDF를 재실행해도 중복 저장이 발생하지 않도록 했습니다.",
            },
            {
              title: "ChromaDB embedding_function 제거",
              body: "초기 설계에서는 embedding_function을 ChromaDB에 넘겼으나, ChromaDB가 LangChain 임베딩 객체의 .name() 메서드를 요구해 충돌 발생. 임베딩은 ingest/query에서 직접 계산해 전달하는 방식으로 전환했습니다.",
            },
          ],
        },
        {
          type: "table",
          heading: "청킹 전략 비교 (300 / 500 / 700자)",
          headers: ["질문", "300자", "500자", "700자", "비고"],
          rows: [
            ["Q1 — 키워드 vs 임베딩 검색 차이점", "4", "5★", "2", "700자는 핵심 문장이 주변 내용에 묻힘"],
            ["Q2 — 할루시네이션 프롬프트 제약", "5★", "4", "4", "300자가 수치(12.20%→4.36%)까지 포착"],
            ["Q3 — 공공서비스 RAG 장단점", "1", "2", "1", "논문에 해당 내용 없음 (정상 동작)"],
            ["Q4 — 임베딩 모델 역할", "1", "2", "4★", "긴 설명은 큰 청크에서만 포착됨"],
            ["Q5 — 비용 비교 (할루시네이션 체크)", "5", "5", "5", "전 크기 \"없다\"고 정확히 답변"],
          ],
        },
        {
          type: "table",
          heading: "RAGAS 정량 평가",
          headers: ["청크 크기", "Faithfulness", "Answer Relevancy", "유효 행 수"],
          rows: [
            ["300자", "1.00", "0.891", "2 / 5"],
            ["500자", "0.933", "0.919★", "3 / 5"],
            ["700자", "1.00", "0.938", "2 / 5"],
          ],
        },
        {
          type: "prose",
          heading: "평가 한계 분석",
          paragraphs: [
            "Faithfulness: 평가 LLM이 생성 LLM과 동일(Gemini)해 자기 채점 구조 → 판별력 없음.",
            "Answer Relevancy: RAGAS의 역질문 생성이 한국어에서 불안정 → 15행 중 7행이 0.0으로 측정됨. 답변 품질 문제가 아닌 한국어 처리 한계. 유효 수치 기준으로 500자 우세 경향이 주관 평가 결과와 일치.",
          ],
        },
        {
          type: "table",
          heading: "기술 스택",
          headers: ["분류", "라이브러리", "비고"],
          rows: [
            ["PDF 파싱", "PyMuPDF", "페이지 번호를 metadata로 추출"],
            ["청킹", "LangChain RecursiveCharacterTextSplitter", "문장 경계 우선 분할"],
            ["임베딩", "jhgan/ko-sroberta-multitask", "한국어 특화, 로컬 실행 (무료)"],
            ["벡터 DB", "ChromaDB", "로컬 영구 저장, 별도 서버 불필요"],
            ["LLM", "Gemini 2.5 Flash", "무료 티어, 카드 등록 불필요"],
            ["UI", "Streamlit", "채팅 인터페이스"],
            ["평가", "RAGAS", "검색 품질 정량 평가"],
          ],
        },
        {
          type: "list",
          heading: "배운 점",
          items: [
            "임베딩 모델과 벡터 DB를 공통 모듈로 분리하면 변경 시 단일 지점만 수정하면 된다 (embeddings.py / db.py 설계)",
            "청크 크기는 \"클수록 좋다 / 작을수록 좋다\"가 아니라 질문 유형에 따라 최적값이 다름",
            "RAGAS 같은 자동 평가 프레임워크도 언어·도메인 적합성 검토가 필요함",
            "\"깔끔하게 성공\"보다 한계를 발견하고 원인을 분석하는 과정이 기술 이해도를 더 잘 보여줌",
          ],
        },
      ],
    },
    en: {
      title: "Academic Paper PDF Q&A Chatbot (RAG)",
      tagline: "A RAG system that stores Korean academic paper PDFs in a vector DB and answers natural language questions — built entirely on free, local tools without any paid external services.",
      sections: [
        {
          type: "prose",
          heading: "Background",
          paragraphs: [
            "While reviewing public AI project proposals, I kept seeing RAG architectures come up. I realized that just knowing the concept wasn't enough — I needed to implement it myself to truly understand it.",
            "I built the full RAG (Retrieval-Augmented Generation) pipeline without any paid external services: local embedding model, Gemini free tier for the LLM, and ChromaDB running locally.",
          ],
        },
        {
          type: "pipeline",
          heading: "Ingest Pipeline",
          steps: [
            "data/*.pdf → extract per-page text + page numbers with PyMuPDF",
            "Chunk with RecursiveCharacterTextSplitter (500 chars, 50-char overlap)",
            "Generate embeddings with ko-sroberta (768-dim, local execution)",
            "Store vectors + metadata {source, page} via ChromaDB.upsert()",
            "Persisted locally in chroma_db/",
          ],
        },
        {
          type: "pipeline",
          heading: "Query Pipeline",
          steps: [
            "User inputs a natural language question",
            "Vectorize question with ko-sroberta (same model as ingest)",
            "ChromaDB.query(top-3) retrieves relevant chunks + sources",
            "Assemble context + question via PromptTemplate",
            "Gemini 2.5 Flash generates answer with source citations (filename + page)",
          ],
        },
        {
          type: "highlights",
          heading: "Key Design Decisions",
          items: [
            {
              title: "Shared Modules (embeddings.py / db.py)",
              body: "If ingest.py and query.py each managed their own embedding model and ChromaDB connection, a model name change would require editing both files — and mismatches would cause silent bugs. Extracting shared modules enforces a single point of change.",
            },
            {
              title: "Using upsert() Instead of add()",
              body: "Using collection.upsert() instead of collection.add() ensures that re-running ingest on the same PDF doesn't create duplicate entries in the vector store.",
            },
            {
              title: "Removing ChromaDB embedding_function",
              body: "The initial design passed an embedding_function to ChromaDB, but ChromaDB expected a .name() method on the LangChain embedding object — causing a conflict. Switched to computing embeddings in ingest/query and passing vectors directly.",
            },
          ],
        },
        {
          type: "table",
          heading: "Chunking Strategy Comparison (300 / 500 / 700 chars)",
          headers: ["Question", "300", "500", "700", "Notes"],
          rows: [
            ["Q1 — Keyword vs embedding search difference", "4", "5★", "2", "700: key sentence buried in surrounding context"],
            ["Q2 — Hallucination prompt constraints", "5★", "4", "4", "300: captured exact figures (12.20%→4.36%)"],
            ["Q3 — RAG pros/cons in public services", "1", "2", "1", "Not in paper — correct \"no info\" response"],
            ["Q4 — Role of embedding model", "1", "2", "4★", "Long explanations only captured in larger chunks"],
            ["Q5 — Cost comparison (hallucination check)", "5", "5", "5", "All sizes correctly answered \"no data\""],
          ],
        },
        {
          type: "table",
          heading: "RAGAS Quantitative Evaluation",
          headers: ["Chunk Size", "Faithfulness", "Answer Relevancy", "Valid Rows"],
          rows: [
            ["300 chars", "1.00", "0.891", "2 / 5"],
            ["500 chars", "0.933", "0.919★", "3 / 5"],
            ["700 chars", "1.00", "0.938", "2 / 5"],
          ],
        },
        {
          type: "prose",
          heading: "Evaluation Limitations",
          paragraphs: [
            "Faithfulness: The evaluator LLM is the same as the generator LLM (Gemini) — creating a self-grading structure with no real discriminative power.",
            "Answer Relevancy: RAGAS's reverse-question generation is unstable in Korean — 7 of 15 rows scored 0.0, reflecting a Korean NLP limitation rather than answer quality issues. Among valid scores, 500-char chunks show a consistent advantage, matching the subjective evaluation.",
          ],
        },
        {
          type: "table",
          heading: "Tech Stack",
          headers: ["Category", "Library", "Notes"],
          rows: [
            ["PDF parsing", "PyMuPDF", "Extracts page numbers as metadata"],
            ["Chunking", "LangChain RecursiveCharacterTextSplitter", "Sentence-boundary-aware splitting"],
            ["Embedding", "jhgan/ko-sroberta-multitask", "Korean-optimized, runs locally (free)"],
            ["Vector DB", "ChromaDB", "Local persistent storage, no server needed"],
            ["LLM", "Gemini 2.5 Flash", "Free tier, no credit card required"],
            ["UI", "Streamlit", "Chat interface"],
            ["Evaluation", "RAGAS", "Quantitative retrieval quality assessment"],
          ],
        },
        {
          type: "list",
          heading: "Lessons Learned",
          items: [
            "Shared modules (embeddings.py / db.py) mean a model change requires editing exactly one file",
            "Optimal chunk size depends on question type — not simply \"bigger is better\" or \"smaller is better\"",
            "Automated evaluation frameworks like RAGAS still need language and domain suitability review",
            "Finding limits and analyzing root causes demonstrates deeper understanding than a clean success",
          ],
        },
      ],
    },
  },
};
