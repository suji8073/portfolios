import React from 'react';
import { FaReact, FaFire, FaUsers, FaHandsHelping } from 'react-icons/fa';

const AboutMeData = [
  {
    icon: <FaReact size={30} />,
    title: '주니어 개발자',
    description:
      '새로운 언어를 학습하는 것이 두려워하지 않고, 꾸준히 성장하는 React 기반',
  },
  {
    icon: <FaFire size={30} />,
    title: '열정적인 개발자',
    description:
      '성장하는 과정에서 즐거움과 뿌듯함을 느끼며 항상 자기 계발을 추구',
  },
  {
    icon: <FaUsers size={30} />,
    title: '팀 플레이어',
    description:
      '다양한 직무와의 협업을 통해 원활한 소통 능력과 긍정적인 에너지를 전달하는',
  },
  {
    icon: <FaHandsHelping size={30} />,
    title: '사용자 중심의 개발자',
    description:
      'UX/UI에 대한 깊은 이해를 바탕으로, 직관적이고 접근성 높은 인터페이스 설계',
  },
];

const AboutMe: React.FC = () => {
  return (
    <section id='AboutMe' className='mb-20 flex justify-between gap-10'>
      {AboutMeData.map((data) => (
        <div
          key={data.title}
          className='flex h-auto w-full items-center justify-between rounded-xl border-[1px] p-4'
        >
          {data.icon}
          <div className='h-12 border-[1px] bg-gray-200' />
          <div className='font-gmk w-3/4 items-center text-xs text-gray-600'>
            <div className='mb-1 text-sm font-bold text-gray-900'>
              {data.title}
            </div>
            {data.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutMe;
