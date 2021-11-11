import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="loginForm">
      <form className="innerForm" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small></small>
          </label>
          <input
            className="usernameField"
            placeholder="Username"
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small></small>
          </label>
          <input
            className="passwordField"
            placeholder="Password"
            name="password"
            type="password"
          />
        </div>
        {name === 'signup' ? (
          <div>
          <label htmlFor="email">
            <small></small>
          </label>
          <input
            className="passwordField"
            placeholder="Insert email"
            name="email"
            type="email"
          />
        </div>
        ) : ''}
        <div>
          <button className="loginButton" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      dispatch(authenticate(username, password, formName, email));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
