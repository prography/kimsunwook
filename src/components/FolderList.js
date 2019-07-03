import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { ListItemSecondaryAction } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Logo from '../assets/Logo.png'

// FFEB01




const styles = theme => ({
    root: {
        width: '100%',
        height: 502,
        backgroundColor: theme.palette.background.paper,
    },
});

function FolderList(props) {
    const { classes, orders } = props;
    const totalPrice = orders.reduce((accum, curOrder) => {
        accum += curOrder.count * curOrder.price
        return accum
    }, 0)
    return (
        <div>
            <List className={classes.root}>
                {orders.map(order => {
                    return (
                        <div>
                            <ListItem>
                                <Avatar alt="구입한 커피" src={Logo} />
                                <ListItemText primary={`${order.name}`} secondary={`${order.price}`} />
                                <IconButton arial-label="Minus" >
                                    <RemoveCircleIcon />
                                </IconButton>
                                <Typography gutterBottom>
                                    {`${order.count}`}
                                </Typography>
                                <IconButton arial-label="Add" >
                                    <AddCircleIcon />
                                </IconButton>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
            </List>
            <ListItem>
                <AttachMoneyIcon />
                {/* orders안의 order들의 총합  */}
                <ListItemText primary={`총액 ${totalPrice}원`} />
                <Button variant="contained" color="primary">
                    카페로 결제하기
                </Button>
            </ListItem>
        </div>
    );
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);