import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetai';

function App() {
    return (
        <div className="app">
          <Router>
              <Header />
                <Switch>
                    <Route exact path="/"  component={ProductListing} /> 
                    <Route path="/product/:productId" exact component={ProductDetail} />
                    <Route>Page 404 not found</Route>
                </Switch>
          </Router>
        </div>
    )
}

export default App
