import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Sickle Cell Care</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/daily-management">Daily Management</Link></li>
        <li><Link to="/health-metrics">Health Metrics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
