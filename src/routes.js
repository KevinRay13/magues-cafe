import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Location from './components/location/Location';
import Menu from './components/menu/Menu';
import ScrollToTop from './components/nav/ScrollToTop';

export default (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={Contact} exact path='/contact' />
    <Route component={About} exact path='/about' />
    <Route component={Location} path='/location' />
    <Route component={Menu} path='/menu' />
  </Switch>
);
