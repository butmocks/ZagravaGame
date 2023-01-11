import React from 'react';

const TaskTitle = ({ userData, count }) => {
  
  return <div>{`${userData}, you added ${count} items`}</div>;
};

export default TaskTitle;
