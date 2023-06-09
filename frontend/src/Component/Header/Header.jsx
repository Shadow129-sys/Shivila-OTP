/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { BsHouse, BsPerson, BsBoxArrowInRight } from 'react-icons/bs';
import {MdOutlineUnfoldMoreDouble} from 'react-icons/md'
import styles from './header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="https://www.freepnglogos.com/uploads/hotel-logo-png/download-building-hotel-clipart-png-33.png" alt="Logo" />
          </div>

          <div className={`${styles['menu-toggle']} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
            <div className={styles.hamburger}></div>
            
          </div>

          <ul className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
          <li>
  <a style={{ textDecoration: 'none' }} href="/register" class="no-underline text-black">
    <BsBoxArrowInRight /> Register/Login
  </a>
</li>
<li>
  <a href="/partner" class="no-underline text-black">
    <BsPerson /> Become a Partner
  </a>
</li>
<li className={styles.dropdown}>
  <a href="#" class="no-underline text-black">
    <MdOutlineUnfoldMoreDouble/>
    More
  </a>
  <div className={styles['dropdown-content']}>
    <a href="#" class="no-underline text-black">Complaints</a>
    <a href="#" class="no-underline text-black">Option 2</a>
  </div>
</li>
<li>
  <a href="/" class="no-underline text-black">
    <BsHouse /> Home
  </a>
</li>
<li>
  <a href="/profile" class="no-underline text-black">
    <BsPerson /> Profile
  </a>
</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
