import React, { FunctionComponent } from 'react';
import './run-app.styles.scss';
import CliCommand from '../../components/cli-command/cli-command.component';
import { useSelector } from 'react-redux';
import { selectNpm } from '../../redux/settings/settings.selectors';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';

const packageJsonScriptsCode = `"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production",
  "start-lan": "webpack-dev-server --mode development --host 0.0.0.0"
}`;

const RunAppSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  const nodeRunLeadingText = `${npm ? 'npm run env' : 'yarn'}`;
  const startDevServerCommand = `${nodeRunLeadingText} webpack-dev-server`;
  const buildAppCommand = `${nodeRunLeadingText} webpack`;

  const startCommand = `${npm ? 'npm' : 'yarn'} start`;
  const buildCommand = `${npm ? 'npm run' : 'yarn'} build`;
  const startLanCommand = `${npm ? 'npm run' : 'yarn'} start-lan`;

  return (
    <section id="run-app" className="section">
      <div className="centering-container">
        <div className="title-container">
          <h2 className="title">Run the App</h2>
        </div>
        <p>
          Now that we've set up both webpack and babel we're ready to start our
          application, you should be able to start the application by running
          the following command:
        </p>
        <CliCommand command={startDevServerCommand} />
        <p>
          The command should succeed and tell you where the project is running
          at ( by default should be <em>http://localhost:8080</em> ).
        </p>
        <p>
          The abovementioned command is the one you will use while developing
          you application as it spans up a local server with your compiled
          application. All with hot reloading so that as soon as you make some
          change the application will reload automatically.
        </p>
        <p>
          When it's time to deploy you will also need to build your application
          so that you can put your webserver with the static files needed to run
          the application, you can build your application by running:
        </p>
        <CliCommand command={buildAppCommand} />
        <p>
          For convenience you should add specific scripts to your
          <strong> package.json</strong> file so that you have easier commands
          to run to start the dev server and build the application.
        </p>
        <p>
          Your can add the following scripts section to your package.json file
        </p>
        <CodeSnippet
          code={packageJsonScriptsCode}
          lang={CodeSnippetLanguage.JS}
        />
        <p>
          The first one simply starts the dev server whilst also opening your
          default browser to the correct location (and sets the mode to
          development so that if your coded would need it, it could know that
          this it's running in a development environment), the second one builds
          the application (making sure that it's mode is production) and the
          last one is an optional extra one which I allows you to run the dev
          server and also making it so that the application can be accessed from
          any device in your lan (though in this case you cannot use the{' '}
          <em>--open</em> option). This can be useful for example to access your
          application with your phone and test its responsiveness.
        </p>
        <p>
          With these scripts in place you can start your application locally by
          simply running:
        </p>
        <CliCommand command={startCommand} />
        <p>Build it with:</p>
        <CliCommand command={buildCommand} />
        <p>And running it, shared in your LAN with:</p>
        <CliCommand command={startLanCommand} />
      </div>
    </section>
  );
};

export default RunAppSection;
