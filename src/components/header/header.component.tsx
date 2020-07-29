import React, { FunctionComponent } from 'react';
import './header.styles.scss';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';

const repoUrl = 'https://github.com/dario-piotrowicz/how_to_cra_without_CRA';

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
          <a href={repoUrl} target="_blank" className="icon">
            <Icon icon={githubIcon} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
