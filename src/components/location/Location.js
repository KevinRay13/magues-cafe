import React, { Component } from 'react';

import './location.scss';
import LocationCarousel from './LocationCarousel.js';
var ReactDOM = require('react-dom');
class Location extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    return (
      <div className='locationPage' ref={ref => (this._div = ref)}>
        <div>
          <header className='locationHeader'>
            <h1 className='revTitle'>Location</h1>
          </header>
          <div className='locationBody'>
            <div className='box'>
              <div className='innerBox'>
                <h2>Boerne </h2>
                <a href='https://goo.gl/maps/Hth1W6hnR6FJH4LdA'>
                  <h3>934 N Main St, Boerne, Texas 78006</h3>
                </a>
                <h3>
                  <a href='tel:+8302499168'>(830) 249-9168</a>
                </h3>
                <div className='panel2 pink'>
                  {/* <button
                    className='button'
                    href='https://goo.gl/maps/iSMnfKavZT6GW1Do8'
                  >
                    Directions
                  </button> */}
                  <a
                    className='button'
                    href='https://goo.gl/maps/iSMnfKavZT6GW1Do8'
                  >
                    Directions
                  </a>
                </div>
              </div>
              <div className='innerBox'>
                <h2>Spring Branch </h2>
                <a href='https://goo.gl/maps/Hth1W6hnR6FJH4LdA'>
                  <h3>20450 TX-46, Spring Branch, TX 78070</h3>
                </a>
                <h3>
                  <a href='tel:+8309805137'>(830) 980-5137</a>
                </h3>
                <div className='panel2 pink'>
                  {/* <button
                    className='button'
                    href='https://goo.gl/maps/Hth1W6hnR6FJH4LdA'
                  >
                    Directions
                  </button> */}
                  <a
                    className='button'
                    href='https://goo.gl/maps/uRZgnwdk6P1c8BL68'
                  >
                    Directions
                  </a>
                </div>
              </div>
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
