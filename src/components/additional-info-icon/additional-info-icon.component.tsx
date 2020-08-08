import React, { FunctionComponent } from 'react';
import './additional-info-icon.styles.scss';
import Icon from '@iconify/react';
import questionIcon from '@iconify/icons-fa-solid/question-circle';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/light-border.css';

const AdditionalInfoIcon: FunctionComponent = ({ children }) => {
  const content = (
    <div className="additiona-info-content-wrapper">{children}</div>
  );
  return (
    <Tippy
      theme="light-border"
      content={content}
      trigger="click"
      animation="shift-away"
      interactive
    >
      <span className="additional-info-icon">
        <Icon icon={questionIcon} />
      </span>
    </Tippy>
  );
};

export default AdditionalInfoIcon;
