import React, { useState } from 'react';
import PortfolioGrid from './PortfolioGrid';

type PortfolioCategory =
  | 'All'
  | 'App'
  | 'Web'
  | 'React'
  | 'React-Native'
  | 'Android-Studio';

const categories: PortfolioCategory[] = [
  'All',
  'App',
  'Web',
  'React',
  'React-Native',
  'Android-Studio',
];

const PortfolioList: React.FC = () => {
  const [filter, setFilter] = useState<PortfolioCategory>('All');

  return (
    <section id='portfolioList'>
      <div id='filter' className='flex pb-6 pt-12'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`font-gmk mr-4 rounded-2xl px-4 py-2 text-sm font-medium ${
              filter === category
                ? 'bg-yellow-400 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <PortfolioGrid filter={filter} />
    </section>
  );
};

export default PortfolioList;
