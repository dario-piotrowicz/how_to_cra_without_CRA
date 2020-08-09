import { filesStructureActionTypes } from './files-structure.types';

export const showFilesStructure = (value: object) => ({
  type: filesStructureActionTypes.SHOW_FILES_STRUCTURE,
  payload: value,
});

export const hideFilesStructure = () => ({
  type: filesStructureActionTypes.HIDE_FILES_STRUCTURE,
});
