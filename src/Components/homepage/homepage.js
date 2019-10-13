import React, { Component } from 'react';

// Component
import './homepage.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Carousel from './carousel/carousel';
import Banner from './banner/banner'
import Pesanan from './pesanan/pesanan';
import Value from './value/value';
import About from './about/about';
import Order from './order/order';
import Klien from './klien/klien';
import Portfolio from './portfolio/portfolio';

class Homepage extends Component {
  render(){
    return (
      <div className="body">
        <Header />
        <Carousel id="promotion-banner" />
        <Banner />          
        <Pesanan id="status" />
        <Value id="value" />
        <About id="about" />
        <Order id="order" />
        <Klien id="client" />
        <Portfolio id="portfolio" />
        <Footer id="contact" />
      </div>
    );  
  }
}

export default Homepage;
