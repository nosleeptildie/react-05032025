import React from 'react';
import FooterStyle from './footer.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      {/* get year */}
      <p> React 05-03-2025</p>
    </footer>
  );
};

export default Footer;