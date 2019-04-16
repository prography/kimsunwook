import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { ListItemSecondaryAction} from '@material-ui/core';
import CustomizedDialogDemo from './CustomizedDialogDemo';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { menus,classes } = props;
  return (
    <div className={classes.root}>
        <List component="nav">
            {menus.map(menu=>{
                return(
                    <ListItem button>
                    <Avatar>
                    <LocalDrinkIcon />
                    </Avatar>
                    <ListItemText primary={menu.name} secondary={parseInt(menu.price)+"원"} />
                    <ListItemSecondaryAction>
                        < CustomizedDialogDemo menu={menu} />   
                    </ListItemSecondaryAction>
                </ListItem>
                )
            })}
        </List>
    </div>

  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);