import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <List component="nav">
    {/* map으로 렌더할 부분, state를 ListItemText와 addCircleIcon으로 연결될 Dialog에 전달해야함. */}
      <ListItem button>
        <Avatar>
          <LocalDrinkIcon />
        </Avatar>
        <ListItemText primary="Ice imericano" secondary="HOT 2700 , ICE 3000" />
        <ListItemSecondaryAction>
            <IconButton arial-label="Add">
                <AddCircleIcon/>
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <Avatar>
        <LocalDrinkIcon />
        </Avatar>
        <ListItemText primary="Espresso" secondary="HOT 2700 , ICE 3000" />
        <ListItemSecondaryAction>
            <IconButton arial-label="Add">
                <AddCircleIcon/>
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button>
        <Avatar>
        <LocalDrinkIcon />
        </Avatar>
        <ListItemText primary="Cold Brew" secondary="HOT 2700 , ICE 3000" />
        <ListItemSecondaryAction>
            <IconButton arial-label="Add">
                <AddCircleIcon/>
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
    </div>

  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);