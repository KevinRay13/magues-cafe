import React from 'react';
import Slider from 'react-slick';
import './locationcarousel.scss';

class LocationCarousel extends React.Component {
  render() {
    // function classToggle() {
    //   var el = document.querySelector('.icon-cards__content');
    //   el.classList.toggle('step-animation');
    // }

    // document
    //   .querySelector('#toggle-animation')
    //   .addEventListener('click', classToggle);
    return (
      <div>
        <figure className='icon-cards mt-3'>
          <div className='icon-cards__content'>
            <div className='icon-cards__item '>
              <img src='MaguesFront.png' className='flipPictures' />
            </div>
            <div className='icon-cards__item '>
              <img src='maguesside.png' className='flipPictures' />
            </div>
            <div className='icon-cards__item '>
              <img src='maguesinside.png' className='flipPictures' />
            </div>
          </div>
        </figure>

        {/* <div class='checkbox'>
          <input class='d-none' id='toggle-animation' type='checkbox' checked />
          <label class='checkbox__checkbox' for='toggle-animation' />
          <label class='checkbox__label' for='toggle-animation'>
            Toggle animation
          </label>
        </div> */}
      </div>
    );
  }
}
export default LocationCarousel;
