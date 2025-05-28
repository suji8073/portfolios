import React from 'react';
import { Project } from '../../types/type';
import SubTitle from '../common/SubTitle';
import { InfoItem } from '../career/CareerSection';
import { FaCalendar, FaGithub, FaUsers } from 'react-icons/fa';
import Wedy from '../../asset/Wedy.png';
import ReKor from '../../asset/ReKor.png';
import HelloParkinson from '../../asset/HelloParkinson.png';

interface PortfolioGridProps {
  project: Project;
}

const ProjectSection: React.FC<PortfolioGridProps> = ({ project }) => {
  const getProjectImage = (title: string) => {
    switch (title) {
      case 'Wedy':
        return Wedy;
      case 'Re-Kor':
        return ReKor;
      case 'Hello Parkinson':
        return HelloParkinson;
      default:
        return HelloParkinson;
    }
  };

  return (
    <div className='space-y-4'>
      <SubTitle title={project.name} />
      <div className='space-y-8 px-4'>
        {project.detail.map((item, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md'
          >
            <div className='p-6'>
              <div className='mb-6 border-b border-gray-100 pb-6'>
                <p className='mb-3 text-lg font-bold text-gray-900'>
                  {item.title}
                </p>
                <div className='flex flex-col gap-3 sm:flex-row'>
                  <div className='flex-1'>
                    <p className='mb-4 break-keep text-base leading-relaxed text-gray-600'>
                      {item.description}
                    </p>

                    <div className='grid grid-cols-1 gap-3 text-xs text-gray-600 sm:grid-cols-2'>
                      <InfoItem
                        icon={<FaCalendar size={16} />}
                        text={project.period || ''}
                      />

                      {item.client && (
                        <a
                          href={item.client}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group relative flex items-center text-xs transition-all hover:text-blue-600'
                        >
                          <InfoItem
                            icon={<FaGithub size={16} />}
                            text={'Github'}
                          />
                        </a>
                      )}
                      <InfoItem
                        icon={<FaUsers size={16} />}
                        text={project.position}
                      />
                    </div>
                  </div>

                  {getProjectImage(project.name) && (
                    <div className='relative w-full overflow-hidden sm:w-1/3'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <img
                          src={getProjectImage(project.name)}
                          alt={item.title}
                          className='max-h-full max-w-full object-contain'
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='mb-4 text-sm font-semibold text-gray-900'>
                  Tech Stack
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {item.techStack.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className='rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-100'
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
                {item.achievements.map((achievement, achievementIndex) => (
                  <div
                    key={achievementIndex}
                    className='rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100'
                  >
                    <h5 className='mb-2 font-medium text-gray-900'>
                      {achievementIndex + 1}. {achievement.title}
                    </h5>
                    <ul className='ml-4 list-disc space-y-1.5'>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
