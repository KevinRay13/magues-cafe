import React, { Component } from 'react';

import './textcarousel.scss';

class TextCarousel extends Component {
  render() {
    return (
      <div className='content-slider'>
        <div className='slider'>
          <div className='mask'>
            <ul>
              <li className='anim1'>
                <div className='quote'>
                  Enchiladas are red, agave is blue, the salsa is spicy, the
                  menudo is too.
                </div>
              </li>
              <li className='anim2'>
                <div className='quote'>"Try Mague's Sweet Tea!"</div>
                <div className='source'>- Everyone</div>
              </li>
              <li className='anim3'>
                <div className='quote'>
                  Feed me tacos and tell me i'm beautiful
                </div>
              </li>
              <li className='anim4'>
                <div className='quote'>
                  Thirty years serving authentic Mexican food
                </div>
              </li>
              <li className='anim5'>
                <div className='quote'>
                  I could go for some mexican food, how about you?
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TextCarousel;
