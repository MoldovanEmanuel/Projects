import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from './Auth.context';

import './Auth.css'


export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    'retype-password': '',
  });

  const { auth, login } = useAuth();

  const history = useHistory();
  const location = useLocation();

  if (auth) {
    history.push('/');
    return null;
  }

  let isLogin = false;
  if (location.pathname.includes('login')) {
    isLogin = true;
  }

  function handleChange(e) {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const data = await fetch(
      `http://localhost:3001/${isLogin ? 'login' : 'register'}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      }
    ).then((res) => res.json());

    if (data.accessToken) {
      login(data);
      let to = '/';
      if (location.state?.from) {
        to = location.state.from.pathname + location.state.from.search;
      }
      history.push(to);
      return null;
    } 
  }

  function isFormValid() {
    let isValid = true;

    if (!values.email) {
      isValid = false;
    }

    if (!values.password) {
      isValid = false; 
    }

    if (!isLogin && values.password !== values['retype-password']) {
      isValid = false;
    }
    return isValid;
  }

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
     
      <div className="mb-3">
        <label htmlFor="email" className="login-form-label register-form-label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className='login-form-input register-form-input'
          autoComplete="off"
        />

        <label htmlFor="password" className="login-form-label register-form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className='login-form-input register-form-input'
          autoComplete="off"
        />
        {!isLogin && (
          <>
            <label htmlFor="retype-password" className="register-form-label">
              Retype Password
            </label>
            <input
              type="password"
              id="retype-password"
              name="retype-password"
              value={values['retype-password']}
              onChange={handleChange}
              className='register-form-input'
              autoComplete="off"
            />
            <label htmlFor="fName" className="register-form-label">
              First Name
            </label>
             <input
              type="text"
              id="fName"
              name="fName"
              value={values['fName']}
              onChange={handleChange}
              className='register-form-input'
              autoComplete="off"
            />
             <label htmlFor="lName" className="register-form-label">
              Last Name
            </label>
             <input
              type="text"
              id="lName"
              name="lName"
              value={values['lName']}
              onChange={handleChange}
              className='register-form-input'
              autoComplete="off"
            />

          </>
        )}
        <button type="submit" className="login-btn register-btn">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </div>
    </form>
  );
}
