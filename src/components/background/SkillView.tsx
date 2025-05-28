import React from 'react';
import { FaCode } from 'react-icons/fa';
import SubTitle from '../common/SubTitle';
import { SkillData } from '../../data/SkillData';

interface SkillBadgeProps {
  name: string;
  badge: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, badge }) => (
  <img
    src={badge}
    alt={name}
    title={name}
    className='h-7 transition-transform hover:scale-110'
  />
);

interface SkillCategoryProps {
  category: string;
  items: Array<{ name: string; badge: string }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, items }) => (
  <div className='flex items-center'>
    <div className='flex w-48 items-center text-sm font-medium text-gray-700'>
      <FaCode className='mr-2 text-blue-400' />
      {category}
    </div>
    <div className='flex w-3/4 flex-wrap gap-3'>
      {items.map((item) => (
        <SkillBadge key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const SkillView: React.FC = () => {
  return (
    <div id='skill' className='space-y-4'>
      <SubTitle title='기술 스택' />
      <div className='grid gap-6 rounded-2xl bg-white p-6 px-10 shadow-sm ring-1 ring-gray-100'>
        {SkillData.map((section) => (
          <SkillCategory
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillView;
