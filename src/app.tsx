import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Settings />
    </>
  );
};

export default App;
