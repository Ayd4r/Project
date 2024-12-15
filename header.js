import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartLength }) => {
  return (
    <header className="App-header">
      <div className="logo-div">
        <img src="https://static.vecteezy.com/system/resources/previews/022/498/229/non_2x/mercedes-benz-logos-popular-brands-of-cars-isolated-on-transparent-background-3d-render-free-png.png" className="logo" ></img>
        <h1 className="title">BenzDriver</h1>
      </div>
      
      
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
    </header>
  );
};

export default Header;
