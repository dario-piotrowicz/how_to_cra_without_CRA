import React, { FunctionComponent } from 'react';
import './footer.styles.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer id="main-footer">
      <span>Dario Piotrowicz</span>
      <span className="extra">,</span>
      <span>dario.piotrowicz@gmail.com</span>
      <span className="extra">|</span>
      <span>Jul 2020</span>
    </footer>
  );
};

export default Footer;
