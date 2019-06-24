import React from 'react';
import './gridMenu.scss';

class Breakfast extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <body className='pa3 pa4-ns pa5-l container'>
          <div className='lunch--header pt3 pb3 bdb mb3'>
            <div className=''>
              <h2 className='LDHeader'>Lunch & Dinner</h2>
              <p>
                All plates served with beans & rice, 2 tortillas, lettuce &
                tomato
              </p>
            </div>
          </div>
          <div className='items--container breakfast--container'>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beef Enchiladas
                  <span className='price fw4 baskerville'>(6.5)</span>
                </h3>
                <p className='item-description'>Picadillo</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Cheese Enchiladas
                  <span className='price fw4 baskerville'>(6.5)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicken Enchiladas
                  <span className='price fw4 baskerville'>(6.5)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Green Chicken Enchiladas
                  <span className='price fw4 baskerville'>(6.5)</span>
                </h3>
                <p className='item-description'>With sour cream</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Enchiladas de Mole
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>With white cheese & onions</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Enchiladas de Chile Colorado
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>With white cheese & onions</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beef Soft Tacos
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Picadillo/ corn only</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicken Soft Tacos
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Corn only</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Crispy Beef Tacos
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>phoenician potatoes</p>
                <p className='item-description i'>Picadillo</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Crispy Chicken Tacos
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chalupas(Bean and Cheese only)
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description' />
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Carne de Puerco con calabaza y Helote
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>With squash, corn & pork</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Carne de Puerco con Chile Colorado
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description i'>Pork with red sauce</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Carne a la Mexicana
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  Beef with chile, onions, tomatoes
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Carne Guisada
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Beef in gravy</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Picadillo
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Ground beef with potatoes</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicharrones
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Soft pork skins</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Lengua
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Tongue with sauce</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Mexican Plate
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  2 cheese enchiladas, 1 crispy taco
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Popurry Plate
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  1 cheese enchilada, 1 crispy taco, 1 chalupa
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Fiesta Plate
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  1 cheese enchilada, 1 crispy taco, 1 chile relleno
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Tamales
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>3 tamales</p>
              </li>
            </ul>

            <ul>
              {/* <h3 className='cubano f3 tracked green pt2 pb3'>
                - These Plates Take a Little Longer -
              </h3> */}
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Tripas
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Soft or Crispy</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Fajita
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>
                  Chicken or Beef, choice of one only
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  2 Gorditas
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>Picadillo</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  3 Chicken Flautas
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>With guacamole & sour cream</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Quesadillas
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>
                  With white cheese, flour or corn
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  2 Pork Chops
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>With Salsa Ranchera</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Pollo en Mole
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>Chicken in mole sauce</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chile Relleno
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>Picadillo or cheese</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Steak Ranchero
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>With salsa ranchero</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Tampiquena
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>
                  2 cheese enchiladas, slice of fajita meat
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Milanesa
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>Thin breaded steak</p>
              </li>
            </ul>
          </div>
          <div className='specialsContainer'>
            <div className='specialsBox'>
              <h3 className='specialTitle'>Mague's Special Plate</h3>
              <h4>
                Sausage, chile, onions, potatoes, tomatoes, rice, beans, 2
                tortillas
              </h4>
              <h4>$6.50</h4>
            </div>
            <div className='specialsBox'>
              <h3 className='specialTitle'>Fajita's by the Pound</h3>
              <h4>
                One pound of chicken, beef or combination fo both with bell
                peppers and onions. Guacamole, charro beans, rice, and six
                tortillas.
              </h4>
              <h4>$23.95</h4>
            </div>
          </div>

          <div className='bottom' />
        </body>
      </div>
    );
  }
}
export default Breakfast;
