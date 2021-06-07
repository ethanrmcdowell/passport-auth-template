import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = props => {
  const [user, setUser] = useState({ email: '', password: '', jwtToken: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state);

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3000/login?email=${user.email}&password=${user.password}`
      )
      .then(response => {
        if (response) {
          setLoggedIn(true);
          dispatch({
            type: 'userLogin',
            email: user.email,
            password: user.password,
            jwtToken: response.data.token,
            loggedIn: true,
          });
        }
      })
      .then(() => {
        props.history.push('/dashboard');
      });
  };

  const debugHandler = () => {
    console.log(userInfo);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>
          Email:
          <input type='text' name='email' onChange={onChange} />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='password' name='password' onChange={onChange} />
        </label>
        <input className='submitButton' type='submit' value='Submit' />
      </form>
      <p>{loginMessage}</p>
      <p>
        Don't have an account? <a href='/signup'>Sign up!</a>
      </p>
      <button onClick={debugHandler}>Check if Redux worked!</button>
    </>
  );
};

export default Login;
