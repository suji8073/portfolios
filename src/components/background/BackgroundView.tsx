import React from 'react';
import BackgroundSection from './BackgroundSection';
import { ActivityData, AwardsData } from '../../data/ProfileData';
import SectionTitle from '../common/SectionTitle';
import EducationSection from './EducationSection';
import SkillView from './SkillView';

const sections = [
  { id: 'awards', title: '수상', items: AwardsData },
  { id: 'activity', title: '활동', items: ActivityData },
];

const BackgroundView: React.FC = () => {
  return (
    <section className='space-y-8 font-gmk'>
      <SectionTitle
        title='BACKGROUND'
        subtitle='지속적인 성장을 위해 쌓아온 <br /> 저의 발자취입니다'
      />

      <div className='grid gap-12'>
        <EducationSection />

        {sections.map((section) => (
          <BackgroundSection
            key={section.id}
            id={section.id}
            title={section.title}
            items={section.items}
          />
        ))}
        <SkillView />
      </div>
    </section>
  );
};

export default BackgroundView;
