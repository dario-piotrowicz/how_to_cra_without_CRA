import React, { FunctionComponent } from 'react';
import './settings.styles.scss';
import {
  selectNpm,
  selectYarn,
  selectSass,
  selectEsLint,
  selectPrettier,
} from '../../redux/settings/settings.selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNpm,
  setYarn,
  setSass,
  setEsLint,
  setPrettier,
} from '../../redux/settings/settings.actions';
import AdditionalInfoIcon from '../../components/additional-info-icon/additional-info-icon.component';

const Settings: FunctionComponent = () => {
  const npm = useSelector(selectNpm);
  const yarn = useSelector(selectYarn);
  const sass = useSelector(selectSass);
  const esLint = useSelector(selectEsLint);
  const prettier = useSelector(selectPrettier);

  const dispatch = useDispatch();

  return (
    <section id="settings" className="centering-container">
      <h2 className="title">Options</h2>
      <p>
        Before we start, here you can select and choose your
        requirements/preferences for your project:
      </p>
      <div className="options">
        <div className="switch-toggle-wrapper">
          <div className="switch-toggle">
            <button
              className={`${npm ? 'selected' : ''}`}
              onClick={() => {
                if (!npm) {
                  dispatch(setNpm(true));
                  dispatch(setYarn(false));
                }
              }}
            >
              npm
            </button>
            <button
              className={`${yarn ? 'selected' : ''}`}
              onClick={() => {
                if (!yarn) {
                  dispatch(setYarn(true));
                  dispatch(setNpm(false));
                }
              }}
            >
              yarn
            </button>
          </div>
          <AdditionalInfoIcon>
            <p>For handling packages a package manager is needed.</p>
            <p>
              The most commonly used one is the official
              <em> Node Package Manager</em> aka
              <em> npm</em>, alternatively there is also another available
              package manager called <em> yarn</em>.
            </p>
            <p>
              Their basic usage is pretty similar and this guide does not prefer
              one over the other.
            </p>
          </AdditionalInfoIcon>
        </div>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={sass}
              onChange={() => dispatch(setSass(!sass))}
            />
            <span>Sass</span>
          </label>
          <AdditionalInfoIcon>
            <p>
              Sass (which stands for <em>Syntactically Awesome Style Sheets</em>
              ) is a css prerocessor language which basically extends css by
              adding things like nested selectors, functions, etc...
            </p>
            <p>
              If you add it in your project you can then write stlyes using sass
              and those will be converted into css at compilation time.
            </p>
            <p>
              For more info you can visit the
              <br />
              <a href="https://sass-lang.com/documentation" target="_blank">
                official documentation page
              </a>
              .
            </p>
          </AdditionalInfoIcon>
        </div>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={esLint}
              onChange={() => dispatch(setEsLint(!esLint))}
            />
            <span>esLint</span>
          </label>
          <AdditionalInfoIcon>
            <p>
              <em>ESLint</em> is a tool that analyses your javascript code and
              helps you in making the code clean and avoiding bugs.
            </p>
            <p>
              By adding ESLint to your project you can then set specific rules,
              based on those ESLint will providing warning during the project's
              compilation or even failing the compilation altogether depending
              on your settings.
            </p>
            <p>
              For more info you can visit the
              <br />
              <a
                href="https://eslint.org/docs/user-guide/getting-started"
                target="_blank"
              >
                official documentation page
              </a>
              .
            </p>
          </AdditionalInfoIcon>
        </div>
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={prettier}
              onChange={() => dispatch(setPrettier(!prettier))}
            />
            <span>Prettier</span>
          </label>
          <AdditionalInfoIcon>
            <p>
              <em>Prettier</em> is a tool that allows you to format your
              javascript code.
            </p>
            <p>
              Basically you can use it to make sure that your code follows a
              certain style (which you specify in the configuration file).
            </p>
            <p>
              This does not help in preventing bugs or improving the
              functioanlity of your code in any way, but can help you in making
              your code more readable, consistent and maintainable.
            </p>
            <p>
              For more info you can visit the
              <br />
              <a href="https://prettier.io/docs/en/index.html" target="_blank">
                official documentation page
              </a>
              .
            </p>
          </AdditionalInfoIcon>
        </div>
      </div>
    </section>
  );
};

export default Settings;
