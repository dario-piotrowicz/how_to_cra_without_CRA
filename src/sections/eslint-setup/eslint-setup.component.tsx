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
import FilesStructureButton from '../../components/files-structure-button/files-structure-button.compoent';
import { SectionAbsoluteIndex } from '../../redux/files-structure/files-structure.types';

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
  use: ['babel-loader', 'eslint-loader']
},`;

const EsLintSetupSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const installCommand = `${installDevLeadingText} babel-eslint eslint eslint-config-react eslint-loader eslint-plugin-react`;

  return (
    <section id="eslint-setup" className="section">
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
        <p>We need to start by installing some dev dependency packages:</p>
        <CliCommand command={installCommand} />
        <p>
          Next in the project's root directory let's create a new
          <strong> .eslintrc</strong> file and populate it with the various
          configurations required for example like this:
        </p>
        <CodeSnippet code={eslintrcCode} lang={CodeSnippetLanguage.JS} />
        <p>
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
        </p>
        <ul>
          <li>"off" or 0 : to turn the rule off</li>
          <li>"warn" or 1 : to turn the rule on as a warning</li>
          <li>"error" or 2 : to turn the rule on as an error</li>
        </ul>
        <p>
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
        </p>
        <CodeSnippet
          code={addEsLintLoaderToWebpackConfigCode}
          lang={CodeSnippetLanguage.JS}
        />
        <p>
          Now whenever you run your dev server or try to build your application
          you will see warnings or straight out compilation errors accordingly
          to the rules you've set in the ESLint configuration file.
        </p>
        <p>
          It is also worth mentioning that if you're using a popular IDE chances
          are that some sort of ESLint extension is available to it.
          <br />
          For example I use VSCode, for it there is a very good ESLint extension
          which provides you with warnings directly in your code editor whenever
          some of your code does not respect some of the rules you specified in
          your configuration.
        </p>
        <div className="img-container">
          <img
            src="/assets/images/ESLintVSCode.png"
            alt="VSCode ESLint Extension"
          />
        </div>
      </div>
      <div className="files-structure-button-wrapper">
        <FilesStructureButton sectionIndex={SectionAbsoluteIndex.ESLINT} />
      </div>
    </section>
  );
};

export default EsLintSetupSection;
