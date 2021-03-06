import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import SimpleCard from '../components/SimpleCard'
import {Redirect} from 'react-router-dom';

class Pickup extends Component {
    render() {
    const {user , orders, total} = this.props
        const pickup = {
            paddingTop: 16,
            height: 560,
            justifyContent: 'center',
            alignItems: 'center',
        }
        return user ? (
            <div>
                <div style={pickup}>
                    <SimpleCard orders={orders}/>
                </div>
                <LabelBottomNavigation />
            </div>
        ) : (
            <Redirect to="/" />
        )
    }
}

export default Pickup;