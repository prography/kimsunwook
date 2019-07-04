import React, { Component } from 'react';
import axios from 'axios'
import data from '../data/menu.json';

import {postMenu} from '../lib/api';

import ScrollableTabsButtonAuto from '../components/ScrollableTabsButtonAuto'
import LabelBottomNavigation from '../components/LabelBottomNavigation'

class Menu extends Component {
    state = {
        menus: [],
    }
    // menu2shoppingList = () => {
    //     // props 전달받기 
    //     const {onCreate} = this.props;
    //     // 상태관리를 위한 부모 컴포넌트의 전송
    //     const { order } = this.state;
    //     onCreate(this.state.order);

    //     //서버에 데이터 전송 
    //     postMenu(order)
        


    // }

    // http://ec2-13-209-76-67.ap-northeast-2.compute.amazonaws.com:8000/menu
    // 서버에서 메뉴 목록 가져오기 
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/menu/`)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
                console.log(menus)
                
            })
            .catch(function(error){
                console.log(error);
            })
    }

    render() {
        const {onCreate} = this.props;
        return (
            <div>
                <ScrollableTabsButtonAuto onCreate={onCreate} menus={this.state.menus}  />
                <LabelBottomNavigation />
            </div>
        );
    }
}

export default Menu;


