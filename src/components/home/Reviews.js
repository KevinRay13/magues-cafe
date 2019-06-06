import React from 'react';
import Slider from 'react-slick';
import './home.scss';

class Reviews extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 7000
    };
    return (
      <Slider {...settings}>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "I've been to Mague's Cafe twice and both times I've been
              completely satisfied. Their breakfast tacos are among the best
              I've eaten and the service was good. Both times I went it was
              pretty busy but the servers managed to keep up. I highly recommend
              Mague's Cafe."
            </h4>
            <h3 className='customer'> - Robert Manigault</h3>
          </div>
        </div>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "Fast! Delicious! Clean! I really enjoyed and recommend the huevos
              rancheros."
            </h4>
            <h3 className='customer'> - Lupina Vela</h3>
          </div>
        </div>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "The breakfast is absolutely great from the breakfast tacos to the
              breakfast plates! I go every Saturday for breakfast and Sunday
              tacos to go. BEST IN TOWN!"
            </h4>
            <h3 className='customer'> - Robert Tucker</h3>
          </div>
        </div>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "Amazing authentic homemade food! Best Mexican food in South
              Central Texas!!! Must Go Best Food in Boerne!! Or even San Antonio
              ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
            </h4>
            <h3 className='customer'> - Star West</h3>
          </div>
        </div>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "Los huevos rancheros con papas a la mexicana ,frijolitos con
              chorizo y sus tortillas echas a mano son deliciosos 😋🙋🏽"
            </h4>
            <h3 className='customer'> - Lupe Lozano</h3>
          </div>
        </div>
        <div className='review rev1'>
          <div className='reviewContent'>
            <h4 className='customerReview'>
              "if you haven't had their shrimp cocktail, you haven't lived. Best
              ever. Just had one and so good. Fish is good too"
            </h4>
            <h3 className='customer'> - Sherri Yates</h3>
          </div>
        </div>
      </Slider>
    );
  }
}
export default Reviews;
