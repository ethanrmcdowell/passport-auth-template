import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Signup = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [signupMessage, setSignupMessage] = useState('');

  // const dispatch = useDispatch();
  // const userInfo = useSelector(state => state);

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e, req) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    if (user.password !== user.passwordrepeat) {
      setSignupMessage('Passwords do not match');
    } else {
      await axios
        .post(
          `http://localhost:3000/signup?email=${user.email}&password=${user.password}`
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  const testHandler = e => {
    e.preventDefault();
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
      <p className='signupMessage'>{signupMessage}</p>
      <p>
        Already have an account? <a href='/'>Login!</a>
      </p>
      <button onClick={testHandler}>Test</button>
    </>
  );
};

export default Signup;
