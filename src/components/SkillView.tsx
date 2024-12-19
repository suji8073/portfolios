import React from 'react';
import { FaHotjar } from 'react-icons/fa';
import { SkillData } from '../data/SkillData';

const SkillView: React.FC = () => {
  return (
    <section id='skill-view' className='grid gap-6 px-10'>
      <div className='mb-4 mt-10 flex w-full items-center text-blue-900'>
        <span className='h-[1px] flex-1 bg-blue-900 bg-opacity-40' />
        <span className='w-36 text-center text-lg text-blue-900'>기술스택</span>
        <span className='h-[1px] flex-1 bg-blue-900 bg-opacity-40' />
      </div>

      {SkillData.map((section) => (
        <div key={section.category} className='flex items-center'>
          <div className='flex w-48 items-center text-sm text-gray-600'>
            <FaHotjar className='mr-2 text-orange-100' />
            {section.category}
          </div>
          <div className='flex w-3/4 flex-wrap gap-2'>
            {section.items.map((item) => (
              <img
                key={item.name}
                src={item.badge}
                alt={item.name}
                className='h-7'
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillView;
