import React, { Component } from 'react';
import PlatesCarousel from './PlatesCarousel';
import './menu.scss';
import GridMenu from './GridMenu';

class Menu extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='menuHeader'>
          <h1 className='revTitle'>Menu</h1>
          <h2 className='popularDishes'>Popular Dishes</h2>
        </div>
        <div className='PCContainer'>
          <PlatesCarousel />
        </div>
        <div>
          <GridMenu />
        </div>
      </div>
    );
  }
}

export default Menu;
