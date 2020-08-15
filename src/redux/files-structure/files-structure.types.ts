type FilesStructureFileType = { [key: string]: string };

export type FilesStructureObject =
  | { [key: string]: FilesStructureObject }
  | FilesStructureFileType;

export interface FilesStructureStateType {
  visible: boolean;
  structure: FilesStructureObject;
}

export enum filesStructureActionTypes {
  SHOW_FILES_STRUCTURE = 'SHOW_FILES_STRUCTURE',
  HIDE_FILES_STRUCTURE = 'HIDE_FILES_STRUCTURE',
}
