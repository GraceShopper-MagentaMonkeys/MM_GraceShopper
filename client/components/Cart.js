import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
    constructor(){
        super();
        
        this.state = {
            selectedProducts: [
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
                }
            ]
        }
    }
    
    render(){
        return (
            <div>
                <h1>Placeholder text is placeholder.</h1>
            </div>
        )
    }
}

const mapState = state => {
    return {
        // how is our store working? are we combining multiple reducers? 
        // selectedProducts: state from store
    }
}

const mapDispatch = dispatch => {
    return {
        // getSelectedProducts: function from redux file
    }
}

export default connect(mapState, mapDispatch)(Cart)