import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ImUser } from 'react-icons/im';

const links = [
  { id: 1, to: '/', name: 'Books' },
  { id: 2, to: '/categories', name: 'Categories' },
];
const Header = () => (
  <header className="main-header-container flex-between">
    <div className="left-container flex-start">
      <div className="log-wrapper">
        <Link to="/" className="logo">Bookstore CMS</Link>
      </div>
      <nav className="main-nav-bar">
        <ul className="link-list">
          {
            links.map(({ id, to, name }) => (
              <li key={id} className="link"><Link to={to}>{name}</Link></li>
            ))
          }
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
