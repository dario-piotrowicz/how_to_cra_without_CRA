import React, { FunctionComponent } from 'react';
import './initial-boilerplate.styles.scss';
import { useSelector } from 'react-redux';
import { selectNpm } from '../../redux/settings/settings.selectors';
import CliCommand from '../../components/cli-command/cli-command.component';

const InitialBoilerplateSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  return (
    <section id="initial-boilerplate">
      <div className="centering-container">
        <h2 className="title">Creating an initial boilerplate</h2>
        <p>
          {' '}
          To start creating our project we will first need a very basic react
          application to use as a framework which we can use to test our
          settings, so let's start by creating a very basic application.
        </p>
        <p>
          Naturally our project will need to be node based so let's initialize a
          new project using {npm ? 'npm ' : 'yarn '} by accessing our project's
          root directory and executing the following CLI command:
        </p>
        <CliCommand command={npm ? 'npm init' : 'yarn init'} />
      </div>
    </section>
  );
};

export default InitialBoilerplateSection;
