import React, { FunctionComponent } from 'react';
import './cli-command.styles.scss';

const CliCommand: FunctionComponent<{ command: string }> = ({ command }) => {
  return (
    <p className="cli-command">
      <span className="prompt">$ </span>
      {command}
    </p>
  );
};

export default CliCommand;
