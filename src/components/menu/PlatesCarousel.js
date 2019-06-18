import React from 'react';
import Slider from 'react-slick';
import './platesCarousel.scss';

class PlatesCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className='plate'>
          {/* <div className='plateContent'> */}
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Machacado</h1>
          {/* </div> */}
        </div>
        <div className='plate'>
          {/* <div className='plateContent'> */}
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Albondigas</h1>
          {/* </div> */}
        </div>
        <div className='plate'>
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Fajitas</h1>
        </div>
        <div className='plate'>
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Bacon and Egg</h1>
        </div>
        <div className='plate'>
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Machacado</h1>
        </div>
        <div className='plate'>
          <img className='plate1' src='emptydish.png' alt='' />
          <h1 className='centerPlateTitle'>Machacado</h1>
        </div>
      </Slider>
    );
  }
}
export default PlatesCarousel;
