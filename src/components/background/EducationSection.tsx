import React from 'react';
import { EducationData } from '../../data/ProfileData';
import { FaGraduationCap, FaCode, FaCalendar } from 'react-icons/fa';
import SubTitle from '../common/SubTitle';

interface EducationCardProps {
  education: {
    year: string;
    name: string;
    detail: string;
    capstone?: string[];
  };
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => (
  <div className='rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100'>
    <div className={education.capstone ? 'pb-6' : ''}>
      <div className='mb-3'>
        <h3 className='flex items-center gap-2 text-base font-bold text-gray-900'>
          <FaGraduationCap className='text-blue-500' />
          {education.name}
        </h3>
      </div>
      <div className='flex items-center gap-2 text-sm text-gray-600'>
        <FaCalendar className='text-blue-400' />
        {education.year}
      </div>
      <p className='mt-3 text-sm font-medium text-gray-700'>
        {education.detail}
      </p>
    </div>

    {education.capstone && (
      <div className='space-y-4 rounded-xl bg-gray-50 p-5'>
        <h2 className='flex items-center gap-2 text-base font-medium text-gray-900'>
          {education.capstone[0]}
        </h2>
        <ul className='space-y-2.5 text-sm text-gray-600'>
          {education.capstone.slice(1).map((item, index) => (
            <li key={index} className='flex items-start text-sm'>
              <span className='mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const EducationSection: React.FC = () => {
  return (
    <div id='education' className='space-y-4'>
      <SubTitle title='학력' />
      {EducationData.map((education, index) => (
        <EducationCard key={index} education={education} />
      ))}
    </div>
  );
};

export default EducationSection;
