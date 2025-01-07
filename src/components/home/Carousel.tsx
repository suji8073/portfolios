import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleText from '../common/TitleText';
import { portfolioItems } from '../project/PortfolioGrid';

/**
 * Project Preview
 */
const Carousel: React.FC = () => {
  const nav = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === portfolioItems.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  return (
    <>
      <TitleText text={'PROJECT PREVIEW'} emojiCode={'\u{1F5A5}\u{FE0F}'} />
      <div className='flex w-full overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`, // 카드 이동
            width: `${(portfolioItems.length / 3) * 100}%`, // 컨테이너 너비 설정
          }}
        >
          {portfolioItems.map((project) => (
            <div
              key={`${project.title}-${project.category}`}
              className='w-1/3 flex-shrink-0 cursor-pointer p-4'
              onClick={() => nav('/project')}
              style={{ flexBasis: '33.3333%' }}
            >
              <img
                src={project.image}
                alt={`Card ${project.title}`}
                className='h-56 w-full rounded-lg object-cover shadow-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Carousel;
