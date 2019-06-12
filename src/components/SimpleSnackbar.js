import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
// import {postMenu} from '../lib/api';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };
  
//   menu2shoppingList = () => {
//     // props 전달받기 
//     const {onCreate} = this.props;
//     // 상태관리를 위한 부모 컴포넌트의 전송
//     const { order } = this.state;
//     onCreate(this.state.order);

//     //서버에 데이터 전송 
//     postMenu(order)
//     }

  handleClick = () => {
    const {onCreate,menu,count} = this.props;
    this.setState({ open: true });
    onCreate(menu,count)
    // app.js 로 데이터 보내기 
    // postMenu()
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });

  };

  render() {
    return (
      <div>
        <Button  variant="contained" color="primary" onClick={this.handleClick}>장바구니</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">장바구니에 추가되었습니다.</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              확인
            </Button>,
            // <IconButton
            //   key="close"
            //   aria-label="Close"
            //   color="inherit"
            //   className={classes.close}
            //   onClick={this.handleClose}
            // >
            //   <CloseIcon />
            // </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);