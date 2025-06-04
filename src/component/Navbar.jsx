import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='navbar-restoran-satu'>
      <div className='navbar-logo-restoran-satu'>
        <span className='burger-restoran-satu'>🍔</span>
        <span className='brand-restoran-satu'>Logo</span>
      </div>

      <ul className={`navbar-links-restoran-satu ${isMenuOpen ? 'active' : ''}`}>
        <li className='active'>Home</li>
        <li>Profil</li>
        <li>Produk</li>
        <li>Galeryt</li>
        <li>Contac</li>
        <li className='mobile-only-restoran-satu'>
          <button className='my-kitchen-btn-restoran-satu'>My Kitchen</button>
        </li>
      </ul>

      <button className='my-kitchen-btn-restoran-satu desktop-only-restoran-satu'>My Kitchen</button>

      <div className='hamburger-icon-restoran-satu' onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
