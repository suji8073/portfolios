import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export type SectionItemProps = {
  year: string;
  name: string;
  detail: string[];
  activate?: boolean;
  stack?: {
    name: string;
    logo: string;
  }[];
}[];

interface IProps {
  id: string;
  title: string;
  items: SectionItemProps;
}

const ProfileSection: React.FC<IProps> = ({ id, title, items }) => {
  return (
    <div id={id} className='w-full'>
      <div className='mb-4 mt-10 flex w-full items-center text-blue-900'>
        <span className='h-[1px] flex-1 bg-blue-900 bg-opacity-40' />
        <span className='w-36 text-center text-lg text-blue-900'>{title}</span>
        <span className='h-[1px] flex-1 bg-blue-900 bg-opacity-40' />
      </div>

      {items.map((item, index) => (
        <div key={index} className='mb-6 flex items-start px-10'>
          <div className='flex items-center'>
            <FaMapMarkerAlt
              className={`mr-2 ${
                item.activate ? 'text-yellow-500' : 'text-gray-300'
              }`}
            />
            <div className='w-48 text-sm text-gray-600'>{item.year}</div>
          </div>

          <div className='w-3/4'>
            <div className='mb-1 text-base text-gray-900'>{item.name}</div>

            {item.detail.map((detail, detailIndex) => (
              <div key={detailIndex} className='text-sm text-gray-600'>
                {detail}
              </div>
            ))}

            {item.stack && (
              <div className='mt-2 flex items-center'>
                {item.stack.map(({ name, logo }) => (
                  <div
                    key={`${name}-${logo}`}
                    className='group relative mr-2 inline-block'
                  >
                    <i className={`devicon-${logo}-plain colored text-lg`} />
                    <span className='absolute bottom-[-30px] left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-500 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100'>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileSection;
