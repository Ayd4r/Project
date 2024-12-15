
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home/home';
import Cart from './components/pages/cart/cart';
import About from './components/pages/aboutus/aboutus';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
