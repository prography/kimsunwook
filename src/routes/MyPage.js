import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'


class MyPage extends Component {
    render() {
        // const MyPage = {
        //     paddingTop: 16,
        //     height: 560,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }
        return (
            <div>
                {/* <div style={MyPage}>
                </div> */}
                <LabelBottomNavigation />
            </div>
        );
    }
}

export default MyPage;