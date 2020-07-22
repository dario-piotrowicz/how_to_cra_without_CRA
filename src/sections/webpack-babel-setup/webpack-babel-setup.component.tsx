import React, { FunctionComponent } from 'react';
import './webpack-babel-setup.styles.scss';
import { Icon } from '@iconify/react';
import webPackIcon from '@iconify/icons-simple-icons/webpack';
import babelIcon from '@iconify/icons-simple-icons/babel';

const WebPackBabelSetupSection: FunctionComponent = () => {
  return (
    <section id="webpack-babel-setup">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon webpack">
            <Icon icon={webPackIcon} />
          </span>
          <h2 className="title">WebPack &amp; Babel Setup</h2>
          <span className="icon babel">
            <Icon icon={babelIcon} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WebPackBabelSetupSection;
