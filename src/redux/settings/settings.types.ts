export interface SettingsStateType {
  npm: boolean;
  yarn: boolean;
  esLint: boolean;
  prettier: boolean;
}

export const settingsActionTypes = {
  SET_NPM: 'SET_NPM',
  SET_YARN: 'SET_YARN',
  SET_ESLINT: 'SET_ESLINT',
  SET_PRETTIER: 'SET_PRETTIER',
};
