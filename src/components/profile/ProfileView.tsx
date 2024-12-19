import React from 'react';
import SkillView from '../SkillView';
import ProfileSection from './ProfileSection';
import {
  ActivityData,
  AwardsData,
  CareerData,
  EducationData,
} from '../../data/ProfileData';

const ProfileView: React.FC = () => {
  return (
    <section className='font-gmk mx-auto flex w-1/2 flex-col items-center py-8 text-gray-900'>
      <h2 className='text-lg text-blue-900'>PROFILE</h2>
      <h2 className='text-center text-gray-800'>
        차근차근 전문성을 갖고 있는 <br />
        주니어 개발자입니다.
      </h2>

      <ProfileSection id='career' title='경력사항' items={CareerData} />
      <ProfileSection id='education' title='학력' items={EducationData} />

      <ProfileSection id='awards' title='수상' items={AwardsData} />
      <ProfileSection id='activity' title='활동' items={ActivityData} />

      <h2 className='mt-36 text-lg text-blue-900'>SKILL</h2>
      <h2 className='text-center text-gray-800'>
        아래와 같은 기술 스택을 <br />
        사용할 수 있습니다.
      </h2>

      <SkillView />
    </section>
  );
};

export default ProfileView;
