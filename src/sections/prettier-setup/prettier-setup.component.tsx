import React, { FunctionComponent } from 'react';
import './prettier-setup.styles.scss';
import { Icon } from '@iconify/react';
import prettierIcon from '@iconify/icons-simple-icons/prettier';
import CliCommand from '../../components/cli-command/cli-command.component';
import { useSelector } from 'react-redux';
import { selectNpm } from '../../redux/settings/settings.selectors';
import CodeSnippet, {
  CodeSnippetLanguage,
} from '../../components/code-snippet/code-snippet.component';
import FilesStructureButton from '../../components/files-structure-button/files-structure-button.component';
import { SectionAbsoluteIndex } from '../../redux/files-structure/files-structure.types';

const prettierConfigCode = `{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}`;

const formatScriptCode = `"format": "prettier --write 'src/**/*.(js|jsx)'"`;

const PrettierSetupSection: FunctionComponent = () => {
  const npm = useSelector(selectNpm);

  const installDevLeadingText = `${
    npm ? 'npm install --save-dev' : 'yarn add --dev'
  }`;

  const installCommand = `${installDevLeadingText} prettier`;

  const nodeRunLeadingText = `${npm ? 'npm run env' : 'yarn'}`;

  const simplePrettierRunCommand = `${nodeRunLeadingText} prettier src/**/*`;
  const prettierRunCommand = `${nodeRunLeadingText} prettier --write src/**/*`;

  const formatCommand = `${npm ? 'npm run' : 'yarn'} format`;

  return (
    <section id="prettier-setup" className="section">
      <div className="centering-container">
        <div className="title-container">
          <span className="icon">
            <Icon icon={prettierIcon} />
          </span>
          <h2 className="title">Prettier Setup</h2>
          <span className="icon">
            <Icon icon={prettierIcon} />
          </span>
        </div>
        <p>Here we only need to install a single dev dependency package:</p>
        <CliCommand command={installCommand} />
        <p>
          And create a configuration file in the root directory called
          <strong> .prettierrc</strong> containing the prettier rules we want in
          a single json object like:
        </p>
        <CodeSnippet code={prettierConfigCode} lang={CodeSnippetLanguage.JS} />
        <p>
          There are different options you can use in the configuration file so
          that you can make Prettier format your code exactly the way you like,
          all the available options are available in the{' '}
          simplePrettierRunCommand .
        </p>
        <p>
          With this Prettier's configuration is pretty much done. But by itself
          it will not do anything to your code.
        </p>
        <p>In order to use prettier you need to execute it directly with:</p>
        <CliCommand command={simplePrettierRunCommand} />
        <p>
          With this command you ask Prettier to format all the code present in
          any file in any directory under the <em>src</em> one and to print it
          on the screen (naturally you can change the latter part of the command
          in order to format only specific files ).
        </p>
        <p>
          Naturally the command above will not be very useful in most situations
          but you can extend it so that it actually updates the files instead of
          simple printing their formatted version on the screen.
          <br />
          To do so you just need to add the <em>write</em> option:
        </p>
        <CliCommand command={prettierRunCommand} />
        <p>
          But even better, you can add a script in your <em>package.json</em>{' '}
          file that calls Prettier for you, for example I use:
        </p>
        <CodeSnippet code={formatScriptCode} lang={CodeSnippetLanguage.JS} />
        <p>
          This script does what we just did in the previous command, plus it
          filters the filest to format to only those with the <em>.js</em> and{' '}
          <em>.jsx</em> extentions.
        </p>
        <p>
          With such a script you can format all your javascript code by simply
          running:
        </p>
        <CliCommand command={formatCommand} />
        <p>
          Anyway the most convenient way to use Prettier, is to simply request
          your IDE to format your code according to your options whenever you
          save a file.
          <br />
          I'd imagine various IDEs should have this feature, the one I use is
          VSCode and it does have a very nice Prettier extension you can
          install. Once installed you can go to your settings and request to
          format your code on save.
        </p>
        <div className="img-container">
          <img
            src="/assets/images/PrettierVSCode.png"
            alt="VSCode ESLint Extension"
          />
        </div>
      </div>
      <div className="files-structure-button-wrapper">
        <FilesStructureButton sectionIndex={SectionAbsoluteIndex.PRETTIER} />
      </div>
    </section>
  );
};

export default PrettierSetupSection;
