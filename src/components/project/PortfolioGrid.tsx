import React from 'react';
import HelloParkinson from '../../asset/HelloParkinson.png';
import YouthHood from '../../asset/YouthHood.png';
import KKE from '../../asset/KKE.png';
import JOYnT from '../../asset/JOYnT.png';
import SunMoon from '../../asset/SunMoon.png';
import ReKor from '../../asset/ReKor.png';

interface PortfolioGridProps {
  filter: string;
}

export const portfolioItems = [
  {
    category: 'App',
    language: 'React-Native',
    title: '헬로우 파킨슨',
    image: HelloParkinson,
  },
  {
    category: 'App',
    language: 'Android-Studio',
    title: '오팔청춘',
    image: YouthHood,
  },
  {
    category: 'App',
    language: 'React-Native',
    title: 'KKE',
    image: KKE,
  },
  {
    category: 'App',
    language: 'Android-Studio',
    title: '조인트리그',
    image: JOYnT,
  },
  {
    category: 'App',
    language: 'Android-Studio',
    title: '햇님달님',
    image: SunMoon,
  },
  {
    category: 'App',
    language: 'React-Native',
    title: 'Re-Kor',
    image: ReKor,
  },
];

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ filter }) => {
  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === filter || item.language === filter
        );

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {filteredItems.map((item) => (
        <div
          key={item.title}
          className='group relative overflow-hidden rounded-lg shadow-md'
        >
          <img
            src={item.image}
            alt={item.title}
            className='h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105'
          />

          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <p className='text-lg font-semibold text-white'>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
