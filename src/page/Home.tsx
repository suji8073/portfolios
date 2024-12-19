import React from 'react';
import AboutMe from '../components/home/AboutMe';
import Banner from '../components/home/Banner';

const Home: React.FC = () => {
  return (
    <div id='content'>
      <Banner />
      <div className='mx-40 my-20'>
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
