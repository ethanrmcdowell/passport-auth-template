import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loginMessage, setLoginMessage] = useState('');

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
        const token = response.data.token;
        props.history.push(`/dashboard`);
      })
      .catch(error => {
        setLoginMessage('Error logging in!');
      });
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
    </>
  );
};

export default Login;
