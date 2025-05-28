import React from 'react';
import { Career } from '../../types/type';
import { FaBriefcase, FaCalendar, FaUsers } from 'react-icons/fa';
import SubTitle from '../common/SubTitle';

interface InfoItemProps {
  icon: React.ReactNode;
  text: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => (
  <div className='flex items-center gap-2 text-sm'>
    <span className='text-blue-500'>{icon}</span>
    <span className='truncate'>{text}</span>
  </div>
);

interface CareerSectionProps {
  career: Career;
}

const CareerSection: React.FC<CareerSectionProps> = ({ career }) => {
  return (
    <div className='space-y-4'>
      <SubTitle title={career.company} />
      <div className='space-y-6 px-4'>
        {career.projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100'
          >
            <div className='mb-6 border-b border-gray-100 pb-6'>
              <p className='mb-3 text-lg font-bold text-gray-900'>
                {project.title}
              </p>
              <p className='mb-4 break-keep text-base text-gray-600'>
                {project.description}
              </p>

              <div className='grid grid-cols-1 gap-3 text-xs text-gray-600 sm:grid-cols-2'>
                <InfoItem
                  icon={<FaBriefcase size={16} />}
                  text={career.position}
                />
                <InfoItem
                  icon={<FaCalendar size={16} />}
                  text={career.period}
                />
                <InfoItem
                  icon={<FaUsers size={16} />}
                  text={project.client || ''}
                />
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='mb-5 text-sm font-semibold text-gray-900'>
                Tech Stack
              </h4>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-10 space-y-6'>
              <h4 className='text-sm font-semibold text-gray-900'>
                Key Achievements
              </h4>
              {project.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className='rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100'
                >
                  <h5 className='mb-2 font-medium text-gray-900'>
                    {achievementIndex + 1}. {achievement.title}
                  </h5>
                  <ul className='ml-4 list-disc space-y-1.5'>
                    <li className='text-sm text-gray-600'>
                      {achievement.description}
                    </li>
                    {achievement.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className='text-sm text-gray-600'>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSection;
