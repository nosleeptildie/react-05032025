import React from 'react';
import { AuthButton } from '../Auth-button/auth-button';
import { ToggleTheme } from '../Toggle-theme/toggle-theme';

import HeaderStyle from './header.module.css';


const Header = () => {
  return (
    <header>
      <div>
        <nav className={HeaderStyle.header}>
          <a href='/'>На главную</a>
          <ToggleTheme />
          <AuthButton />
        </nav>       
      </div>
    </header>
  );
};

export default Header;