import React, { Component } from 'react';

import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className='contactHeader'>
          <h1 className='revTitle'>Contact</h1>
        </div>
        <div className='container'>
          <div className='insideContainer'>
            <h2 className='conTitle'>Boerne Location</h2>
            <div className='infoContainer'>
              <p>North end of Boerne</p>
              <p>934 N Main St</p>
              <p> Boerne, Texas 78006-1628</p>
              <p>Phone: (830) 249-9168</p>
            </div>
            <div className='panel3 pink'>
              <a className='button' href='tel:+8302499168'>
                Call Us
              </a>
            </div>
          </div>
          <div className='insideContainer'>
            <h2 className='conTitle'>Spring Branch Location</h2>
            <div className='infoContainer'>
              <p>20450 TX-46 </p>
              <p>Spring Branch, TX 78070</p>

              <p>Phone: (830) 980-5137</p>
            </div>
            <div className='panel3 pink'>
              <a className='button' href='tel:+8309805137'>
                Call Us
              </a>
            </div>
          </div>

          <div className='insideContainerB'>
            <h2 id='conTitle'>Follow Us</h2>

            <div className='socIconCont'>
              <a href='https://www.facebook.com/Magues-Cafe-108150915893027/'>
                <img className='socialIcons' src='fbIcon.png' alt='' />
              </a>
              <a href='https://www.instagram.com/explore/locations/3207240/magues-cafe/?hl=en'>
                <img className='socialIcons' src='igIcon.png' alt='' />
              </a>
              <a href='https://www.yelp.com/biz/magues-cafe-boerne?osq=magues+cafe'>
                <img className='socialIcons' src='yelpIcon.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
