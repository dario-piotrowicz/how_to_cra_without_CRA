import { createStore } from 'redux';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);
