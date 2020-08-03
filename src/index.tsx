import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Root: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
