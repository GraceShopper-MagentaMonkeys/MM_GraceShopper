import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  let nums = Math.floor(Math.random() * 2000000000);
  return (
    <div className='confirmationContainer'>
      <h1>Thank You!</h1>
      <h4>{`Order confirmation #${nums}`}</h4>
      <Link to={'/allproducts'}>
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Confirmation;
