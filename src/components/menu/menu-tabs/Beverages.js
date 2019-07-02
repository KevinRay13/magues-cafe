import React from 'react';
import './gridMenu.scss';

class Beverages extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <div className='pa3 pa4-ns pa5-l '>
          <div className='lunch--header pt3 pb3 bdb mb3'>
            <div className=''>
              <h2 className='LDHeader'>Beverages</h2>
              <p />
            </div>
          </div>
          <div className='items--container breakfast--container'>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Coffee
                  <span className='price fw4 baskerville ttn'>
                    <span className='i' /> (1.85) <br />
                  </span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Iced Tea
                  <span className='price fw4 baskerville'>(1.85)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Hot Tea
                  <span className='price fw4 baskerville'>(1.50)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Sodas
                  <span className='price fw4 baskerville'>(1.50)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Juices
                  <span className='price fw4 baskerville'>(1.50)</span>
                </h3>
                <p className='item-description'>Orange & Apple, No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <div>
                  <h3 className='din ttu tracked f6'>
                    Milk
                    <span className='price fw4 baskerville'>(1.50)</span>
                  </h3>
                  <p className='item-description'>No Refills</p>
                </div>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Chocolate Milk
                  <span className='price fw4 baskerville'>(6.25)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Aguas Frescas
                  <span className='price fw4 baskerville'>(2.00)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Hot Chocolate
                  <span className='price fw4 baskerville'>(1.50)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Mexican Sodas Jarritos
                  <span className='price fw4 baskerville'>(1.50)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Mexican Coke 1/2 Litre
                  <span className='price fw4 baskerville'>(2.75)</span>
                </h3>
                <p className='item-description'>No Refills</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Frozen Margaritas
                  <span className='price fw4 baskerville'>(3.99)</span>
                </h3>
                <p className='item-description'>Wine</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beer
                  <span className='price fw4 baskerville'>(2.75)</span>
                </h3>
                <p className='item-description'>Domestic</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beer
                  <span className='price fw4 baskerville'>(3.00)</span>
                </h3>
                <p className='item-description'>Imported</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Michelada
                  <span className='price fw4 baskerville'>(4.75)</span>
                </h3>
                <p className='item-description' />
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Beerita
                  <span className='price fw4 baskerville'>(6.50)</span>
                </h3>
                <p className='item-description' />
              </li>
            </ul>
          </div>
        </div>
        <div className='bottom' />
      </div>
    );
  }
}
export default Beverages;
