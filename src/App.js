import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './routes/Menu'
import Home from './routes/Home'
import KakaoLogin from './routes/KakaoLogin'
import ShoppingList from './routes/ShoppingList'
import Pickup from './routes/Pickup'
import './App.css';
import LabelBottomNavigation from './components/LabelBottomNavigation'
import { postMenu } from '../src/lib/api'

class App extends Component {
  state = {
    auth: undefined,
    order: [],
    unique_id: '선욱'
  };

  handleCreate = (menu, count) => {
    const { order } = this.state;
    this.setState({
      order: order.concat({
        count,
        name: menu.name,
        price: menu.price,
      }),
      price: menu.price * count,
      unique_id: '상은',
    });
    postMenu(this.state);
  };
  
  handleSuccessLogin = (data) => {
    console.log(123, data);
    this.setState(() => ({
      auth: data,
    }));
  };

  render() {
    console.log('앱이 랜더됬을때의 상태', this.state)
    return (
      <div className="App">
        <Router>
          <Route 
            exact 
            path="/" 
            render={() => (
              <KakaoLogin handleSuccessLogin={this.handleSuccessLogin}/>
            )}
          />
          <div>
            <Route 
              path="/menu"
              render={(props) => (<Menu onCreate={this.handleCreate} {...props} />)} 
            />
            <Route 
              path="/cart" 
              render={() => <ShoppingList {...this.state} />} 
            />
            <Route path="/pickup" component={Pickup} />
          </div>
          <LabelBottomNavigation />
        </Router>
      </div>
    );
  }
}

export default App;
