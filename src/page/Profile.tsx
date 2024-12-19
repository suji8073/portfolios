import React from 'react';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileView from '../components/profile/ProfileView';

const Profile: React.FC = () => {
  return (
    <div id='content' className='mx-40 my-24'>
      <ProfileCard />
      <ProfileView />
    </div>
  );
};

export default Profile;
