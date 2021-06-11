import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = props => {
  const userInfo = useSelector(state => state);
  const dispatch = useDispatch();
  const logoutHandler = async e => {
    e.preventDefault();
    await dispatch({ type: 'userLogout' });
    props.history.push('/');
  };

  const storeHandler = e => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <h2>This is the secure dashboard! You're logged in {userInfo.email}!!</h2>
      <button onClick={logoutHandler}>Logout</button>
      <button onClick={storeHandler}>Log Redux Store</button>
    </>
  );
};

export default Dashboard;
