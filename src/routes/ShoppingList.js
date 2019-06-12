import React, { Component } from 'react';
import FolderList from '../components/FolderList';

class ShoppingList extends Component {
    shoppingList2pickup = () =>{

    }

    render() {
        const {order} = this.props;
        console.log('장바구니에 전달된 주문',order);
        return (
            <div>
                {/* <FolderList onCreate={onCreate} category="Coffee" menus={menus.filter(menu=>menu.category === 'Coffee')}/> */}
                <FolderList />
            </div>
        );
    }
}

export default ShoppingList;