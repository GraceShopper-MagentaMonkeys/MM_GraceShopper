import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <div className="landingMainBg">
          <h1 className='landingMainImage'> We're a modern lifestyle brand, for the modern man. </h1>
          <h3>Luxury, just for you. </h3>
          <h4> Goop... but for men. </h4>
          <div className="homeButtonDiv">
            <Link to="/allproducts">
              <img src="https://www.myss.com/wp-content/uploads/2020/11/Shop-Now.png" />
            </Link>
          </div>
        </div>
        <div className="categoriesLink">
          <Link to="/allproducts/sort/home" className="categoriesLinkContainer">
            <h4 className="centered">Home</h4>
            <img
              className="categoryImage"
              src="https://readcereal.com/wp-content/uploads/2019/10/The-Row-7-696x963.jpg"
            />
          </Link>

          <Link
            to="/allproducts/sort/style"
            className="categoriesLinkContainer"
          >
            <h4 className="centered">Style</h4>
            <img
              className="categoryImage"
              src="https://64.media.tumblr.com/8e734cf658a0aaee54a83bc0ae8651c5/216b3dfd5e1247e6-72/s1280x1920/565a153bc827f2933787f212dcfe0e4929782be7.jpg"
            ></img>
          </Link>

          <Link
            to="/allproducts/sort/food-drink"
            className="categoriesLinkContainer"
          >
            <h4 className="centered">Food & Drink </h4>
            <img
              className="categoryImage"
              src="https://www.kinfolk.com/wp-content/uploads/2016/10/Kinfolk_Vol17_ADayintheLife-6.jpg"
            ></img>
          </Link>
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
