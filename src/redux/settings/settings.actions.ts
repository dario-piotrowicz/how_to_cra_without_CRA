import { settingsActionTypes } from './settings.types';

export const setNpm = (value: boolean) => ({
  type: settingsActionTypes.SET_NPM,
  payload: value,
});

export const setYarn = (value: boolean) => ({
  type: settingsActionTypes.SET_YARN,
  payload: value,
});

export const setEsLint = (value: boolean) => ({
  type: settingsActionTypes.SET_ESLINT,
  payload: value,
});

export const setPrettier = (value: boolean) => ({
  type: settingsActionTypes.SET_PRETTIER,
  payload: value,
});
