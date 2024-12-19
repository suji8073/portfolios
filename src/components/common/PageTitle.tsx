import React from 'react';

interface IProps {
  text: string;
}

const PageTitle: React.FC<IProps> = ({ text }) => {
  if (text.length < 2) {
    console.error('Text must have at least 2 characters');
    return null;
  }

  const upperText = text.toUpperCase();
  const firstChar = upperText[0]; // 첫 글자
  const restOfText = upperText.slice(1); // 나머지 텍스트

  return (
    <section id='banner' className='pt-16'>
      <div
        className='font-rix text-6xl font-medium text-yellow-400'
        style={{ WebkitTextStroke: '3px #1e3a8a' }}
      >
        {firstChar}
        <span className='text-white'>{restOfText}</span>
        <span className='text-5xl text-blue-900'>{' . .'}</span>
      </div>
    </section>
  );
};

export default PageTitle;
