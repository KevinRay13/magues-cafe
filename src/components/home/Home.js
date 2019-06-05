import React, { Component } from 'react';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className='banner-image' />
        <div>
          <h1>Logo Here</h1>
          <h2>Fun Sayings Here</h2>
          <button>View Menu</button>
          <button>Call In Order</button>
        </div>
        <div className='our-story-container'>
          <div className='our-story-title'>
            <h2 className='titles margins'>Our Story</h2>
            <h3 className='titles margins'>Best Mexican Food in Boerne</h3>
          </div>
          <div className='our-story'>
            <div className='our-story-p'>
              <p className='titles'>
                We aren’t the fanciest taquería in town. “Hip” isn’t even part
                of our vocabulario. Flaco’s Tacos just knows good, simple
                Mexican food: tacos, burritos, tamales y quesadillas. Nada más.
                We also know “fresh & homemade”. We don’t take short-cuts.
                That’s why you can see right into our kitchens. We are preparing
                everything fresh daily. The same traditional foods and drinks we
                have in México, and even in the Little Village and Pilsen
                neighborhoods right here in Chicago, we bring to you. We’ll even
                get on our bicicletas and bike it to your home. Then you don’t
                have to miss a second of your favorite telenovela…Plus we only
                use green, bio-degradable, or recyclable packaging. That way we
                are not adding to the land-fill with so much waste. That makes
                us (and you) muy felíz!
              </p>
            </div>
            <div className='our-story-image' />
          </div>

          <div className='our-specials'>
            <h2>Our Specials</h2>
            <h3>Mague's Offers Great Deals Every Day</h3>
            <ul>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
              <li>Sun</li>
            </ul>
          </div>
          <div>
            <h2>Reviews Carousel</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
