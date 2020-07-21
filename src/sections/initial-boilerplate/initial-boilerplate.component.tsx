import React, { FunctionComponent } from 'react';
import './initial-boilerplate.styles.scss';
import { useSelector } from 'react-redux';
import { selectNpm } from '../../redux/settings/settings.selectors';
import CliCommand from '../../components/cli-command/cli-command.component';
import CodeSnippet from '../../components/code-snippet/code-snippet.component';

const indexHtmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APP TITLE</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>`;

const indexJsCode = `import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
  return (
    <h1>Hello World!</h1>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));`;

const InitialBoilerplateSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  const initCommand = npm ? 'npm init' : 'yarn init';
  const reactInstallCommand = `${
    npm ? 'npm install' : 'yarn add'
  } react react-dom`;

  return (
    <section id="initial-boilerplate">
      <div className="centering-container">
        <h2 className="title">Creating an initial boilerplate</h2>
        <p>
          To start creating our project we will first need a very basic react
          application to use as a framework which we can use to test our
          settings, so let's start by creating a very basic application.
        </p>
        <p>
          Naturally our project will need to be node based so let's initialize a
          new project using {npm ? 'npm ' : 'yarn '} by accessing our project's
          root directory and executing the following CLI command:
        </p>
        <CliCommand command={initCommand} />
        <p>
          The command will require you to choose some settings, you can just
          leave them all as default or choose the ones you prefer.
        </p>
        <p>
          Now that we have our node project set up we can start by installing
          the besic react packages:
        </p>
        <CliCommand command={reactInstallCommand} />
        <p>
          Then we proceed by creating two directories (inside the projet's root
          directory):
          <ul>
            <li>
              <strong>public</strong>, which will contain our static and built
              files
            </li>
            <li>
              <strong>src</strong>, which will contain our source files
            </li>
          </ul>
        </p>
        <p>
          Inside the <strong>public</strong> directory we want to create a
          standard <strong>index.html</strong> used in any react project, it
          needs to have a &lt;div&gt; with an id of <strong>root</strong> (in
          which we will inject our react application) and it needs to include
          the <strong>bundle.js</strong> script (which webapck will create for
          us).
        </p>
        <p>The basic one I use is:</p>
        <CodeSnippet code={indexHtmlCode} />
        <p>
          Next inside the <strong>src</strong> directory we need an
          <strong> index.js</strong> which implements a very basic react
          application and injects it in out root div, something like:
        </p>
        <CodeSnippet code={indexJsCode} />
        <p>
          With this we have our basic react application ready to be executed,
          naturally now there is no way to actually execute the application,
          that's exaclty what this guide is about and what we are going to do
          next!
        </p>
      </div>
    </section>
  );
};

export default InitialBoilerplateSection;
