import React, { FunctionComponent } from 'react';
import './prettier-setup.styles.scss';
import { Icon } from '@iconify/react';
import prettierIcon from '@iconify/icons-simple-icons/prettier';

const PrettierSetupSection: FunctionComponent = () => {
  return (
    <section id="prettier-setup">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon">
            <Icon icon={prettierIcon} />
          </span>
          <h2 className="title">Prettier Setup</h2>
          <span className="icon">
            <Icon icon={prettierIcon} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PrettierSetupSection;
