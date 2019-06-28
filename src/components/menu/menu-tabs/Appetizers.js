import React from 'react';
import './gridMenu.scss';

class GridMenu extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <div className='pa3 pa4-ns pa5-l '>
          <div className='lunch--header pt3 pb3 bdb mb3'>
            <div className=''>
              <h2 className='LDHeader'>Appetizers</h2>
            </div>
          </div>

          <div className='items--container lunch--container'>
            <h3 className='cubano f3 tracked green pt2'>Chalupas</h3>
            <p className='item-description i pt2 pb3'>
              All served with lettuce, tomatoes, & cheese
            </p>
            <ul className=''>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bean & Cheese Chalupa <br />
                  <span className='price fw4 baskerville'>One ($1.75)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($3.50)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bean & Beef or Chicken Chalupa <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bean & Guacamole Chalupa <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Compuestas Chalupa <br />
                  <span className='price fw4 baskerville'>One ($2.50)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($5.00)</span>
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Tacos</h3>
            <p className='item-description'> Only on Corn </p>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Crispy Beef Taco <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Crispy Chicken Taco <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beef Soft Taco <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chicken Soft Taco <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Enchiladas</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beef, Cheese, or Chicken <br />
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Green Chicken <br />
                  <p className='item-description'>
                    W/ White cheese & sour cream
                  </p>
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Mole <br />
                  <p className='item-description'>W/ White cheese & Onions</p>
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chile Colorado <br />
                  <p className='item-description'>W/ White cheese & onions</p>
                  <span className='price fw4 baskerville'>One ($2.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.00)</span>
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Nachos</h3>
            <p className='item-description'> Full Orders Only </p>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bean & Cheese
                  <span className='price fw4 baskerville'>(4.00)</span>
                </h3>
                <span className='price fw4 baskerville' />
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Bean & Cheese & Guacamole
                  <span className='price fw4 baskerville ttn'>(5.25)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Compuestos Nachos
                  <span className='price fw4 baskerville ttn'>(6.25)</span>
                </h3>
                <p className='item-description'>
                  {' '}
                  Bean, cheese, guacamole, picadillo{' '}
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Super Nachos
                  <span className='price fw4 baskerville ttn'>(8.75)</span>
                </h3>
                <p className='item-description'>
                  Bean, cheese, guacamole, fajita mean, sour cream
                </p>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>
              Other Appetizers
            </h3>
            <p className='item-description'> </p>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Queso Ranchero
                  <span className='price fw4 baskerville'>(4.99)</span>
                </h3>
                <span className='price fw4 baskerville' />
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Gordita With Picadillo <br />
                  <p className='item-description'>W/ White cheese & Onions</p>
                  <span className='price fw4 baskerville'>One ($2.50)</span>
                  <br />
                  <span className='price fw4 baskerville'>Two ($4.50)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Three Chicken Flautas
                  <span className='price fw4 baskerville ttn'>(4.99)</span>
                </h3>
                <p className='item-description'>
                  {' '}
                  With guacamole & sour cream{' '}
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Tamale <br />
                  <p className='item-description' />
                  <span className='price fw4 baskerville'>One ($1.00)</span>
                  <br />
                  <span className='price fw4 baskerville'>
                    One Dozen ($14.00)
                  </span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  One lb Barbacoa
                  <span className='price fw4 baskerville ttn'>(9.00)</span>
                </h3>
                <p className='item-description'> Sat & Sun only </p>
              </li>
            </ul>
          </div>

          <div className='bottom' />
        </div>
      </div>
    );
  }
}
export default GridMenu;
