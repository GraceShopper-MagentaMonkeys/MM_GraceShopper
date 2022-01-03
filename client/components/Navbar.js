import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import { logout } from "../store";
import { Login } from "./AuthForm";
import Cart from "./Cart.js";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

const Navbar = ({ handleClick, isLoggedIn, userId, isAdmin, state }) => (
  <div className="navBarHeader">
    <img
      src="https://cdn.yourpng.com/uploads/preview/letter-g-black-circle-logo-png-images-download-65-116183398912zad6de1my.png"
      className="logo"
    />
    <hr />
    <nav className="navBar">
      <div className="nav">
        {isLoggedIn ? (
          <div className="navLinks">
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <div className="dropdown">
              <Link className="dropButton" to="/allproducts">
                Shop
              </Link>
              <div className="dropdownContent">
                <Link to="/allproducts/sort/home">
                  <h4>Home</h4>
                </Link>

                <Link to="/allproducts/sort/style">
                  <h4>Style</h4>
                </Link>

                <Link to="/allproducts/sort/food-drink">
                  <h4>Food & Drink </h4>
                </Link>

                <Link to="/allproducts">
                  <h4>View All</h4>
                </Link>
              </div>
            </div>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            {isAdmin ? (
              <div>
                <div className="dropdown">
                  <Link className="dropButton" to=''>Administrator Tools</Link>
                  <div className="dropdownContent">
                    <Link to="/create">
                      <h4>Create New Product</h4>
                    </Link>
                    <Link to={"/admin"}>
                      {" "}
                      <h4>View all Users</h4>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="dropdown">
              <Link className="dropButton" to={`/cart/${userId}`}>
                Cart
              </Link>
              <div className="dropdownContent">
                <Cart />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/home">Home</Link>
            <div className="dropdown">
              <Link className="dropButton" to="/allproducts">
                Shop
              </Link>
              <div className="dropdownContent">
                <Link to="/allproducts/sort/home">
                  <h4>Home</h4>
                </Link>

                <Link to="/allproducts/sort/style">
                  <h4>Style</h4>
                </Link>

                <Link to="/allproducts/sort/food-drink">
                  <h4>Food & Drink </h4>
                </Link>

                <Link to="/allproducts">
                  <h4>View All</h4>
                </Link>
              </div>
            </div>

            <Link to="/signup">Sign Up</Link>

            <div className="dropdown">
              <Link className="dropButton" to="/login">
                Login
              </Link>
              <div className="dropdownContent">
                <Login />
              </div>
            </div>
            <Link to="/cart/guest">Cart</Link>
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

    state: state,
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
