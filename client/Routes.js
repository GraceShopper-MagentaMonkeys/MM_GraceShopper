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


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/login" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/allproducts" component={AllProducts} />
            <Route exact path="/allproducts/:productId" component={SingleProduct} />
            <Route exact path='/allproducts/:productId/edit' component={EditProduct} />
            <Route exact path="/cart/:userId" component={Cart} />
            <Route exact path='/admin' component={allUsers}/>
            <Route exact path='/create' component={CreateProduct} />
            <Route exact path ='/allproducts/sort/:productCategory' component={AllProducts} />
          </Switch>
        ) : (

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/allproducts" component={AllProducts} />
            <Route exact path="/allproducts/:productId" component={SingleProduct} />
            <Route exact path="/cart/:userId" component={Cart} />
            <Route exact path ='/allproducts/sort/:productCategory' component={AllProducts} />
          </Switch>
        )}
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
