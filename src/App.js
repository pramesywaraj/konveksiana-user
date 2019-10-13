import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import './App.css';
import Homepage from './Components/homepage/homepage';
import Orderpage from './Components/orderpage/orderpage';
import Cart from './Components/cart/cart';
import { Login } from './Components/Login/Login';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Order } from './Components/Order/Order';
import { history } from './Helpers';
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/order" component={Orderpage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/' render={() => (<Redirect to="/dashboard" />)} />             */}
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <PrivateRoute exact path='/user-order' component={Order}/>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
