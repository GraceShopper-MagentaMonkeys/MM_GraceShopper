import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts } from '../store/cart'

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
            ],
            
        }
    }
    
    render(){
        
        const prices = this.state.selectedProducts.map( product => {
            return product.price
        })
        
        const total =prices.reduce((acc, ele) => {
                return acc + ele
            }, 0)
        
        //function to get quantity? magic method? 
        
        return (
            <div>
                    <h1>Your Items</h1>
                    {this.state.selectedProducts.map( product => (
                        <div key={product.name}>
                            <img src={product.img}/>
                            <h4>{product.name} ${product.price}</h4>
                            <h4>Quantity:{1}</h4>
                            <button>+</button><button>Remove</button>
                        </div>
                    ))}
                <div>
                    <h2>Subtotal: ${total}</h2>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        userId: state.auth.id,
        selectedProducts: state.cartReducer
    }
}

const mapDispatch = dispatch => {
    return {
        fetchSelectedProducts: userId => getSelectedProducts(userId)
    }
}

export default connect(mapState, mapDispatch)(Cart)