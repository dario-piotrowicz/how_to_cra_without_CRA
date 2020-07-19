import React, { FunctionComponent, useState } from 'react';
import './settings.styles.scss';

const Settings: FunctionComponent = () => {
  const [npm, setNpm] = useState(true); //// NO, USE REDUX

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
            onClick={() => setNpm(true)}
          >
            npm
          </button>
          <button
            className={`${!npm ? 'selected' : ''}`}
            onClick={() => setNpm(false)}
          >
            yarn
          </button>
        </div>
        <label>
          <input type="checkbox" />
          <span>esLint</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Prettier</span>
        </label>
      </div>
    </section>
  );
};

export default Settings;
