import React from 'react';
import CareerSection from './CareerSection';
import SectionTitle from '../common/SectionTitle';
import { CareerData } from '../../data/CareerData';

const CareerView: React.FC = () => {
  return (
    <section id='career' className='space-y-8'>
      <SectionTitle
        title='CAREER'
        subtitle='실무에서 맡은 역할과 책임을 중심으로<br/>직무 경험과 주요 성과를 소개합니다.'
      />
      {CareerData.map((career, index) => (
        <CareerSection key={index} career={career} />
      ))}
    </section>
  );
};

export default CareerView;
