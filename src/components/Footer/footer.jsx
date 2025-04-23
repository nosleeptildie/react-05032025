import React from "react";
import footerStyle from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      {/* get year */}
      <p> React 05-03-2025</p>
    </footer>
  );
};

export default Footer;
