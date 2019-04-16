import React, { Component } from 'react';
import axios from 'axios'
import data from '../data/menu.json';

import {postMenu} from '../lib/api';

import ScrollableTabsButtonAuto from '../components/ScrollableTabsButtonAuto'

class Menu extends Component {
    state = {
        order: [
            {
            unique_id: '11',
            created_at: '2019-04-04T03:56:11.416216Z',
            price: '3000.00',
            pickuptime: '1',
            ordernumber: '3'
            }
        ],
        menus: []
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

    // 서버에서 메뉴 목록 가져오기 
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/menu/`)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
                
            })
            .catch(function(error){
                console.log(error);
            })
        // const menus = data;
        // this.setState({menus});

    }

    render() {
        const {onCreate} = this.props;
        return (
            <div>
                <ScrollableTabsButtonAuto onCreate={onCreate} menus={this.state.menus}  />
                {/* <ul>
                    {this.state.menus.map(menu => <li key={menu.name}>{menu.name}</li>)}
                </ul>
                <button type="submit" onClick={this.menu2shoppingList}>담기</button> */}
            </div>
        );
    }
}

export default Menu;


