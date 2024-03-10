import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your custom CSS file for styling

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Web Analytics Dashboard</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;
