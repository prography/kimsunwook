import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
// import {postMenu} from '../lib/api';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SimpleSnackbar extends React.Component {
  //   menu2shoppingList = () => {
  //     // props 전달받기
  //     const {onCreate} = this.props;
  //     // 상태관리를 위한 부모 컴포넌트의 전송
  //     const { order } = this.state;
  //     onCreate(this.state.order);

  //     //서버에 데이터 전송
  //     postMenu(order)
  //     }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // this.setState({ open: false });
  };

  render() {
    const { isOpen } = this.props;
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          pointerEvents: "none"
        }}
      >
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">장바구니에 추가되었습니다.</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              확인
            </Button>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
