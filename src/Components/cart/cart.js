import React, {Component} from 'react';

// Component
import './cart.css';
import Shoppinglist from './shoppinglist/shoppinglist';

class Cart extends Component {
  render(){
    return (
      <div className="body">
          <Shoppinglist />
      </div>
    );  
  }
}

export default Cart;
