import React from 'react';

const Header = () => (
  <header className="main-header-container flex-start">
    <div className="log-wrapper">
      <span className="logo">Bookstore CMS</span>
    </div>
    <nav className="main-nav-bar">
      <ul className="link-list">
        <li className="link"><a href="#2">Books</a></li>
        <li className="link"><a href="#2">Categories</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
