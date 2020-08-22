import { createSelector } from 'reselect';
import { RootStateType } from '../types';
import { SettingsStateType } from './settings.types';

const selectSettings = (state: RootStateType): SettingsStateType =>
  state.settings;

export const selectNpm = createSelector(
  [selectSettings],
  (settings) => settings.npm
);

export const selectYarn = createSelector(
  [selectSettings],
  (settings) => settings.yarn
);

export const selectBabelrc = createSelector(
  [selectSettings],
  (settings) => settings.babelrc
);

export const selectSass = createSelector(
  [selectSettings],
  (settings) => settings.sass
);

export const selectEsLint = createSelector(
  [selectSettings],
  (settings) => settings.esLint
);

export const selectPrettier = createSelector(
  [selectSettings],
  (settings) => settings.prettier
);
