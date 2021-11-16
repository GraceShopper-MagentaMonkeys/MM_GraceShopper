import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

const Navbar = ({ handleClick, isLoggedIn, userId, isAdmin }) => (
  <div className="navBarHeader">
    <img
      src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/61384177_2072231662906442_4883924899896229888_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=rQyaG6tLslkAX-eh64z&_nc_ht=scontent-lga3-1.xx&oh=d826cde22379d813a987d54ea9096343&oe=61B87141"
      className="logo"
    />
    <hr />
    <nav className="navBar">
      <div className="nav">
        {isLoggedIn ? (
          <div className="navLinks">
            {/* The navbar will show these links after you log in */}
            {console.log(userId)}
            <Link to="/home">Home</Link>
            <Link to="/allproducts">All Products</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>

            {isAdmin ? (
              <div>
                <Link to={"/create"}> Admins Only: Create A New Product </Link>
                <Link to={"/admin"}> All Users </Link>
              </div>
            ) : (
              ""
            )}
            <Link to="/cart/10">Cart</Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>
            <Link to="/allproducts">All Products</Link>
            <Link to="/cart/guest">Cart</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
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

    isAdmin: state.auth.isAdmin,
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
