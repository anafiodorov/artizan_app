import React, { Fragment } from 'react';
import { useState } from 'react';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Layout/Header';

const Login = () => {
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };
  const passwordChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    let responseUserData = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput),
      }
    );
    let userLoginData = await responseUserData.json();

    const { accessToken } = userLoginData;

    // authCtx.setAuthUser(userLoginData);
    // console.log('Ctx user' + JSON.stringify(authCtx.user));
    // console.log(authCtx.user['name']);

    // if (accessToken) {
    //   localStorage.setItem('LoggedInPerson', JSON.stringify(userLoginData));
    //   authCtx.logInUser();
    //   navigate('../', { replace: true });
    // }
  };
  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <form action='#' className={classes['cta-form']}>
          <div>
            <label htmlFor='email'>Email address</label>
            <input
              value={userInput.email}
              id='email'
              type='email'
              required
              onChange={emailChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              value={userInput.entredFullName}
              id='password'
              type='text'
              required
              onChange={passwordChangeHandler}
            />
          </div>
          <button
            type='submit'
            className={classes['btn--form']}
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
