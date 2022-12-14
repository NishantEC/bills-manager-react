import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='Nav-logo'>
        <span>Bills Manager</span>
      </Link>
      <div className="menu-items">
      <Link to="/" className='menu-item'>All Bills</Link>
      <Link to="/createBill" className='menu-item'>createBill</Link>
      <Link to="/chart" className='menu-item'>Chart</Link>
      </div>
    </nav>
  )
}

export default Navbar
