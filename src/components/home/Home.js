import React, { Component } from 'react';

import './home.scss';
import Reviews from './Reviews';
import TextCarousel from './TextCarousel';

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='banner-image' />
        <div className='belowBanner'>
          <div className='logoBg'>
            <img src='magueslogo.png' alt='' className='logoHome' />
          </div>
          <TextCarousel />

          <div className='panel pink'>
            <a id='callButton' className='button' href='tel:+8309805137'>
              Call In Order
            </a>
          </div>
        </div>

        <div className='our-story-container'>
          <div className='coloredBg'>
            {/* <div className='our-story'> */}
            <div className='our-story-title'>
              <h4 className='title'>Our Story</h4>
              {/* <h3 className='titles margins'>
                <i>Best Mexican Food in Boerne</i>
              </h3> */}
            </div>

            <div className='our-story-p'>
              <p className='storyP'>
                <b>
                  We aren’t the fanciest taquería in town. “Hip” isn’t even part
                  of our vocabulario. Flaco’s Tacos just knows good, simple
                  Mexican food: tacos, burritos, tamales y quesadillas. Nada
                  más. We also know “fresh & homemade”. We don’t take
                  short-cuts. That’s why you can see right into our kitchens. We
                  are preparing everything fresh daily. That makes us (and you)
                  muy felíz!
                </b>
              </p>
            </div>
            {/* <div className='our-story-image' /> */}
            <div className='ownerImageCont'>
              <img
                className='maguesOwnersImg'
                src='maguesOwners.jpg'
                alt='Magues Owners'
              />
            </div>
          </div>
          <div className='white'>
            {/* <div className='our-specials'>
              <h1 className='title'>Daily Specials</h1>
              <h3>
                <i>Mague's Offers Great Deals Every Day</i>
              </h3>
              <ul className='dailySpecials'>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
              </ul>
            </div> */}
            <div className='reviewsContainer'>
              <h2 className='revTitle'>Reviews</h2>

              <Reviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
