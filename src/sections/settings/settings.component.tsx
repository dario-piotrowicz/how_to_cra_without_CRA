import React, { FunctionComponent } from 'react';
import './settings.styles.scss';
import {
  selectNpm,
  selectYarn,
  selectEsLint,
  selectPrettier,
} from '../../redux/settings/settings.selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNpm,
  setYarn,
  setEsLint,
  setPrettier,
} from '../../redux/settings/settings.actions';

const Settings: FunctionComponent = () => {
  const npm = useSelector(selectNpm);
  const yarn = useSelector(selectYarn);
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
        <label>
          <input
            type="checkbox"
            checked={esLint}
            onClick={() => dispatch(setEsLint(!esLint))}
          />
          <span>esLint</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={prettier}
            onClick={() => dispatch(setPrettier(!prettier))}
          />
          <span>Prettier</span>
        </label>
      </div>
    </section>
  );
};

export default Settings;
