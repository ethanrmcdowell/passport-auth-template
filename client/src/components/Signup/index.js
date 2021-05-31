import React, { useState } from 'react';
import axios from 'axios';
import { signupData } from '../../actions';

const Signup = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [signupMessage, setSignupMessage] = useState('');

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3000/signup?email=${user.email}&password=${user.password}`
      )
      .then(response => {
        dispatchEvent(signupData('yo this worked'));
      })
      .catch(error => {
        setSignupMessage('Error signing up');
      });
  };

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>
          Email:
          <input type='text' name='email' onChange={onChange} />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='password' name='password' onChange={onChange} />
        </label>
        <label htmlFor='passwordrepeat'>
          Re-enter Password:
          <input type='password' name='passwordrepeat' onChange={onChange} />
        </label>
        <input className='submitButton' type='submit' value='Submit' />
      </form>
      <p>{signupMessage}</p>
      <p>
        Already have an account? <a href='/login'>Login!</a>
      </p>
    </>
  );
};

export default Signup;
