import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { ListItemSecondaryAction } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'




const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
});

function FolderList(props) {
    const { classes } = props;
    return (
        <List className={classes.root}>
            <ListItem>
                <Avatar>
                    <LocalDrinkIcon />
                </Avatar>
                <ListItemText primary="주문한 커피" secondary="커피의 가격" />
                    <IconButton arial-label="Minus" >
                        <RemoveCircleIcon />
                    </IconButton>
                    <Typography gutterBottom>
                        1
                        {/* {this.state.count} */}
                    </Typography>
                    <IconButton arial-label="Add" >
                        <AddCircleIcon />
                    </IconButton>
            </ListItem>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </List>
    );
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);