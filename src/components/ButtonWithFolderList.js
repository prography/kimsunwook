import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { ListItemSecondaryAction } from '@material-ui/core';
import CustomizedDialogDemo from './CustomizedDialogDemo';
import Divider from '@material-ui/core/Divider';
import Americano from '../assets/Americano.png'
import Latte from '../assets/Latte.png'

const styles = theme => ({  
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
});

function ButtonWithFolderList(props) {
  const { menus, classes, onCreate } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {menus.map((menu,idx) => {
          return (
            <ListItem button>
              <Avatar alt="coffee Image" src={idx%2 === 1 ? Latte : Americano} />
              <ListItemText primary={menu.name} secondary={parseInt(menu.price) + "원"} />
              <ListItemSecondaryAction>
              < CustomizedDialogDemo menu={menu} onCreate={onCreate} />   
              </ListItemSecondaryAction>
            </ListItem>

          )
        })}
      </List>
    </div>

  );
}

ButtonWithFolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonWithFolderList);