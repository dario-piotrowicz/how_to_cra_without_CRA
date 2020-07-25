import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';
import InitialBoilerplateSection from './sections/initial-boilerplate/initial-boilerplate.component';
import WebPackBabelSetupSection from './sections/webpack-babel-setup/webpack-babel-setup.component';
import RunAppSection from './sections/run-app/run-app.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Settings />
      <InitialBoilerplateSection />
      <WebPackBabelSetupSection />
      <RunAppSection />
    </>
  );
};

export default App;
