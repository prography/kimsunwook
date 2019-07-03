import React, { Component } from 'react';
import FolderList from '../components/FolderList';
import LabelBottomNavigation from '../components/LabelBottomNavigation'

class ShoppingList extends Component {
    shoppingList2pickup = () =>{
        
    }

    render() {
        const {orders} = this.props;
        const shoppinglist = {
            // display:'flex',
        }
        console.log('장바구니에 전달된 주문',orders);
        return (
            <div style={shoppinglist}>
                {/* <FolderList onCreate={onCreate} category="Coffee" menus={menus.filter(menu=>menu.category === 'Coffee')}/> */}
                <FolderList orders={orders}/>
                <LabelBottomNavigation />

            </div>
        );
    }
}

export default ShoppingList;