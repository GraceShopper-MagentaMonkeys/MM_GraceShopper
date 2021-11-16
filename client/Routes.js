import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import EditProduct from './components/EditProduct';
import allUsers from './components/all-users';
import CreateProduct from './components/CreateProduct';
import SortedProducts from './components/SortedProducts';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/login" component={isLoggedIn ? Home : Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" exact component={Home} />
          <Route path="/signup" component={isLoggedIn ? Home : Signup} />
          <Route exact path="/allproducts" component={AllProducts} />
          <Route
            exact
            path="/allproducts/:productId"
            component={SingleProduct}
          />
          <Route
            path="/allproducts/:productId/edit"
            component={isAdmin && isLoggedIn ? EditProduct : ''}
          />
          <Route path="/cart/:userId" component={Cart} />
          <Route
            path="/admin"
            component={isAdmin && isLoggedIn ? allUsers : ''}
          />
          <Route path="/create" component={CreateProduct} />
          <Route
            path="/allproducts/sort/:productCategory"
            component={SortedProducts}
          />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
