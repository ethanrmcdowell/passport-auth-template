import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Login = props => {
  const [user, setUser] = useState({ email: '', password: '', jwtToken: '' });
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
      })
      .catch(error => setLoginMessage('Error!'));
  };

  const storeHandler = e => {
    e.preventDefault();
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
      <p>
        Already logged in? Head to your <a href='/dashboard'>dashboard</a>!
      </p>
      <button onClick={storeHandler}>Log Redux Store</button>
    </>
  );
};

export default Login;
