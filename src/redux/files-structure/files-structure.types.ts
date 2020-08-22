// the following enum is generic but only introduced/used for the files-structure feature
// should be moved into a common file if used elsewhere
export enum SectionAbsoluteIndex {
  INTRODUCTION = 0,
  INITAL_BOILERPLATE = 1,
  WEBPACK_BABEL = 2,
  RUN_APP = 3,
  CSS = 4,
  ESLINT = 5,
  PRETTIER = 6,
  CONCLUSIONS = 7,
}

export type FilesStructureObject = {
  [key: string]: FilesStructureObject | string;
};

export interface FilesStructureStateType {
  visible: boolean;
  structure: FilesStructureObject;
}

export enum filesStructureActionTypes {
  SHOW_FILES_STRUCTURE = 'SHOW_FILES_STRUCTURE',
  HIDE_FILES_STRUCTURE = 'HIDE_FILES_STRUCTURE',
}
