import React from 'react';
import { connect, Connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landingPage'>
      <div className='welcomeText'>




        <div className="landingMainBg">
          <h1> We are a modern lifestyle brand, for the modern man. </h1>
          <h3>Luxury, just for you. </h3>
          <h4> Goop, but for men. </h4>
          <div className="homeButtonDiv">
          <Link to='/allproducts'>
            {/* <button>SHOP NOW</button> */}
            <img src='https://www.myss.com/wp-content/uploads/2020/11/Shop-Now.png' />
          </Link>
          </div>
          <div className='categoriesLink'>
            <Link to='/allproducts/sort/home'>
            <h4>Home</h4>
                <img className='categoryImage' src='https://readcereal.com/wp-content/uploads/2019/10/The-Row-7-696x963.jpg' />

            </Link>

            <Link to='allproducts/sort/style'>
            <h4>Style</h4>
              <img className='categoryImage' src='https://readcereal.com/wp-content/uploads/2019/10/portrait2-696x963.jpg'></img>

            </Link>

            <Link to='allproducts'>
            <h4>Food & Drink </h4>
              <img className='categoryImage' src='https://d39l2hkdp2esp1.cloudfront.net/img/photo/213566/213566_00_2x.jpg'></img>
            </Link>
          </div>
          {/* <img
            className="homeImages"
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <img
            className="homeImages"
            src="https://images.unsplash.com/photo-1585144860131-245d551c77f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
          /> */}
        </div>
        {/* <div className='missionStatement'> */}
        {/* <h4> Our mission: </h4> */}
        {/* <h4> Categories links go here!</h4>
        <div className='categoriesContainer'>

        <h4>//style//</h4>
        <h4>//home//</h4>
        <h4>//food and drink//</h4> */}
        {/* </div> */}
        {/* </div> */}
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
