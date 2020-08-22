import React, { FunctionComponent } from 'react';
import './css-setup.styles.scss';
import Icon from '@iconify/react';
import cssIcon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-simple-icons/sass';
import { useSelector } from 'react-redux';
import {
  selectSass,
  selectNpm,
  selectBabelrc,
} from '../../redux/settings/settings.selectors';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';
import CliCommand from '../../components/cli-command/cli-command.component';
import FilesStructureButton from '../../components/files-structure-button/files-structure-button.compoent';
import { FilesStructureObject } from '../../redux/files-structure/files-structure.types';

const appJsCode = `import React from 'react';

const App = () => {
  return (
    <h1>Hello World!</h1>
  );
};

export default App;`;

const updatedIndexJsCode = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById('root'));`;

const appCssCode = `h1 {
   color: red;
}`;

const appJSimportAppCssCode = `import './app.css';`;

const CssSetupSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);
  const sass = useSelector(selectSass);

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const styleLoadersInstallCommand = `${installDevLeadingText} css-loader ${
    sass ? 'sass sass-loader ' : ''
  } style-loader`;

  const webpackConfigStylesRulesCode = `{
  test: /\.${sass ? '(sass|scss|css)' : 'css'}$/,
  use: ['style-loader', 'css-loader'${sass ? ", 'sass-loader'" : ''}]
}`;

  const babelrc = useSelector(selectBabelrc);

  const filesStructure: FilesStructureObject = {
    public: { 'index.html': 'html-file' },
    src: {
      'index.js': 'js-file',
      'app.js': 'js-file',
      [`app.${sass ? 's' : ''}css`]: `${sass ? 's' : ''}css-file`,
    },
    '.babelrc': 'json-file',
    'webpack.config.js': 'js-file',
  };
  if (!babelrc) delete filesStructure['.babelrc'];

  return (
    <section id="css-setup" className="section">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon css">
            <Icon icon={cssIcon} />
          </span>
          <h2 className="title">CSS{sass ? ' & Sass' : ''} Setup</h2>
          <span className={`icon ${sass ? 'sass' : 'css'}`}>
            <Icon icon={sass ? sassIcon : cssIcon} />
          </span>
        </div>
        <p>
          Naturally we also need a way to style our application, you could
          create css files in the
          <em>public</em> directory and import them in your <em>index.html </em>
          file, but that would be quite cumbesome to say the least.
          <br />
          So what we really want is to setup webpack so that we can easily
          import css {sass ? 'and sass ' : ''}
          files easily from within our javascript code, and that's what we're
          going to do in this section.
        </p>
        <p>
          The <em>index.js</em> file's purpose should be that of providing a
          starting point for our application and should not care about much
          more, so we shouldn't assigning a style file to it.
          <br />
          So before proceeding let's do a minor refactoring and move the
          rendering portion of our application in its own file.
        </p>
        <p>
          To do so simply create an <strong>app.js</strong> file in the
          <em>src</em> directory, move the rendering in it as a component and
          import that one from <em>index.js</em>.
        </p>
        <p>
          Based on the basic <em>index.js</em> file I used in the first section
          I would define the app file as such:
        </p>
        <CodeSnippet code={appJsCode} lang={CodeSnippetLanguage.JS} />
        <p>And then update the index file as follows:</p>
        <CodeSnippet code={updatedIndexJsCode} lang={CodeSnippetLanguage.JS} />
        <p>
          After making the changes make sure everything still works as it did
          before.
        </p>
        <p>
          What we now want to do is to style our application by assigning a css
          {sass ? ' (or sass/scss) ' : ' '} file to the app file and making sure
          that we can apply styles to our application.
        </p>
        <p>
          In our code for example we may want to see the <em>h1</em> text red,
          so in the <em>src</em> directory let's create the following
          <strong> app.css</strong> {sass ? '(or /.scss) ' : ''} file:
        </p>
        <CodeSnippet code={appCssCode} lang={CodeSnippetLanguage.CSS} />
        <p>
          To make use of the newly created css file we need to import it, so in
          the <em>app.js</em> imports section let's add a new import for the css
          file:
        </p>
        <CodeSnippet
          code={appJSimportAppCssCode}
          lang={CodeSnippetLanguage.JS}
        />
        <p>
          At this point you can notice that webpack is no longer be able to
          compile our files, this is because it does not know how to handle our
          new import.
        </p>
        <p>
          So we need to configure it so that it can handle css
          {sass ? ' (sass/scss) ' : ' '} imports.
        </p>
        <p>
          Firstly we need to install some loader packages which webpack will use
          to handle the style imports, we can do that by running:
        </p>
        <CliCommand command={styleLoadersInstallCommand} />
        <p>
          Then we can update the <em>webpack.config.js</em> by instructing it on
          how to handle css {sass ? 'and sass/scss' : ''} files, to do so, in
          the rules array add the following entry:
        </p>
        <CodeSnippet
          code={webpackConfigStylesRulesCode}
          lang={CodeSnippetLanguage.JS}
        />
        <p>
          Now if you try running your dev server again you should see it working
          again and the <em>h1</em> text should now be red, precisely as we
          wanted.
        </p>
      </div>
      <div className="files-structure-button-wrapper">
        <FilesStructureButton structure={filesStructure} />
      </div>
    </section>
  );
};

export default CssSetupSection;
