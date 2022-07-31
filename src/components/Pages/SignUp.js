import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import classes from './SignUp.module.css';

const SignUp = () => {
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    street: '',
    postalCode: '',
  });
  const firstNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };
  const lastNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, lastName: event.target.value };
    });
  };
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
  const cityChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, city: event.target.value };
    });
  };
  const streetChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, street: event.target.value };
    });
  };
  const postalCodeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, postalCode: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
      });
    setUserInput({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      city: '',
      street: '',
      postalCode: '',
    });
    navigate('../', { replace: true });
  };
  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <form action='#' className={classes['cta-form']}>
          <div>
            <label htmlFor='first-name'>First Name</label>
            <input
              value={userInput.firstName}
              id='first-name'
              type='text'
              required
              onChange={firstNameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='last-name'>Last Name</label>
            <input
              value={userInput.lastName}
              id='last-name'
              type='text'
              required
              onChange={lastNameChangeHandler}
            />
          </div>
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
              value={userInput.password}
              id='password'
              type='password'
              required
              onChange={passwordChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input
              value={userInput.city}
              id='city'
              type='city'
              required
              onChange={cityChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='street'>Street</label>
            <input
              value={userInput.street}
              id='street'
              type='street'
              required
              onChange={streetChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='postalCode'>Postal Code</label>
            <input
              value={userInput.postalCode}
              id='postalCode'
              type='postalCode'
              required
              onChange={postalCodeChangeHandler}
            />
          </div>
          <button
            type='submit'
            className={classes['btn--form']}
            onClick={submitHandler}
          >
            Sign in
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
