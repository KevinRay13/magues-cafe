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
        <div>
          <h3>Robert Manigault</h3>
          <h4>
            "I've been to Mague's Cafe twice and both times I've been completely
            satisfied. Their breakfast tacos are among the best I've eaten and
            the service was good. Both times I went it was pretty busy but the
            servers managed to keep up. If someone is interested in delicious,
            unpretentious food, I highly recommend Mague's Cafe."
          </h4>
        </div>
        <div>
          <h3>Lupina Vela</h3>
          <h4>
            "Fast! Delicious! Clean! I really enjoyed and recommend the huevos
            rancheros."
          </h4>
        </div>
        <div>
          <h3>Robert Tucker</h3>
          <h4>
            "The breakfast is absolutely great from the breakfast tacos to the
            breakfast plates! I go every Saturday for breakfast and Sunday tacos
            to go. BEST IN TOWN!"
          </h4>
        </div>
        <div>
          <h3>Star West</h3>
          <h4>
            "Amazing authentic homemade food! Best Mexican food in South Central
            Texas!!! Must Go Best Food in Boerne!! Or even San Antonio ⭐️ ⭐️
            ⭐️ ⭐️ ⭐️ ⭐️"
          </h4>
        </div>
        <div>
          <h3>Lupe Lozano</h3>
          <h4>
            "Los huevos rancheros con papas a la mexicana ,frijolitos con
            chorizo y sus tortillas echas a mano son deliciosos 😋🙋🏽"
          </h4>
        </div>
        <div>
          <h3>Sherri Yates</h3>
          <h4>
            "if you haven't had their shrimp cocktail, you haven't lived. Best
            ever. Just had one and so good. Fish is good too"
          </h4>
        </div>
      </Slider>
    );
  }
}
export default Reviews;
