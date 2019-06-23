import React from 'react';
import './gridMenu.scss';

class GridMenu extends React.Component {
  render() {
    return (
      <div className='GridMenu'>
        <body className='pa3 pa4-ns pa5-l container'>
          <div className=''>
            <div className=''>
              <h2 className=''>Lunch & Dinner</h2>
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
                <p className='item-description'>fruit and yogurt</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  BREAKFAST TACOS{' '}
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>
                  3 corn tortillas, eggs, cheddar, chorizo, salsa verde and
                  queso fresco
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  BREAKFAST BURRITO{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  scrambled eggs, cheddar, chorizo, black beans, flour tortilla
                  and spicy green salsa on the side
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  LOCALLY SMOKED TROUT{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  herbed cream cheese, red onion, capers on a bagel
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  BACON, EGG & CHEESE ON BISCUIT{' '}
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>phoenician potatoes</p>
                <p className='item-description i'>
                  *served with phoenician potatoes, & toast
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  FULL PHOENICIA BREAKFAST*{' '}
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>
                  two eggs any way, sausage and bacon, baked beans, tomatoes
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  eggs any way*{' '}
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>bacon or sausage</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  phoenicia diner omelet*{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  sautéed greens, mushrooms, goat cheese
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  omelet your way*{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description i'>choose up to 3 items</p>
                <p className='item-description'>
                  swiss, cheddar, feta, spinach, tomato, onion, peppers, bacon,
                  sausage, mushrooms, or ham
                </p>
                <p className='item-description i'>each additional item (2)</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  western omelet*{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>ham, peppers and onions</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  the benedicts*{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  served with phoenician potatoes
                </p>
                <p className='item-description i'>
                  california (9) canadian bacon (9) florentine (8) locally
                  smoked salmon (10)
                </p>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Skillets</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  HUEVOS RANCHEROS SKILLET{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  refried beans, corn tortilla, salsa verde, cheddar cheese and
                  two sunny side up eggs
                </p>
                <p className='item-description i'>*served with toast</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  DUCK AND GRITS SKILLET*{' '}
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>
                  duck confit, shiitake mushrooms, cheddar cheese grits and
                  poached egg
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  WILD HIVE FARM POLENTA*{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  sautéed greens and two sunny side up eggs
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  FARMER’S SKILLET*{' '}
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>
                  bacon, phoenician potatoes, cheese and two sunny side up eggs
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  HOUSE CURED CORNED BEEF HASH*{' '}
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>
                  grass fed beef, onion, peppers, potatoes and two sunny side up
                  eggs
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  ARNOLD BENNETT SKILLET*{' '}
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <p className='item-description'>
                  locally smoked trout, parmesan cheese, crème fraîche scrambled
                  eggs
                </p>
              </li>
            </ul>
          </div>
          <div className='lunch--header pt3 pb3 bdb mb3'>
            <div />
            <div>
              <h2 className='cubano f2 tracked green pb2 tc'>lunch</h2>
              <p className='din ttu tracked tc f6-l'>SERVED FROM 11AM-5PM</p>
            </div>
            <aside className='script f3 f4-l dn db-bp2 pt3 tr'>
              We serve Mimosas, Bloody Marys, & Beer
            </aside>
          </div>
          <div className='items--container lunch--container'>
            <h3 className='cubano f3 tracked green pt2'>Sandwiches</h3>
            <p className='item-description i pt2 pb3'>
              served with house fries or mixed greens
            </p>
            <ul className=''>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  Classic BLT <span className='price fw4 baskerville'>(8)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  "The Mitchell"{' '}
                  <span className='price fw4 baskerville'>(8)</span>
                </h3>
                <p className='item-description'>
                  pole caught tuna, lettuce and tomato
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  GRASS FED ROAST BEEF SANDWICH{' '}
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>
                  cheddar, caramelized onions, watercress, house made
                  horseradish mayo on ciabatta
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  CBLT <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>
                  fried crab cake, bacon, lettuce & tomato on our brioche roll
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  CLASSIC TURKEY CLUB{' '}
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>
                  house roasted turkey, bacon, lettuce and tomato
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  HOUSE MADE REUBEN{' '}
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>house cured corned beef</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  VEGGIE QUESADILLA{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  grilled portabella, zucchini, roasted peppers, red onion,
                  fresh spinach, cheddar, pico de gallo and guacamole
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  FRIED CHICKEN & WAFFLE SANDWICH{' '}
                  <span className='price fw4 baskerville'>(12)</span>
                </h3>
                <p className='item-description'>
                  free range chicken breast, house made waffle, pickled veggies,
                  sriracha mayo
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  GRASS FED BURGER{' '}
                  <span className='price fw4 baskerville'>(11)</span>
                </h3>
                <p className='item-description'>lettuce and tomato</p>
                <p className='item-description i'>add cheese (1) bacon (2)</p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  GRILLED CHEDDAR & TOMATO *{' '}
                  <span className='price fw4 baskerville'>(7)</span>
                </h3>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  HOUSE MADE VEGGIE BURGER{' '}
                  <span className='price fw4 baskerville'>(9)</span>
                </h3>
                <p className='item-description'>
                  wild rice, sweet potato, eggplant, black lentils, red onion{' '}
                  <span className='i'>
                    add cheese <span className='fs-normal'>(2)</span>
                  </span>
                </p>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Soups</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  TORTILLA SOUP{' '}
                  <span className='price fw4 baskerville ttn'>
                    <span className='i'>bowl</span> (7){' '}
                    <span className='i'>cup</span> (4)
                  </span>
                </h3>
                <p className='item-description'>
                  free range chicken, avocado, tortilla chips
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  TODAY'S VEGGIE SOUP*{' '}
                  <span className='price fw4 baskerville ttn'>
                    <span className='i'>bowl</span> (6){' '}
                    <span className='i'>cup</span> (3.5)
                  </span>
                </h3>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>Salad</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  house salad{' '}
                  <span className='price fw4 baskerville'>(10)</span>
                </h3>
                <span className='price fw4 baskerville' />
                <p className='item-description'>
                  <span className='price fw4 baskerville'>
                    baby kale, pickled onion, fresh pears, pumpkin seed crusted
                    goat cheese, lemon vinaigrette
                  </span>
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <span className='price fw4 baskerville' />
                <h3 className='din ttu tracked f6'>
                  SMOKED SALMON NIÇOISE SALAD{' '}
                  <span className='price fw4 baskerville ttn'>(12)</span>
                </h3>
                <p className='item-description'>
                  hookline smoked salmon, hardboiled eggs, tomatoes, olives,
                  anchovies, green beans with lemon vinaigrette
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  QUINOA SALAD{' '}
                  <span className='price fw4 baskerville ttn'>(8)</span>
                </h3>
                <p className='item-description'>
                  mixed greens, cucumber, carrot, red onion, avocado and lemon
                  vinaigrette
                </p>
                <p className='item-description i'>
                  add seared local chicken breast{' '}
                  <span className='fs-normal'>(4)</span>
                </p>
              </li>
            </ul>
            <h3 className='cubano f3 tracked green pt2 pb3'>platters</h3>
            <ul>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  meatloaf <span className='price fw4 baskerville'>(13)</span>
                </h3>
                <span className='price fw4 baskerville' />
                <p className='item-description'>
                  <span className='price fw4 baskerville'>
                    mashed potatoes and marinara, sautéed greens
                  </span>
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  CHICKEN & SAUSAGE GUMBO{' '}
                  <span className='price fw4 baskerville ttn'>(12)</span>
                </h3>
                <p className='item-description'>
                  free range chicken, andouille sausage and basmati rice
                </p>
              </li>
              <li className='pb3 pt1 measure'>
                <h3 className='din ttu tracked f6'>
                  GRASS FED BEEF SHORT RIBS & POLENTA{' '}
                  <span className='price fw4 baskerville ttn'>(14)</span>
                </h3>
                <p className='item-description'>
                  braised ribs, wild hive farm polenta, seasonal veggies
                </p>
              </li>
            </ul>
            <div className='providers tc pv3 bdb bdt bdr bdl mt3'>
              <h3 className='script f3 mb0 pt3'>Check out our</h3>
              <h3 className='cubano f3 tracked green pb3 nt1'>
                Local providers
              </h3>
              <h3 className='script f3'>above the counter</h3>
            </div>
          </div>
          {/* <div className='items--container sides'>
            <h2 className='script f2 green tc pt5 pt2-bp3'>Sides</h2>
            <ul className='sides--container'>
              <li className='pb3 measure'>
                <p className='item-description dib'>
                  bowl of steel cut oatmeal with fruit
                </p>
                <p className='item-description dib'>(5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>phoenician potatoes</p>
                <p className='item-description dib'>(3)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>bacon</p>
                <p className='item-description dib'>(4)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>
                  house made pork or turkey sausage patty
                </p>
                <p className='item-description dib'>(4)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>cheddar grits</p>
                <p className='item-description dib'>(3)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>
                  arugula salad with lemon vinaigrette
                </p>
                <p className='item-description dib'>(5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>seasonal vegetables</p>
                <p className='item-description dib'>(4)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>fresh fruit</p>
                <p className='item-description dib'>(5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>
                  beer battered onion rings
                </p>
                <p className='item-description dib'>(5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>house cut fries</p>
                <p className='item-description dib'>(5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>maple syrup</p>
                <p className='item-description dib'>(1.5)</p>
              </li>
              <li className='pb3 measure'>
                <p className='item-description dib'>mac & cheese</p>
                <p className='item-description dib'>(4)</p>
              </li>
            </ul>
          </div> */}
          <div className='bottom' />
        </body>
      </div>
    );
  }
}
export default GridMenu;
