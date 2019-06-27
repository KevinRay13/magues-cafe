import React from 'react';
import './gridMenu.scss';

class Tacos extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <body className='pa3 pa4-ns pa5-l '>
          <div className='lunch--header pt3 pb3 bdb mb3'>
            <div className=''>
              <h2 className='LDHeader'>Tacos</h2>
              <p />
            </div>
          </div>
          <div className='items--container breakfast--container'>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Huevos Rancheros
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (3.75) <br />
                    <span className='i' /> W Bacon, Potatoes, or Sausage (4.75)
                    <br />
                    <span className='i'> W two of the above</span> (5.75)
                  </span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Huevos a la Mexicana
                  <span className='price fw4 baskerville'>(5.55)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Papa a la Mexicana
                  <span className='price fw4 baskerville'>(5.55)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Machacado
                  <span className='price fw4 baskerville'>(5.55)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Barbacoa
                  <span className='price fw4 baskerville'>(5.75)</span>
                </h3>
                <p className='item-description'>Sat & Sun only</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicharrones
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicharrones with Eggs
                  <span className='price fw4 baskerville'>(6.25)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chorizo con Huevo
                  <span className='price fw4 baskerville'>(5.55)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Eggs
                  <span className='price fw4 baskerville'>(2.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Mague's Special Plate
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description'>
                  Sausage, Chile, Tomato, Potato, Onions, Beans, No Egg
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Papa Con Huevo
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description' />
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chilaquiles
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Sausage & Egg
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description i' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bacon & Egg
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Pancake
                  <span className='price fw4 baskerville'>(2)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One Egg, 2 Silver Dollar Pancakes
                  <span className='price fw4 baskerville'>(3)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Eggs, Three Silver Dollar Pancakes
                  <span className='price fw4 baskerville'>(4.25)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Two Eggs, Bacon OR sausage, Papas, Toast
                  <span className='price fw4 baskerville'>(5.50)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Silver Dollar Pancakes
                  <span className='price fw4 baskerville'>(1.75)</span>
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
export default Tacos;
