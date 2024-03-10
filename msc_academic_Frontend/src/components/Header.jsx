import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Msc Academic Program Performance System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/help">Help</Link>
        <Link to="/login">Login</Link>
        <Link to="/Blog">Blog</Link>
        
      </nav>
    </header>
  );
}

export default Header;
