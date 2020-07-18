import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const Root: FunctionComponent = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById('root'));
