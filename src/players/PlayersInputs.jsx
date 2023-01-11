import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  return (
    <form>
      <input
        type="text"
        name="guyName"
        
        value={userData.guyName}
        onChange={handleChange}
      />
      <input
        value={userData.girlName}
        type="text"
        name="girlName"
        
       
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
