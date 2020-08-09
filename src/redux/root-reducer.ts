import { combineReducers } from 'redux';
import settingsReducer from './settings/settings.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filesStructureReducer from './files-structure/files-structure.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  filesStructure: filesStructureReducer,
});

export default persistReducer(persistConfig, rootReducer);
