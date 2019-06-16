import React, { Component } from 'react';

import './location.scss';
import LocationCarousel from './LocationCarousel.js';

class Location extends Component {
  render() {
    return (
      <div className='locationPage'>
        <div>
          <header className='locationHeader'>
            <h1 className='revTitle'>Location</h1>
          </header>
          <div className='locationBody'>
            <div className='box'>
              <div className='innerBox'>
                <h2>Boerne</h2>
                <a href='https://goo.gl/maps/Hth1W6hnR6FJH4LdA'>
                  <h3>934 N Main St, Boerne, Texas 78006</h3>
                </a>
                <h3>
                  <a href='tel:+8302499168'>(830) 249-9168</a>
                </h3>
              </div>
              <img src='MaguesLoc.png' className='maguesLocationImg' alt='' />
            </div>
            <div className='box2'>
              <LocationCarousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
