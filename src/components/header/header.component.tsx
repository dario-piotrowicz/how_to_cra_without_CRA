import React, { FunctionComponent } from 'react';
import './header.styles.scss';
import { Icon } from '@iconify/react';
import mozillafirefoxIcon from '@iconify/icons-simple-icons/github';

const Header: FunctionComponent = () => {
  return (
    <header id="main-header">
      <div className="centering-container">
        <h1 className="title">
          How To Create a React App
          <br />
          Without Using
          <br />
          Create-React-App
        </h1>
        <div className="github-icon-container">
          <span className="icon">
            <Icon icon={mozillafirefoxIcon} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
