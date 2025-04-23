import React from "react";
import { AuthButton } from "../Auth-button/auth-button";
import { ToggleTheme } from "../Toggle-theme/toggle-theme";

import headerStyle from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <nav className={headerStyle.header}>
          <a href="/">На главную</a>
          <ToggleTheme />
          <AuthButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
