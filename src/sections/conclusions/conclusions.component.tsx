import React, { FunctionComponent } from 'react';
import './conclusions.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectEsLint,
  selectPrettier,
  selectSass,
} from '../../redux/settings/settings.selectors';

const Conclusions: FunctionComponent = () => {
  const eslint = useSelector(selectEsLint);
  const prettier = useSelector(selectPrettier);
  const sass = useSelector(selectSass);

  return (
    <section id="conclusions" className="centering-container">
      <p>This concludes our guide.</p>
      <p>
        If you've followed along you should now have a basic boilerplate which
        you can use to start your react project (without using CRA that is).
      </p>
      <p>
        And as you can see everything is clear and has been manually setup by
        us, you are in full control of what and how tools being used, and you
        can change react's version, any name of your files, your project's
        structure
        {eslint ? ' , the linting options' : ''}
        {prettier ? ' , the formatting options' : ' '} and whatever you want.
      </p>
      <p>
        You can now start working on the application and create any javascript
        and css{sass ? '/sass' : ' '} files you want, as long as they are
        imported in some way into your application (which root is your
        <em> index.js</em> file) they will be picked up by our setup and will be
        compiled for local development or deployment, exacly as CRA would have
        (but without the extra settings and abstraction).
      </p>
    </section>
  );
};

export default Conclusions;
