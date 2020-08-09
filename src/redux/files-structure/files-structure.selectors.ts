import { createSelector } from 'reselect';
import { RootStateType } from '../types';
import { FilesStructureStateType } from './files-structure.types';

const selectFilesStructure = (state: RootStateType): FilesStructureStateType =>
  state.filesStructure;

export const selectFilesStructureIsVisible = createSelector(
  [selectFilesStructure],
  (filesStructure) => filesStructure.visible
);

export const selectFilesStructureStructure = createSelector(
  [selectFilesStructure],
  (filesStructure) => filesStructure.structure
);
