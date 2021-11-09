import React from 'react';
import { connect } from 'react-redux';

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        img: 'https://wisdmlabs.com/site/wp-content/uploads/2016/04/inventory.png',
        name: 'Gold Cactus',
        price: 6012,
        description: 'this is a perfectly golden cactus. Please buy it',
      },
      {
        img: 'https://wisdmlabs.com/site/wp-content/uploads/2016/04/inventory.png',
        name: 'Whiskey Shaving Cream for Women',
        price: 30,
        description: 'Idk buy it if you want?',
      },
      {
        img: 'https://wisdmlabs.com/site/wp-content/uploads/2016/04/inventory.png',
        name: 'Rocky Mountain fertility Medicine',
        price: 500,
        description: 'If ya know ya know',
      },
    ];
  }
  render() {
    return (
      <div>
        {this.state.map((product) => {
          return (
            <div key={product.name}>
              <img src={product.img} />
              <h4>
                {product.name} - ${product.price}
              </h4>
              <p>{product.description}</p>
            </div>
          );
        })}
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

export default connect(mapState, mapDispatch)(AllProducts);
