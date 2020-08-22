import React, { FunctionComponent, useState } from 'react';
import './webpack-babel-setup.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import webPackIcon from '@iconify/icons-simple-icons/webpack';
import babelIcon from '@iconify/icons-simple-icons/babel';
import CliCommand from '../../components/cli-command/cli-command.component';
import {
  selectNpm,
  selectBabelrc,
} from '../../redux/settings/settings.selectors';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';
import FilesStructureButton from '../../components/files-structure-button/files-structure-button.compoent';
import AdditionalInfoIcon from '../../components/additional-info-icon/additional-info-icon.component';
import { setBabelrc } from '../../redux/settings/settings.actions';
import { SectionAbsoluteIndex } from '../../redux/files-structure/files-structure.types';

const babelRcCode = `{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}`;

const packageJsonBabelPropCode = `"babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
`;

const webpackConfigCode = `const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
`;

const WebPackBabelSetupSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);
  const babelrc = useSelector(selectBabelrc);

  const dispatch = useDispatch();

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const webpackInstallsCommand = `${installDevLeadingText} webpack webpack-cli webpack-dev-server`;
  const babelInstallsCommand = `${installDevLeadingText} @babel/core @babel/preset-env @babel/preset-react babel-loader`;

  const [showWebPackBabelBasicInfo, setShowWebPackBabelBasicInfo] = useState(
    false
  );

  return (
    <section id="webpack-babel-setup" className="section">
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
        <div className="webpack-babel-basic-info-container">
          <button
            className="btn"
            onClick={() =>
              setShowWebPackBabelBasicInfo(!showWebPackBabelBasicInfo)
            }
          >
            What are Webpack and Babel? And what do we need them for?
          </button>
          <div
            className={`webpack-babel-basic-info ${
              showWebPackBabelBasicInfo ? 'show' : ''
            }`}
          >
            <p>
              We are writing our React app using JSX{' '}
              <em>
                (JSX is not an actually a React requirement but practically
                almost all React applications use it)
              </em>
              .<br />
              JSX is not something browsers can understand and execute, so
              before we can give our files to a browser for execution we need to
              convert them into plain javascript, which can then be interpreted
              and executed normally, in order to do that we use <em>Babel</em>.
            </p>
            <p>
              <strong>Babel</strong> is a tool (technically a transcompiler)
              that converts specific type of code into simple javascript. It can
              convert JSX to plain javascript or even modern javascript code
              into an older version of javascript so that it can be executed by
              older browsers.
            </p>
            <p>
              Once our code is ready it needs to be included into our html page,
              this can be rather problematic as our project can include multiple
              javascript files and browsers don't implement a way for javascript
              files to import one another. So the solution is to just
              <em> bundle</em> all our javascript files into a single one and
              make sure the html page imports that, this is done via
              <em> Webpack</em>
            </p>
            <p>
              <strong>Webpack</strong> is a module bundler for javascript
              applications, (very) basically it builds a single javascript file
              for your entire application which can then be imported by the html
              page. Not only webpack is capable of bundling all our javascript
              code but it can also bundle our css files so that we don't need to
              import them in the html file either.
            </p>
          </div>
        </div>
        <p>
          First of all we need to install (as dev dependencies) a number of
          packages, for webpack we'll need the <strong>webpack</strong>,
          <strong> webpack-cli</strong> and
          <strong> webpack-dev-server</strong> packages
          <AdditionalInfoIcon>
            <ul className="webpack-packaged-additional-info">
              <li>
                <strong> webpack </strong> is the main package which implements
                the bundler
              </li>
              <li>
                <strong> webpack-cli </strong> is the cli interface which you
                can use to control webpack (we don't actually use the cli in
                this guide so you may skip this package if you want)
              </li>
              <li>
                <strong> webpack-dev-server </strong> is a development server
                which allows us to run the applicaton on our local machine and
                it also reloads the application as soon as you modify some of
                its files
              </li>
            </ul>
          </AdditionalInfoIcon>
          , those can be installed with the following command:
        </p>
        <CliCommand command={webpackInstallsCommand} />
        <p>
          Next we need the <strong>@babel/core</strong>,
          <strong> @babel/preset-env</strong>,
          <strong> @babel/preset-react</strong> and
          <strong> babel-loader</strong> babel packages, those can be installed
          with:
        </p>
        <CliCommand command={babelInstallsCommand} />
        <p>
          After installing the packages we are ready to create the configuration
          files which will enable us to use webpack and babel for our project.
        </p>
        <p>
          We start with babel, it configuration is very short and simple. All we
          need to do is configuring what presets needs to be applied when
          handling our code.
        </p>
        <p>
          This can be done by either creating a configuration file named
          <em> .babelrc</em> or by modifying the <em>package.json</em> file.
        </p>
        <p>Which option do you prefer?</p>
        <div className="switch-toggle-wrapper">
          <div className="switch-toggle">
            <button
              className={`${babelrc ? 'selected' : ''}`}
              disabled={babelrc}
              onClick={() => dispatch(setBabelrc(true))}
            >
              .babelrc
            </button>
            <button
              className={`${!babelrc ? 'selected' : ''}`}
              disabled={!babelrc}
              onClick={() => dispatch(setBabelrc(false))}
            >
              package.json
            </button>
          </div>
        </div>
        {/* it's not a beautiful solution, but here I am using display none/block instead of a normal
        js expression for toggling the divs, this is because otherwise the code snippet would not highlight
        the code (I guess it must be a bug in the Prism library or something) */}
        <div style={{ display: babelrc ? 'block' : 'none' }}>
          <p>
            All you need to do is creating the <strong>.babelrc </strong>
            file in your root directory and inside of it indicate the presets
            we've just installed, as follow:
          </p>
          <CodeSnippet code={babelRcCode} lang={CodeSnippetLanguage.JS} />
        </div>
        <div style={{ display: !babelrc ? 'block' : 'none' }}>
          <p>
            All you need to do is adding the <strong>babel</strong> property in
            your <em>package.json</em> file in the following way:
          </p>
          <CodeSnippet
            code={packageJsonBabelPropCode}
            lang={CodeSnippetLanguage.JS}
          />
        </div>
        <p>
          And then we move to webpack's configuration, again all you need is a
          single file in the root directory, this time named
          <strong> webpack.config.js</strong>.
        </p>
        <p>
          This file does configuration file contains much much more that babel's
          one, the code you will need here is:
        </p>
        <CodeSnippet code={webpackConfigCode} lang={CodeSnippetLanguage.JS} />
        <p>
          What the (nodejs) code does is to export a module containing your
          webpack configuration, which from a high level point of view consist
          in the javascript entry point from which our application starts, where
          the compiled code should be saved, how the development server (used to
          run locally the application) should run, how the different types of
          files should be handled (using the <em>babel-loader</em> we've
          installed for javascript files) and how to resolve imports of specific
          extensions (this one last configuration is totally optional but it
          allows you to import javascript modules in your code without the need
          to provide their extension of their file).
        </p>
      </div>
      <div className="files-structure-button-wrapper">
        <FilesStructureButton
          sectionIndex={SectionAbsoluteIndex.WEBPACK_BABEL}
        />
      </div>
    </section>
  );
};

export default WebPackBabelSetupSection;
