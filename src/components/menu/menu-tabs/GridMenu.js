import React from 'react';
import './gridMenu.scss';

class GridMenu extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <body className='pa3 pa4-ns pa5-l '>
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
                One pound of chicken, beef or combination of both with bell
                peppers and onions. Guacamole, charro beans, rice, and six
                tortillas.
              </h4>
              <h4>$23.95</h4>
            </div>
          </div>
          {/* <div className='lunch--header pt3 pb3 bdb mb3'>
            <div /> */}
          {/* </div> */}
          <div className='items--container lunch--container'>
            <h3 className='cubano f3 tracked green pt2'>Childs Plates</h3>
            <p className='item-description i pt2 pb3'>
              All served with rice & beans & 1 tortilla
            </p>
            <ul className=''>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Cheese Enchilada
                  <span className='price fw4 baskerville'>($5.20)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beef Enchilada
                  <span className='price fw4 baskerville'>($5.20)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Picadillo
                  <span className='price fw4 baskerville'>($5.20)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Carne Guisada{' '}
                  <span className='price fw4 baskerville'>($5.20)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Crispy Taco Plate
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>Chicken or beef</p>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Caldo - Soups</h3>
            <p className='item-description'>With Corn or Flour Tortillas</p>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Menudo
                  <span className='price fw4 baskerville ttn'>
                    <span className='i'> Regular</span> (3.75)
                    <span className='i'> Grande</span> (6.50)
                  </span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Caldo de Rez
                  <span className='price fw4 baskerville ttn'>
                    <span className='i'> W/o rice</span> (6){' '}
                    <span className='i'> W rice</span> (6.75)
                  </span>
                  <p className='item-description'>Beef soup</p>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Pozole
                  <span className='price fw4 baskerville ttn'>
                    <span className='i'> Friday & Saturday only</span> (6.50){' '}
                  </span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Caldo de Pollo
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (6){' '}
                  </span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Fideo
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (5.75)
                  </span>
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Hamburgers</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Hamburger
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (3.25){' '}
                    <span className='i'> W fries</span> (4.25)
                  </span>
                  <p className='item-description' />
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Cheeseburger
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (4.25){' '}
                    <span className='i'> W fries</span> (5.25)
                  </span>
                  <p className='item-description' />
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>
              Side Orders & Extras
            </h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chile Relleno{' '}
                  <span className='price fw4 baskerville'>(3.75)</span>
                </h3>
                <span className='price fw4 baskerville' />
                <p className='item-description'>
                  <span className='price fw4 baskerville' />
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Charro Beans
                  <span className='price fw4 baskerville ttn'>(2.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Salsa Ranchera
                  <span className='price fw4 baskerville ttn'>(1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Extra Chips
                  <span className='price fw4 baskerville ttn'>(1)</span>
                </h3>
                <p className='item-description'>served after 11:30</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Pico de Gallo
                  <span className='price fw4 baskerville ttn'>(1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  French Fries
                  <span className='price fw4 baskerville ttn'>(2.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Sausage Patty
                  <span className='price fw4 baskerville ttn'> (1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Strips of Bacon
                  <span className='price fw4 baskerville ttn'> (1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Ham
                  <span className='price fw4 baskerville ttn'> (2)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Rice
                  <span className='price fw4 baskerville ttn'> (1.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beans
                  <span className='price fw4 baskerville ttn'> (1.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Shredded Cheese
                  <span className='price fw4 baskerville ttn'> (1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Sour Cream
                  <span className='price fw4 baskerville ttn'> (1)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Guacamole
                  <span className='price fw4 baskerville ttn'> (2.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Slices of Toast
                  <span className='price fw4 baskerville ttn'> (.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Tortillas
                  <span className='price fw4 baskerville ttn'> (.80)</span>
                </h3>
                <p className='item-description'>Dine in only</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Barbacoa
                  <span className='price fw4 baskerville ttn'> (3.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Sausage Link
                  <span className='price fw4 baskerville ttn'> (2)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Pork Chop
                  <span className='price fw4 baskerville ttn'> (2.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Order of Potatoes
                  <span className='price fw4 baskerville ttn'> (1.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Order of Cilantro
                  <span className='price fw4 baskerville ttn'> (.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Chile Toreado
                  <span className='price fw4 baskerville ttn'> (.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Anything not listed ask for price
                  <span className='price fw4 baskerville ttn' />
                </h3>
                <p className='item-description' />
              </li>
            </ul>
          </div>

          <div className='bottom' />
        </body>
      </div>
    );
  }
}
export default GridMenu;
