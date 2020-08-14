import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Order from "./component/Order"
import Mall from "./component/Mall"
import AddGoods from "./component/AddGoods"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div className="top-nav">
                <NavLink className="top-link" to="/">商城</NavLink>
                <NavLink className="top-link" to="/order">订单</NavLink>
                <NavLink className="top-link" to="/addGoods">添加商品</NavLink>
            </div>
            <Switch>
              <Route exact path="/order" component={Order}/>
              <Route exact path="/addGoods" component={AddGoods}/>
              <Route exact path="/" component={Mall}/>
              <Route path="/*" component={Mall}/>
            </Switch>
          </Router>
          <footer>TW Mail @2018 Created by ForCheng</footer>

      </div>
    );
  }
}

export default App;
