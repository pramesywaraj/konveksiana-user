import React, {Component} from 'react';

// Component
import './orderpage.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Designpakaian } from './designpakaian/designpakaian.js';

class Orderpage extends Component {
  render(){
    return (
      <div className="body">
        <Header />
        <Designpakaian />
        <Footer />
      </div>
    );  
  }
}

export default Orderpage;
