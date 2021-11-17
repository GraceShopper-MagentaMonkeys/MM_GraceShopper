import React from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div className='welcome'>
      <h3 className='welcomeText'>Welcome, {username}</h3>
      <LandingPage />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    auth: state.auth,
    isAdmin: state.auth.isAdmin
  };
};

export default connect(mapState)(Home);
