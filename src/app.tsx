import React, { FunctionComponent } from 'react';
import './app.scss';
import { useSelector } from 'react-redux';
import {
  selectEsLint,
  selectPrettier,
} from './redux/settings/settings.selectors';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';
import InitialBoilerplateSection from './sections/initial-boilerplate/initial-boilerplate.component';
import WebPackBabelSetupSection from './sections/webpack-babel-setup/webpack-babel-setup.component';
import RunAppSection from './sections/run-app/run-app.component';
import CssSetupSection from './sections/css-setup/css-setup.component';
import EsLintSetupSection from './sections/eslint-setup/eslint-setup.component';
import PrettierSetupSection from './sections/prettier-setup/prettier-setup.component';
import Conclusions from './sections/conclusions/conclusions.component';

const App: FunctionComponent = () => {
  const esLint = useSelector(selectEsLint);
  const prettier = useSelector(selectPrettier);

  return (
    <>
      <Header />
      <Introduction />
      <Settings />
      <InitialBoilerplateSection />
      <WebPackBabelSetupSection />
      <RunAppSection />
      <CssSetupSection />
      {esLint ? <EsLintSetupSection /> : null}
      {prettier ? <PrettierSetupSection /> : null}
      <Conclusions />
    </>
  );
};

export default App;
