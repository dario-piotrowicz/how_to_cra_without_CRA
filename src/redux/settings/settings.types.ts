export interface SettingsStateType {
  npm: boolean;
  yarn: boolean;
  babelrc: boolean;
  sass: boolean;
  esLint: boolean;
  prettier: boolean;
}

export enum settingsActionTypes {
  SET_NPM = 'SET_NPM',
  SET_YARN = 'SET_YARN',
  SET_SASS = 'SET_SASS',
  SET_BABELRC = 'SET_BABELRC',
  SET_ESLINT = 'SET_ESLINT',
  SET_PRETTIER = 'SET_PRETTIER',
}
