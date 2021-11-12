import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';



const Navbar = ({ handleClick, isLoggedIn, userId, isAdmin }) => (

  <div className="navBarHeader">
    <h1>Magenta Monkeys</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {console.log(userId)}
          <Link to="/home">Home</Link>
          <Link to="/allproducts">Products</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>

          <Link to={`/cart/${userId}`}>Cart</Link>


          {isAdmin ? (
            <Link to={'/create'}> Admins Only: Create A New Product </Link>
            // link to users view
          ) : ('')}


          <Link to="/cart/10">Cart</Link>

        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/allproducts">All Products</Link>
          <Link to="/cart/guest">Cart</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,

    userId: state.auth.id,

    isAdmin: state.auth.isAdmin

  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
