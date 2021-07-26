import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage'
import './index.css';
import ShopPage from './pages/shop/shop.component'



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path ='/shop' component={ShopPage} />
        </Switch>  
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

