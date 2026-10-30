import React from 'react';

function Navbar({ totalProducts, totalStock }) {
  return (
    <nav className="navbar">
      <h1>🛒 Product & Inventory Dashboard</h1>
      <div className="navbar-stats">
        <span>Total Products: <strong>{totalProducts}</strong></span>
        <span>Total Stock: <strong>{totalStock}</strong></span>
      </div>
    </nav>
  );
}

export default Navbar;
