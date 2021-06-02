import React, { useState } from 'react';

const Signup = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [signupMessage, setSignupMessage] = useState('');

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    // axios
    //   .post(
    //     `http://localhost:3000/signup?email=${user.email}&password=${user.password}`
    //   )
    //   .then(user => {
    //     dispatch(signupData(user));
    //   })
    //   .catch(error => {
    //     setSignupMessage('Error signing up');
    //   });
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
      <p>{signupMessage}</p>
      <p>
        Already have an account? <a href='/'>Login!</a>
      </p>
      <button onClick={testHandler}>Test</button>
    </>
  );
};

export default Signup;
