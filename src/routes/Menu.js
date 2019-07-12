import React, { Component } from 'react';
import axios from 'axios'
import data from '../data/menu.json';

import { postMenu } from '../lib/api';

import ScrollableTabsButtonAuto from '../components/ScrollableTabsButtonAuto'
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import {Redirect} from 'react-router-dom'

class Menu extends Component {
  state = {
    menus: [],
  };


  // http://ec2-13-209-76-67.ap-northeast-2.compute.amazonaws.com:8000/menu
  // 서버에서 메뉴 목록 가져오기 
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/menu/`)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
        console.log(menus);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { user, onCreate } = this.props;
    
    return user ? (
      <div>
        <ScrollableTabsButtonAuto
          menus={this.state.menus} 
          onCreate={onCreate} 
        />
        <LabelBottomNavigation />
      </div>
    ) : (
      <Redirect to="/" />
    )
  }
}

export default Menu;


