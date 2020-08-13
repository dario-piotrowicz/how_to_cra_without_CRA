import React, { FunctionComponent } from 'react';
import './webpack-babel-setup.styles.scss';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import webPackIcon from '@iconify/icons-simple-icons/webpack';
import babelIcon from '@iconify/icons-simple-icons/babel';
import CliCommand from '../../components/cli-command/cli-command.component';
import { selectNpm } from '../../redux/settings/settings.selectors';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';
import FilesStructureButton from '../../components/files-structure-button/files-structure-button.compoent';

const babelRcCode = `{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}`;

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

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const webpackInstallsCommand = `${installDevLeadingText} webpack webpack-cli webpack-dev-server`;
  const babelInstallsCommand = `${installDevLeadingText} @babel/core @babel/preset-env @babel/preset-react babel-loader`;

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
        <p>
          First of all we need to install (as dev dependencies) a number of
          packages, for webpack we'll need the <strong>webpack</strong>,{' '}
          <strong>webpack-cli</strong> and
          <strong> webpack-dev-server</strong> packages, those can be installed
          with the following command:
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
          We can start with babel, as it's configuration file is very short and
          simple. All you need to do is creating the <strong>.babelrc</strong>{' '}
          file in your root directory and inside of it indicate the presets
          we've just installed, as follow:
        </p>
        <CodeSnippet code={babelRcCode} lang={CodeSnippetLanguage.JS} />
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
      <div className="files-structure-wrapper">
        <FilesStructureButton
          structure={{
            public: { 'index.html': 'html-file' },
            src: { 'index.js': 'js-file' },
            '.babelrc': 'json-file',
            'webpack.config.js': 'js-file',
          }}
        />
      </div>
    </section>
  );
};

export default WebPackBabelSetupSection;
