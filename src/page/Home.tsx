import React from 'react';
import Banner from '../components/home/Banner';
import Navigation from '../components/navigation/Navigation';
import MainContent from './sections/MainContent';

const Home: React.FC = () => {
  return (
    <div id='home' className='w-full font-gmk'>
      <Banner />
      <div className='mx-auto max-w-6xl px-4 py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <aside className='relative md:h-full'>
            <Navigation />
          </aside>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
