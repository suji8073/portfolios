import React from 'react';
import { projects } from '../../data/ProjectData';
import SectionTitle from '../common/SectionTitle';
import ProjectSection from './ProjectSection';

const ProjectView: React.FC = () => {
  return (
    <div className='space-y-8'>
      <SectionTitle
        title='PROJECT'
        subtitle='기획부터 구현까지<br/>기술로 문제를 해결한 프로젝트 경험입니다.'
      />

      {projects.map((project, index) => (
        <ProjectSection key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectView;
