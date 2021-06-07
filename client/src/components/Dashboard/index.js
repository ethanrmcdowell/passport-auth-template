import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = props => {
  const userInfo = useSelector(state => state);
  console.log(userInfo);
  return (
    <>
      <h2>This is the secure dashboard! You're logged in {userInfo.email}!!</h2>
    </>
  );
};

export default Dashboard;
