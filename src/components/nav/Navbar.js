import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  // componentDidUpdate() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    return (
      <div>
        <div className='navbar-container'>
          <div className='logo-title'>
            <img src='magueslogo.png' alt='' className='logo' />
            <h1 className='linkmain'>Mague's Café</h1>
          </div>

          <div className='navbar-links-container'>
            <ul className='navbar-links'>
              <li className=''>
                <Link to='/' className='link' id='link'>
                  Home
                </Link>
              </li>
              <li className=''>
                <Link to='/contact' className='link' id='link'>
                  Contact
                </Link>
              </li>
              <li className=''>
                <Link to='/location' className='link' id='link'>
                  Location
                </Link>
              </li>
              <li className=''>
                <Link to='/menu' className='link' id='link'>
                  Menu
                </Link>
              </li>
              {/* <li className=''>
                <Link to='/about' className='link' id='link'>
                  About
                </Link>
              </li> */}
            </ul>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
