import React from 'react';
import { connect, Connect } from 'react-redux';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Magenta Monkeys Store of Wack Items</h2>
        <button
          onClick={() => {
            window.location = `/allproducts/`;
          }}
        >
          Shop Now
        </button>
        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <img src="https://images.unsplash.com/photo-1585144860131-245d551c77f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80" />
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
