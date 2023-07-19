import React from 'react';
import Navigation from './components/Navigation';
import Product from "./components/Product";
import Home from "./components/Home";
import Manage from "./components/Manage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/product" element={<Product/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
    </BrowserRouter>
  );
}
export default App;