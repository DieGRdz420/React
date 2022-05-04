import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = (cartItems) => {
  return (
    <header className='header' >
      <div>
        <h1>
          <Link to="/"  className='logo' >
            MusicShop
          </Link>
        </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to="/"  className='home' >
              Home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup"  className='signup' >
              SignUp
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart"  className='cart' >
              <i className="fas fa-shopping-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header