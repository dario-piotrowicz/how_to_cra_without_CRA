import { SettingsStateType, settingsActionTypes } from './settings.types';

const initialState: SettingsStateType = {
  npm: true,
  yarn: false,
  sass: true,
  esLint: true,
  prettier: true,
};

const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case settingsActionTypes.SET_NPM:
      return { ...state, npm: !!action.payload };
    case settingsActionTypes.SET_YARN:
      return { ...state, yarn: !!action.payload };
    case settingsActionTypes.SET_SASS:
      return { ...state, sass: !!action.payload };
    case settingsActionTypes.SET_ESLINT:
      return { ...state, esLint: !!action.payload };
    case settingsActionTypes.SET_PRETTIER:
      return { ...state, prettier: !!action.payload };
    default:
      return state;
  }
};

export default userReducer;
