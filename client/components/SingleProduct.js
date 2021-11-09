import React from 'react';
import { connect } from 'react-redux';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: {
        img: 'https://wisdmlabs.com/site/wp-content/uploads/2016/04/inventory.png',
        name: 'Gold Cactus',
        price: 6012,
        description: 'this is a perfectly golden cactus. Please buy it',
      },
    };
  }
  render() {
    return (
      <div>
        <img src={this.state.productId.img} />
        <h4>
          {this.state.productId.name} - ${this.state.productId.price}
        </h4>
        <p>{this.state.productId.description}</p>
        <button
          onClick={() => {
            console.log('added to imaginary cart');
          }}
        >
          Add To Cart
        </button>
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

export default connect(mapState, mapDispatch)(SingleProduct);
