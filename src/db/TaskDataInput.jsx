import React from 'react';

const TaskData = ({ idData, handleChange }) => {
  return (
    <form className="">
      <input className="text"
      type="text" name="id"
      value={idData.id}
      onChange={handleChange} />
    </form>
  );
};

export default TaskData;
