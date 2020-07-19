import { combineReducers } from 'redux';
import settingsReducer from './settings/settings.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default persistReducer(persistConfig, rootReducer);
