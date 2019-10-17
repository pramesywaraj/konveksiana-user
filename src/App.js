import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './Helpers';
import { PrivateRoute } from './Components/PrivateRoute';

// Components
import './App.css';
import Homepage from './Components/homepage/homepage';
import Orderpage from './Components/orderpage/orderpage';
import Cart from './Components/cart/cart';
import { Login } from './Components/Login/Login';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Order } from './Components/Order/Order';
import { Product } from './Components/product/product';
import ProductDetail from './Components/product/productdetail/productdetail';

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
          <PrivateRoute exact path='/products' component={Product}/>          
          <PrivateRoute exact path='/products/product-detail' component={ProductDetail}/>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
