import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FaceIcon from '@material-ui/icons/Face';
// import red  from '@material-ui/core/colors/red';

import { Link } from 'react-router-dom';


const styles = {
  root: {
    // background: red[400],
    
    
    // width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'menu',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to="/menu"label="Menu" value="Menu" icon={<LocalDrinkIcon/>} />
        <BottomNavigationAction component={Link} to="/cart"label="Cart" value="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction component={Link} to="/pickup"label="Pickup" value="Pickup" icon={<LocationOnIcon />} />
        <BottomNavigationAction component={Link} to="/mypage"label="Mypage" value="Mypage" icon={<FaceIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);