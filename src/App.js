import React from 'react';

import './App.css';

import Navbar from './components/nav/Navbar';
// import Routes from './routes';
// import { Switch, Route } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import ScrollToTop from './components/nav/ScrollToTop';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Location from './components/location/Location';
import Menu from './components/menu/Menu';

const history = createHistory();

ReactGA.initialize('UA-142288691-1');
history.listen((location, action) => {
  window.scrollTo(0, 0);
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      {/* <ScrollToTop> */}
      <div className='App'>
        <nav>
          <Navbar />

          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Contact} exact path='/contact' />
            <Route component={About} exact path='/about' />
            <Route component={Location} path='/location' />
            <Route component={Menu} path='/menu' />
          </Switch>
        </nav>
      </div>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
