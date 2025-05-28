import React from 'react';
import {
  FaReact,
  FaFire,
  FaUsers,
  FaHandsHelping,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { scrollToSection } from '../navigation/Navigation';

const skillData = [
  {
    icon: <FaFire size={24} className='text-orange-500' />,
    title: '주도적인 개발자',
    description:
      '실사용 문제에 빠르게 대응하며 협업 역량을 키우고 주도적인 개발자로 성장하였습니다.',
  },
  {
    icon: <FaHandsHelping size={24} className='text-purple-500' />,
    title: '사용자 중심의 개발자',
    description:
      '사용자의 실제 사용 맥락을 고려해 "더 나은 경험"을 만드는 데 집중했습니다.',
  },
  {
    icon: <FaReact size={24} className='text-blue-500' />,
    title: '끊임없이 배우는 개발자',
    description:
      '새로운 언어나 기술을 두려워하지 않고, 작은 성장도 놓치지 않는 태도로 꾸준히 나아갑니다.',
    link: 'skill',
  },
];

const ProfileCard: React.FC = () => {
  return (
    <section className='space-y-8'>
      <div className='rounded-2xl bg-white p-8 shadow-sm'>
        <h2 className='mb-6 text-lg font-bold text-blue-900'>
          "사용자 경험을 고민하는 개발자"
        </h2>
        <p className='text-base leading-relaxed text-gray-600'>
          안녕하세요. 2년차 Frontend 개발자로서,
          <br />
          사용자 피드백에 큰 동기를 얻고 실제 문제를 개선해 나가는데 큰 보람을
          느끼며 개발해왔습니다.
        </p>
      </div>

      <div className='rounded-2xl bg-white p-8 shadow-sm'>
        <h3 className='mb-6 flex items-center gap-2 text-xl font-bold text-gray-800'>
          💡 핵심 역량
        </h3>
        <div className='space-y-4'>
          {skillData.map((skill) => (
            <div
              key={skill.title}
              className='rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100'
            >
              <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                  {skill.icon}
                  <h3 className='font-medium text-gray-900'>{skill.title}</h3>
                </div>
                {skill.link && (
                  <div
                    className='relative flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-50 px-3.5 py-1.5 text-xs text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm group-hover:bg-blue-50'
                    onClick={() => scrollToSection('skill')}
                  >
                    <FaExternalLinkAlt size={10} />
                    <span className='hidden sm:inline'>바로가기</span>
                  </div>
                )}
              </div>
              <p className='ml-9 text-sm text-gray-600'>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
