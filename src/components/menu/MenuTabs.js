import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GridMenu from './menu-tabs/GridMenu';
import Breakfast from './menu-tabs/Breakfast';
import Tacos from './menu-tabs/Tacos';
import Beverages from './menu-tabs/Beverages';
import Appetizers from './menu-tabs/Appetizers';

function TabContainer({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ width: '100vw' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root} id='tabsContainer'>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='on'
        >
          <Tab label='Breakfast' />
          <Tab label='Lunch & Dinner' />
          <Tab label='Tacos' />
          <Tab label='Appetizers' />
          <Tab label='Beverages' />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <Breakfast />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <GridMenu />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Tacos />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Appetizers />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <Beverages />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
