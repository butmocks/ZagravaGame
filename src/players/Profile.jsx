import React from 'react';
import PlayersInputs from './PlayersInputs.jsx';

const Profile = ({ userData, handleChange }) => {
  return (
    <div>
      <PlayersInputs userData={userData} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
