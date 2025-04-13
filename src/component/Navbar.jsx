import React, { useState } from 'react';
import '../style/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <span className='burger'>🍔</span>
        <span className='brand'>Logo</span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li className='active'>Home</li>
        <li>Profil</li>
        <li>Produk</li>
        <li>Galeryt</li>
        <li>Contac</li>
        <li className='mobile-only'>
          <button className='my-kitchen-btn'>My Kitchen</button>
        </li>
      </ul>

      <button className='my-kitchen-btn desktop-only'>My Kitchen</button>

      <div className='hamburger-icon' onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
