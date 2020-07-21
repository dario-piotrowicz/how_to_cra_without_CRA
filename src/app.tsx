import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';
import InitialBoilerplateSection from './sections/initial-boilerplate/initial-boilerplate.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Settings />
      <InitialBoilerplateSection />
    </>
  );
};

export default App;
