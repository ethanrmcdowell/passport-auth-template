import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = props => {
  const userInfo = useSelector(state => state);
  const dispatch = useDispatch();
  const testHandler = e => {
    e.preventDefault();
    dispatch({ type: 'testRedux' });
  };

  const storeHandler = e => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <h2>This is the secure dashboard! You're logged in {userInfo.email}!!</h2>
      <button onClick={testHandler}>Test Redux</button>
      <button onClick={storeHandler}>Log Redux Store</button>
    </>
  );
};

export default Dashboard;
