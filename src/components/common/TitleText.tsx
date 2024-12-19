import React from 'react';

interface IProps {
  text: string;
  emojiCode?: string;
  fontFamily?: 'rix' | 'gmk';
}

const TitleText: React.FC<IProps> = ({
  text,
  emojiCode,
  fontFamily = 'gmk',
}) => {
  const fontClass = `font-${fontFamily}`;
  return (
    <div className={`${fontClass} flex text-xl text-gray-900`}>
      {emojiCode && <span className='mr-2'>{emojiCode}</span>}
      <h2 className='underline decoration-blue-900 underline-offset-2'>
        {text}
      </h2>
    </div>
  );
};

export default TitleText;
