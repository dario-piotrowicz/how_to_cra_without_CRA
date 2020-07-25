import React, { FunctionComponent } from 'react';
import './css-setup.styles.scss';
import Icon from '@iconify/react';
import cssIcon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-simple-icons/sass';
import { useSelector } from 'react-redux';
import { selectSass } from '../../redux/settings/settings.selectors';

const CssSetupSection: FunctionComponent = () => {
  const sass = useSelector(selectSass);

  return (
    <section id="css-setup">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon css">
            <Icon icon={cssIcon} />
          </span>
          <h2 className="title">CSS{sass ? '/Sass' : ''} Setup</h2>
          <span className={`icon ${sass ? 'sass' : 'css'}`}>
            <Icon icon={sass ? sassIcon : cssIcon} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CssSetupSection;
