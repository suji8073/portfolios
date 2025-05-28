import React from 'react';

interface IProps {
  title: string;
}

const SubTitle: React.FC<IProps> = ({ title }) => {
  return (
    <div className='mb-4 flex w-full items-center'>
      <h2 className='text-lg font-bold text-gray-900'>{title}</h2>
      <span className='ml-4 h-[1px] flex-1 bg-gray-200' />
    </div>
  );
};

export default SubTitle;
