import { filesStructureActionTypes } from './files-structure.types';
import { ThunkDispatch } from 'redux-thunk';

export const showFilesStructure = (value: object) => {
  document.querySelector('body').style.overflowY = 'hidden';
  return (dispatch: ThunkDispatch<any, any, any>) =>
    dispatch({
      type: filesStructureActionTypes.SHOW_FILES_STRUCTURE,
      payload: value,
    });
};

export const hideFilesStructure = () => {
  document.querySelector('body').style.overflowY = 'auto';
  return (dispatch: ThunkDispatch<any, any, any>) =>
    dispatch({
      type: filesStructureActionTypes.HIDE_FILES_STRUCTURE,
    });
};
