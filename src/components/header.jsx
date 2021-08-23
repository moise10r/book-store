import React from 'react';
import { IconContext } from 'react-icons';
import { ImUser } from 'react-icons/im';

const Header = () => (
  <header className="main-header-container flex-between">
    <div className="left-container flex-start">
      <div className="log-wrapper">
        <span className="logo">Bookstore CMS</span>
      </div>
      <nav className="main-nav-bar">
        <ul className="link-list">
          <li className="link"><a href="#2">Books</a></li>
          <li className="link"><a href="#2">Categories</a></li>
        </ul>
      </nav>
    </div>
    <div className="auth">
      <button type="button">
        <IconContext.Provider value={{ className: 'auth-icon' }}>
          <ImUser />
        </IconContext.Provider>
      </button>
    </div>
  </header>
);

export default Header;
