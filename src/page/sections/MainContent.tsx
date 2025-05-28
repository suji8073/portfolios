import React from 'react';

import Background from './Background';
import Career from './Career';
import Profile from './Profile';
import Project from './Project';

const MainContent: React.FC = () => {
  return (
    <main className='col-span-3 grid gap-8 space-y-8'>
      <Profile />
      <Career />
      <Background />
      <Project />
    </main>
  );
};

export default MainContent;
