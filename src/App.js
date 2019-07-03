import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect,
  Route,
} from 'react-router-dom';

import Menu from './routes/Menu'
import Home from './routes/Home'
import KakaoLogin from './routes/KakaoLogin'
import ShoppingList from './routes/ShoppingList'
import Pickup from './routes/Pickup'
import './App.css';
import LabelBottomNavigation from './components/LabelBottomNavigation'
import { postMenu, postToken } from '../src/lib/api'

class App extends Component {
  state = {
    auth: undefined,
    orders: [],
    unique_id: '선욱'
  };

  handleCreate = (menu, count) => {
    const { orders } = this.state;
    this.setState({
      orders: orders.concat({
        count,
        name: menu.name,
        price: menu.price,
      }),
      price: menu.price * count,
      unique_id: '상은',
    });
    // postMenu(this.state);
  };
  
  handleSuccessLogin = (auth) => {
    console.log(123, auth);
    this.setState(() => ({
      auth,
    }));
    // postToken(auth)
  };

  render() {
    console.log('App render(), state: %o', this.state);
    const { auth } = this.state;

    return (
      <div className="App">
        <Router>
          
          <Route 
            exact 
            path="/" 
            render={() => {
              return auth === undefined 
                ? <KakaoLogin handleSuccessLogin={this.handleSuccessLogin}/>
                : <Redirect to="/menu" />
            }}
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
        </Router>
      </div>
    );
  }
}

export default App;
