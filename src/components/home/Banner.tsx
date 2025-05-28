import React from 'react';
import skyBackground from '../../asset/sky.png';
import profile from '../../asset/profile.png';
import { mainSkillData } from '../../data/SkillData';
import { FaFileDownload } from 'react-icons/fa';

const Banner: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id='banner' className='relative h-80 overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src={skyBackground}
          alt='background'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60' />
      </div>

      <div className='relative mx-auto flex h-full max-w-6xl items-end px-4 pb-8'>
        <div className='relative'>
          <div className='h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl'>
            <img
              src={profile}
              alt='Profile'
              className='h-full w-full rounded-full object-contain transition-transform duration-300 hover:scale-110'
            />
          </div>
        </div>

        <div className='mb-2 ml-8 flex-1'>
          <h1 className='text-xl font-bold text-white'>
            채수지 | Frontend Developer
          </h1>

          <p className='mt-2 text-base text-gray-100'>
            적응력과 열정을 겸비한 주니어 개발자입니다 :)
          </p>

          <div className='mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-sky-50'>
            {mainSkillData.map((skill, index) => (
              <span
                key={index}
                className='rounded-full bg-sky-500/20 px-4 py-1 ring-1 ring-sky-200/50 backdrop-blur-sm transition-all hover:bg-sky-500/50'
              >
                {skill}
              </span>
            ))}
            <button
              onClick={handlePrint}
              className='ml-2 flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-white transition-all hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50 print:hidden'
            >
              <FaFileDownload className='text-sm' />
              {'포트폴리오 PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
