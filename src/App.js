import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './routes/Menu'
import Home from './routes/Home'
import ShoppingList from './routes/ShoppingList'
import Pickup from './routes/Pickup'

import './App.css';
import LabelBottomNavigation from './components/LabelBottomNavigation'

class App extends Component {
  state={
    order:[

    ]
  }

  handleCreate = data => {
    const {order} = this.state;
    this.setState({
      order : order.concat({...data})
    })
  }

  render() {
    console.log('앱이 랜더됬을때의 상태',this.state)
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
          <div> 
            <Route  path="/menu" render={(props)=>(<Menu onCreate={this.handleCreate} {...props}/>)}/>
            <Route  path="/shoppinglist" render={()=><ShoppingList {...this.state} />}/>
            <Route  path="/pickup" component={Pickup}/>
          </div>
          <LabelBottomNavigation />
          </Router>
      </div>
    );
  }
}

export default App;
