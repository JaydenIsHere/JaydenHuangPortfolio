import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleToggle = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false);
  };

  return (
    <header className='header bg-blue'>
      <div className='nav-wapper'>
        <a href='/#home' className='logo md'>
          Portfolio
        </a>

        <div className='menu-icon' onClick={handleToggle}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <li>
              <a href='/#home' onClick={handleClose}>
                Home
              </a>
            </li>
            <li>
              <a href='/#about' onClick={handleClose}>
                About
              </a>
            </li>
            <li>
              <a href='/#project' onClick={handleClose}>
                Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
