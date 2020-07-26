import React, { FunctionComponent } from 'react';
import './eslint-setup.styles.scss';
import { useSelector } from 'react-redux';
import { selectNpm } from '../../redux/settings/settings.selectors';
import { Icon } from '@iconify/react';
import webPackIcon from '@iconify/icons-simple-icons/eslint';
import CliCommand from '../../components/cli-command/cli-command.component';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';

const eslintrcCode = `{
  "parser": "babel-eslint",
  "extends": "react",
  "env": {
    "browser": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "indent": "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
    "react/jsx-wrap-multilines": "off"
  }
}
`;

const addEsLintLoaderToWebpackConfigCode = `{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader', 'eslint-loader'],
},`;

const EsLintSetupSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const installCommand = `${installDevLeadingText}  babel-eslint eslint eslint-config-react eslint-loader eslint-plugin-react`;

  return (
    <section id="eslint-setup">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon">
            <Icon icon={webPackIcon} />
          </span>
          <h2 className="title">EsLint Setup</h2>
          <span className="icon">
            <Icon icon={webPackIcon} />
          </span>
        </div>
        <p>
          We need to start by installing some dev dependency packages:
          <CliCommand command={installCommand} />
        </p>
        <p>
          Next in the project's root directory let's create a new
          <strong> .eslintrc</strong> file and populate it with the various
          configurations required for example like this:
          <CodeSnippet code={eslintrcCode} lang={CodeSnippetLanguage.JS} />
          The first four enties specify general configurations like that our
          code is written in react and meant to be run in the browser. They also
          specify that we want to extend the standard ESLint rules specificed
          for react.
        </p>
        <p>
          Then the last entry, <em>"rules"</em> specifies the various rules
          esLint should follow (or not ) when cheking your code.
        </p>
        <p>
          The simples way to set a rule is to add en entry in the
          <em> rules </em> object, with the field's name being the rule name and
          the value one of the following:
          <ul>
            <li>"off" or 0 : to turn the rule off</li>
            <li>"warn" or 1 : to turn the rule on as a warning</li>
            <li>"error" or 2 : to turn the rule on as an error</li>
          </ul>
          All the available rules can be found in the{' '}
          <a href="https://eslint.org/docs/rules" target="_blank">
            ESLint official documentation
          </a>
          .
        </p>
        <p>
          After setting the configurations all we need to do is to ask webpack
          to run the ESLint checks when compiling our code, to do so we just
          need to add the <em>eslint-loader</em> in the js rule in the
          <em> webpack.config.js</em> file as follows:
          <CodeSnippet
            code={addEsLintLoaderToWebpackConfigCode}
            lang={CodeSnippetLanguage.JS}
          />
        </p>
      </div>
    </section>
  );
};

export default EsLintSetupSection;
