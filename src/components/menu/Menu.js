import React, { Component } from 'react';
import PlatesCarousel from './PlatesCarousel';
import './menu.scss';
import GridMenu from './menu-tabs/GridMenu';
import MenuTabs from './MenuTabs';
var ReactDOM = require('react-dom');
class Menu extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }
  // componentDidUpdate() {
  //   this.swipeableActions.updateHeight();
  // }
  render() {
    return (
      <div className='home-page' ref={ref => (this._div = ref)}>
        <div className='locationPage' />
        <div className='contactHeader'>
          <h1 className='revTitle'>Menu</h1>
          <h2 className='popularDishes'>Popular Dishes</h2>
        </div>
        <div className='PCContainer'>
          <PlatesCarousel />
        </div>
        {/* <div className='menuTabs'> */}
        <MenuTabs />
        {/* </div> */}
        {/* <div><GridMenu /></div> */}
      </div>
    );
  }
}

export default Menu;
