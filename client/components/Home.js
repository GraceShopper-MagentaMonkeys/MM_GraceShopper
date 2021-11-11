import React from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      {console.log(props)}
      <h3>Welcome, {username}</h3>
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
    auth: state.auth
  };
};

export default connect(mapState)(Home);
