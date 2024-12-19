import React from 'react';
import skyBackground from '../../asset/sky.png';
import profile from '../../asset/profile.png';

const Banner: React.FC = () => {
  return (
    <section id='banner' className='pt-24'>
      <div id='profileView' className='relative'>
        <img
          src={skyBackground}
          alt='background'
          className='h-64 w-full object-cover'
        />
        <div className='absolute bottom-0 w-full bg-gray-50 bg-opacity-80 p-2'>
          <div id='text' className='font-gmk mx-80 grid gap-1'>
            <div className='text-lg font-bold text-gray-900'>
              채수지 | Frontend - Developer
            </div>
            <div className='my-1 text-xs'>
              <span className='rounded-md bg-gray-200 p-1 text-red-400'>
                React.js
              </span>
              ,{' '}
              <span className='rounded-md bg-gray-200 p-1 text-red-400'>
                Typescript
              </span>
              ,{' '}
              <span className='rounded-md bg-gray-200 p-1 text-red-400'>
                React-Native
              </span>
            </div>
            <div className='text-sm text-gray-700'>
              안녕하세요, 적응력과 열정을 겸비한 프론트엔드 개발자 채수지 입니다
              :)
            </div>
          </div>
        </div>
        <div className='absolute bottom-4 left-0 mx-40 flex items-end'>
          <div className='h-36 w-36 rounded-full bg-white p-1 drop-shadow-lg'>
            <img
              src={profile}
              alt='Profile'
              className='h-full w-full rounded-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
