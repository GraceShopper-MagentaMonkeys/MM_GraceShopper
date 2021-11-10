import React from 'react';
import { connect, Connect } from 'react-redux';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h2>The 2021 Fashion Guide</h2>
        <div className="homeButtonDiv">
          <button
            className="homeButton"
            onClick={() => {
              window.location = `/allproducts/`;
            }}
          >
            SHOP NOW
          </button>
        </div>
        <div className="landingMainBg">
          <img
            className="homeImages"
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <img
            className="homeImages"
            src="https://images.unsplash.com/photo-1585144860131-245d551c77f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
          />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(LandingPage);
