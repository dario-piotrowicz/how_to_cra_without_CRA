export interface FilesStructureStateType {
  visible: boolean;
  structure: object;
}

export enum filesStructureActionTypes {
  SHOW_FILES_STRUCTURE = 'SHOW_FILES_STRUCTURE',
  HIDE_FILES_STRUCTURE = 'HIDE_FILES_STRUCTURE',
}
