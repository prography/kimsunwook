import React, { Component } from 'react';

class ShoppingList extends Component {
    shoppingList2pickup = () =>{

    }

    render() {
        const {order} = this.props;
        console.log('장바구니에 전달된 주문',order);
        return (
            <div>
                <div>장바구니</div>
                <button onClick={this.shoppingList2pickup}>결제</button>
            </div>
        );
    }
}

export default ShoppingList;