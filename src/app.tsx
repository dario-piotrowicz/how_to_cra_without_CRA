import React, { FunctionComponent, lazy, Suspense, useState } from 'react';
import './app.scss';
import { useSelector } from 'react-redux';
import {
  selectEsLint,
  selectPrettier,
} from './redux/settings/settings.selectors';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';
import Footer from './components/footer/footer.component';

const InitialBoilerplateSection = lazy(() =>
  import('./sections/initial-boilerplate/initial-boilerplate.component')
);
const WebPackBabelSetupSection = lazy(() =>
  import('./sections/webpack-babel-setup/webpack-babel-setup.component')
);
const RunAppSection = lazy(() =>
  import('./sections/run-app/run-app.component')
);
const CssSetupSection = lazy(() =>
  import('./sections/css-setup/css-setup.component')
);
const EsLintSetupSection = lazy(() =>
  import('./sections/eslint-setup/eslint-setup.component')
);
const PrettierSetupSection = lazy(() =>
  import('./sections/prettier-setup/prettier-setup.component')
);
const Conclusions = lazy(() =>
  import('./sections/conclusions/conclusions.component')
);

const App: FunctionComponent = () => {
  const [showSectionsTimer, setShowSectionsTimer] = useState(0);

  if (showSectionsTimer < 7) {
    setTimeout(() => setShowSectionsTimer(showSectionsTimer + 1));
  }

  const esLint = useSelector(selectEsLint);
  const prettier = useSelector(selectPrettier);

  const loadingSectionDiv = <div className="loading-section"></div>;

  const lazyLoadSection = (
    timerTreshold: number,
    Component: FunctionComponent,
    showConditionMet = true
  ) => {
    return showSectionsTimer < timerTreshold ? (
      loadingSectionDiv
    ) : showConditionMet ? (
      <Suspense fallback={loadingSectionDiv}>
        <Component />
      </Suspense>
    ) : null;
  };

  return (
    <div id="app">
      <Header />
      <Introduction />
      <Settings />
      {lazyLoadSection(1, InitialBoilerplateSection)}
      {lazyLoadSection(2, WebPackBabelSetupSection)}
      {lazyLoadSection(3, RunAppSection)}
      {lazyLoadSection(4, CssSetupSection)}
      {lazyLoadSection(5, EsLintSetupSection, esLint)}
      {lazyLoadSection(6, PrettierSetupSection, prettier)}
      {lazyLoadSection(7, Conclusions)}
      <Footer />
    </div>
  );
};

export default App;
