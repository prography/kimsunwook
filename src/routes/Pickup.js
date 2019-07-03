import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import SimpleCard from '../components/SimpleCard'

class Pickup extends Component {
    render() {
        const pickup = {
            paddingTop: 16,
            height: 560,
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <div>
                <div style={pickup}>
                    <SimpleCard />
                </div>
                <LabelBottomNavigation />
            </div>
        );
    }
}

export default Pickup;