import React from 'react';
import profile from '../../asset/profile.png';
import { FaGithubSquare, FaBlogger } from 'react-icons/fa';

const ProfileCard: React.FC = () => {
  return (
    <section className='font-gmk mx-auto flex w-4/5 items-center justify-center gap-20 py-16'>
      <div className='mb-10 flex flex-col items-center'>
        <div id='left' className='relative'>
          <div className='relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-yellow-400'>
            <img
              src={profile}
              alt='Profile'
              className='h-auto w-40 rounded-xl object-contain'
            />
          </div>
          <div className='absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-900' />
        </div>

        <h2 className='mt-6 w-52 border-t-[1px] py-4 text-center text-2xl font-bold text-gray-600'>
          채수지
        </h2>
        <div className='flex gap-1'>
          <a href='https://github.com/suji8073/' className='text-gray-600'>
            <FaGithubSquare size={30} />
          </a>
          <a href='https://suji-sw.tistory.com/' className='text-gray-600'>
            <FaBlogger size={30} />
          </a>
        </div>
      </div>

      <div className='mb-8 w-1/2 rounded-lg bg-white p-6 shadow-md'>
        <h2 className='text-2xl font-bold text-gray-800'>
          안녕하세요. <span className='text-yellow-500'>채수지</span> 입니다 :)
        </h2>
        <p className='mt-4 text-gray-700'>내용 1</p>
        <p className='mt-4 text-gray-700'>내용 2</p>
      </div>
    </section>
  );
};

export default ProfileCard;
