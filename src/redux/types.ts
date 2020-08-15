import { SettingsStateType } from './settings/settings.types';
import { FilesStructureStateType } from './files-structure/files-structure.types';

export interface RootStateType {
  settings: SettingsStateType;
  filesStructure: FilesStructureStateType;
}
