import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='p-8 text-center'>
      <h2 className='mb-2 text-xl font-bold text-blue-900'>{title}</h2>
      <p
        className='text-gray-800'
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
};

export default SectionTitle;
