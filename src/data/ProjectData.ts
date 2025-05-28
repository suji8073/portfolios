import { Project } from '../types/type';

export const projects: Project[] = [
  {
    name: 'Wedy',
    position: '개인 사이드 프로젝트',
    period: '2024.12 ~ 2025.07 (예정)',
    detail: [
      {
        title: '우리만의 웨딩 플래너 웹 어플리케이션',
        description:
          '신랑 신부가 결혼 준비 일정을 함께 관리하고 공유할 수 있는 프라이빗 일정 관리 웹 애플리케이션',
        client: 'https://github.com/Wedvice/Wedvice_FE',
        techStack: [
          'React',
          'Typescript',
          'Next.js',
          'React-query',
          'Tailwind CSS',
          'Figma',
        ],
        achievements: [
          {
            title: '주요 역할',
            details: [
              'Frontend 개발',
              'Axios Interceptor 설정',
              'TextInput, TextArea 공통 컴포넌트 구현',
              'react-calender 라이브러리를 사용한 달력 선택 컴포넌트 구현',
            ],
          },
          {
            title: '느낀점',
            details: [
              'Next.js를 사용하며 SSR과 CSR의 차이를 이해하고, 상황에 맞는 렌더링 방식을 고려하는 경험',
              '공통 컴포넌트를 개발하며 스타일 일관성의 중요성을 체감하고, Storybook을 활용해 디자이너와 개발자 간 협업 효율을 높이는 방법 학습',
              '새로운 기술 스택을 실제 프로젝트에 적용하며 개발 역량 강화',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Re-Kor',
    position: '한국관광공사 관광데이터 활용 공모전',
    period: '2022.05 ~ 2022.11',
    detail: [
      {
        title: '외국인을 위한 맞춤형 한국 여행 코스 추천 모바일 어플리케이션',
        description:
          '취향에 맞는 대한민국 관광지를 추천하고 여행 코스를 빠르게 생성해주는 모바일 어플리케이션 개발',
        client: 'https://github.com/suji8073/Re-Kor',
        techStack: ['React-Native', 'Javascript', 'scss', 'Figma', 'Postman'],
        achievements: [
          {
            title: '주요 역할',
            details: [
              'Frontend 개발',
              '실시간 유효성 검사를 포함한 로그인, 스플래시, 회원가입 프로세스 개발',
              '메인 화면 및 AsyncStorage를 활용한 위시리스트 화면 개발',
              'Redux를 활용하여 관광지 검색 및 코스 저장 기능 구현, Google Maps API 기반 지도 기능 개발',
              '공통 토스트 메시지 및 팝업 컴포넌트 제작',
            ],
          },
          {
            title: '느낀점',
            details: [
              'WBS 기반 일정 관리 경험을 통해 프로젝트 체계화 및 효율성의 중요성 인식',
              '데일리 스크럼을 통한 업무 공유와 조율 과정을 거치며 팀원 간 협업 역량 강화',
            ],
          },
          {
            title: '성과',
            details: [
              'Google Play Store 앱 배포 경험',
              '한국관광공사 2022 관광데이터 활용 공모전 우수상',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Hello Parkinson',
    position: '광운대학교 IDEA Lab',
    period: '2021.09 ~ 2022.03',
    detail: [
      {
        title: '파킨슨병 환자를 위한 재활 운동 모바일 어플리케이션',
        description:
          '파킨슨병 환자의 지속적인 재활을 지원하기 위해 운동 영상 제공, 진도율 그래프, 순위제 기능을 통합한 환자 전용 모바일 어플리케이션 개발',
        client: 'https://github.com/suji8073/Parkinson-Seoul',
        techStack: ['React-Native', 'Javascript', 'Figma'],
        achievements: [
          {
            title: '주요 역할',
            details: [
              'Frontend 개발',
              '로그인 및 회원가입 프로세스 개발',
              'WebView를 활용한 운동 영상 재생 화면 구현',
              'chart-kit을 활용한 환자 운동 통계 시각화(꺾은선/막대 그래프) 기능 개발',
              'FlatList를 활용한 환자 목록 화면 개발 및 가나다순, 즐겨찾기순 정렬 기능 구현',
            ],
          },
          {
            title: '느낀점',
            details: [
              '의료 분야에서 사용자 요구사항을 반영한 UI/UX 설계와 적용 경험',
              '실사용자 피드백을 기반으로 기능 개선을 반복하며 사용자 중심 개발 역량 강화',
            ],
          },
          {
            title: '성과',
            details: [
              '한국디지털콘텐츠학회 하계종합학술대회 논문경진대회 금상',
              '광운대학교 참빛설계학기 성과발표회 장려상',
              '서울대학교병원 파킨슨센터에 실사용 적용',
            ],
          },
        ],
      },
    ],
  },
];
