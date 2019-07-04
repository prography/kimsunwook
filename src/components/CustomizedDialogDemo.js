import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'


import Grid from '@material-ui/core/Grid';
import SimpleSnackbar from './SimpleSnackbar';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    count: 1,
    hotice: 'ice',
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMinusClick = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  handleAddClick = () => {
    this.setState({
      count: ++this.state.count,
    });
  };



  render() {
    const {menu,onCreate} = this.props;
    return (
      <div>
        <IconButton arial-label="Add" onClick={this.handleClickOpen}>
          <AddCircleIcon/>
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {menu.name}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
            <Grid container spacing={24}>
            
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={3}>
              <Button  onClick={()=>{this.setState({
                hotice:'hot'
              })}} color="secondary">HOT</Button>
              </Grid>
              <Grid item xs={3}>
              <Button  temp='ice' onClick={()=>{this.setState({
                hotice:'ice'
              })}} color="primary">ICE</Button>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
            </Typography>
            <Typography gutterBottom>
            주문목록 {this.state.hotice}{menu.name}:{this.state.count}개
            </Typography>
            <Typography gutterBottom>
            총액 W{menu.price*this.state.count}
            </Typography>
          </DialogContent>
          <DialogActions>
          <IconButton arial-label="Minus" onClick={this.handleMinusClick}>
            <RemoveCircleIcon/>
          </IconButton>
          <Typography gutterBottom>
            {this.state.count}
            </Typography>
          <IconButton arial-label="Add" onClick={this.handleAddClick}>
            <AddCircleIcon/>
          </IconButton>
          </DialogActions>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.handleClose} >
              바로결제 
            </Button>
            {/* <Button variant="contained" color="primary" onClick={this.handleClose} >
              장바구니  
            </Button> */}
            <SimpleSnackbar hotice={this.state.hotice} count={this.state.count} menu={menu} onCreate={onCreate}/>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;