import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Introduction />
    </>
  );
};

export default App;
