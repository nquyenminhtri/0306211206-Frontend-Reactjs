import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail/ProductDetail';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cart from './Cart/Cart';
class App extends Component {
    
    render(){
        return(
            <Router>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>
            </Router>
        )
    }
}
export default App;

