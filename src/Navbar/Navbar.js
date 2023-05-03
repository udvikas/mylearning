import React from 'react'
import './Navbar.css';
import CartButton from './CartButton';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Shoes Platform</h3>
      </div>
      <i className="fa fa-solid fa-shoe-prints"></i>
      <i className="fa fa-solid fa-shoe-prints"></i>
      <i className="fa fa-solid fa-shoe-prints"></i>

      <div>
        <CartButton/>
      </div>
    </nav>
  )
}

export default Navbar
