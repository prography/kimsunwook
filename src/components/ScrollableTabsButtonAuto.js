import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import FolderList from './FolderList'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 500,
    // width: '100%',

    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };



  render() {
    const { classes,menus,onCreate } = this.props;
    const { value } = this.state;

 

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="coffee" />
            <Tab label="latte" />
            <Tab label="ice blended" />
            <Tab label="juice" />
            <Tab label="bubble tea" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><FolderList onCreate={onCreate} category="Coffee" menus={menus.filter(menu=>menu.category === 'Coffee')}/></TabContainer>}
        {value === 1 && <TabContainer><FolderList onCreate={onCreate} category="Latte" menus={menus.filter(menu=>menu.category === 'Latte')}/></TabContainer>}
        {value === 2 && <TabContainer><FolderList onCreate={onCreate} category="Ice Blendid" menus={menus.filter(menu=>menu.category === 'Ice Blended')}/></TabContainer>}
        {value === 3 && <TabContainer><FolderList onCreate={onCreate} category="Ade" menus={menus.filter(menu=>menu.category === 'Ade')}/></TabContainer>}
        {value === 4 && <TabContainer><FolderList onCreate={onCreate} category="Bubble Tea" menus={menus.filter(menu=>menu.category === 'Bubble Tea')} /></TabContainer>}


      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);