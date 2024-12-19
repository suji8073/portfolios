import React from 'react';
import PageTitle from '../components/common/PageTitle';
import PortfolioList from '../components/project/PortfolioList';

const Project: React.FC = () => {
  return (
    <div id='content' className='mx-40 my-24'>
      <PageTitle text='project' />
      <PortfolioList />
    </div>
  );
};

export default Project;
