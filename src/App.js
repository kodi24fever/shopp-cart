import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

//import global css
import './index.css';

//import views
import Home from './views/home/home';

import Products from './components/products/products';

export default function App() {
  
    return (
      <React.Fragment>
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<Products/>}/>
            </Routes>
          </BrowserRouter>
      </React.Fragment>
    )
}
