import {
  filesStructureActionTypes,
  FilesStructureStateType,
} from './files-structure.types';

const initialState: FilesStructureStateType = {
  visible: false,
  structure: null,
};

const filesStructureReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case filesStructureActionTypes.SHOW_FILES_STRUCTURE:
      return { ...state, visible: true, structure: action.payload };
    case filesStructureActionTypes.HIDE_FILES_STRUCTURE:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default filesStructureReducer;
