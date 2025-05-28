import { Career } from '../types/type';

export const CareerData: Career[] = [
  {
    company: '티맥스가이아',
    position: '프론트엔드 개발 본부 · 연구원/팀원',
    period: '2023.04 ~ 2025.01 (1년 10개월)',
    projects: [
      {
        title: 'No-Code 기반의 에디터 웹 애플리케이션 GAIA',
        description:
          'UI 컴포넌트를 배치하고 이벤트와 변수 등 로직을 연결하여 웹 애플리케이션을 개발할 수 있는 No-Code 개발 플랫폼을 개발했습니다.',
        client: '고객사: 포스코, 미래엔 / 2,000명 규모의 사내 계열사',
        techStack: [
          'React',
          'Typescript',
          'Sass(SCSS)',
          'Mobx',
          'Context API',
          'GitLab',
          'Redmine',
        ],
        achievements: [
          {
            title: '편집 작업 공간(Edit Canvas) 구조 설계 및 구현',
            description:
              '페이지 외부에 컴포넌트를 임시 배치할 수 있는 Edit Canvas 구조 설계 및 CRUD 기능 구현',
            details: [
              '작업 공간 단위의 다른 이름으로 저장 기능 및 템플릿 생성·삽입 기능 구현',
              '변경된 좌표 체계에 맞춰 기존 Drag & Drop 기반 컴포넌트 삽입·배치 및 Resize 기능 고도화',
              '새로운 작업 공간 구조 도입으로 유연한 레이아웃 구성 및 사용자 편의성 향상에 기여',
            ],
          },
          {
            title: 'UI 요소 썸네일 기능 개발',
            description:
              '오픈 소스 라이브러리(html-to-image)를 활용한 대규모 DOM 요소 캡처 기능 구현',
            details: [
              '비동기 렌더링 대응 로직 개발 및 이미지 변환(PNG Blob 형태) & API 업로드 로직 개발',
              '코드 공통화로 페이지 썸네일 기능 등 유사 기능에 확장 적용',
              "사용자 VOC 기반 '요소 선택이 직관적'이라는 긍정 피드백 확보",
            ],
          },
          {
            title: '다이얼로그 컴포넌트 동적 생성 및 이벤트 바인딩 기능 개발',
            description:
              '에디터 상에서 다이얼로그 컴포넌트 동적 생성 및 트리거 이벤트 바인딩 구현',
            details: [
              'props 기반 위치 제어(Bottom / Center / Top) 및 버튼 클릭 시 닫힘 처리 로직 개발',
            ],
          },
          {
            title:
              'React Router 기반 페이지 네비게이션 및 이벤트 바인딩 기능 개발',
            description:
              'react-router와 useLocation Hook을 활용한 경로 상태 관리 및 컴포넌트 렌더링 처리',
            details: [
              "페이지 이동을 위한 컴포넌트에 'Move Page' 이벤트 타입 등록 및 URL 정보를 메타데이터로 저장",
              '런타임(또는 미리보기) 시 이벤트 핸들러 기반으로 navigate 호출을 통한 동적 페이지 전환 기능 구현',
            ],
          },
          {
            title: '에디터 확대/축소 기능 구현',
            description:
              '마우스 스크롤 및 사용자 입력 이벤트 기반 에디터 확대/축소 기능 구현',
            details: [
              '브라우저 창 크기 변경 시 페이지가 뷰포트 중앙에 정렬되도록 동적 레이아웃 정렬 로직 개발',
              'useInsertionEffect을 활용해 스타일 반영 지연으로 발생하는 FOUC 현상 제거 및 그래픽 최적화',
            ],
          },
          {
            title: '컴포넌트 Lock 및 Hidden 기능 개발',
            description:
              'lock / hidden props를 기반으로 컴포넌트 상태 제어 로직 설계 및 적용',
            details: [
              'lock true 시 이벤트 차단 및 속성 비활성화, hidden true 시 조건부 렌더링 및 스타일 제어',
              '사용자 실수 방지 및 편집 중 레이아웃 안정성을 고려한 인터렉션 제어 기능 구현',
            ],
          },
        ],
      },
    ],
  },
  {
    company: '코코넛사일로',
    position: '플랫폼 개발 파트 · 인턴/수습/팀원',
    period: '2022.08 ~ 2023.01 (6개월)',
    projects: [
      {
        title: "화물 운송 중개 플랫폼 화주 앱 'Kokkok EXPRESS'",
        description:
          '주문 생성부터 차주 매칭 및 실시간 운송 경로 추적까지 지원하는 서비스를 개발했습니다.',
        client: '고객사: 엠브이에씨홀딩스',
        techStack: [
          'React Native',
          'Typescript',
          'Sass(SCSS)',
          'Redux',
          'Notion',
          'Figma',
          'Postman',
        ],
        achievements: [
          {
            title: '디자인 시스템 기반 공통 UI 컴포넌트 개발',
            description:
              '디자인 시스템과의 일관성을 유지하며 재사용 가능한 공통 UI 컴포넌트 10종 이상 개발',
            details: [
              '중복 코드 제거 및 스타일 가이드 통합을 통해 재사용성 및 유지보수성 향상에 기여',
            ],
          },
          {
            title: '다국어 지원 시스템 구축',
            description: 'react-i18next 기반 다국어 지원 환경 구축',
            details: [
              '라오어, 중국어, 영어 포함 3개 언어 지원 체계 구축 및 글로벌 사용자 접근성 개선에 기여',
            ],
          },
          {
            title: '실시간 위치 표시 및 지도 트래킹 기능 개발',
            description:
              'Google Maps API를 활용해 실시간 위치 마커 표시 및 경로 추적용 폴리라인 기능 구현',
            details: [
              '실시간 데이터 연동을 통한 차량 이동 상태 시각화 및 접근성 개선',
              '기능 도입 후 사용자 불편 제기 없이 안정적으로 운영',
            ],
          },
          {
            title: '주문 생성 프로세스 개발 및 데이터 관리',
            description:
              'Redux 기반 상태 중앙 관리로 주문 생성 흐름의 일관성 및 성능 최적화',
            details: [
              '주문 중 에러 대응 로직 및 팝업 UI를 포함한 사용자 피드백 처리 기능 구현',
            ],
          },
          {
            title: '회원가입 및 비밀번호 찾기 프로세스 구현',
            description:
              '입력값에 대한 정규식 기반 실시간 유효성 검사 및 인증 제한 시간 타이머 구현',
            details: [
              '휴대폰 인증 UI 상태 제어 및 서버 연동 API를 통한 가입·비밀번호 찾기 프로세스 구축',
            ],
          },
        ],
      },
    ],
  },
];
