import {
  filesStructureActionTypes,
  SectionAbsoluteIndex,
} from './files-structure.types';
import { ThunkDispatch } from 'redux-thunk';
import { getFilesStructureForSection } from './files-structure.utility';

export const showFilesStructure = (sectionIndex: SectionAbsoluteIndex) => {
  const structure = getFilesStructureForSection(sectionIndex);
  document.querySelector('body').style.overflowY = 'hidden';
  return (dispatch: ThunkDispatch<any, any, any>) =>
    dispatch({
      type: filesStructureActionTypes.SHOW_FILES_STRUCTURE,
      payload: structure,
    });
};

export const hideFilesStructure = () => {
  document.querySelector('body').style.overflowY = 'auto';
  return (dispatch: ThunkDispatch<any, any, any>) =>
    dispatch({
      type: filesStructureActionTypes.HIDE_FILES_STRUCTURE,
    });
};
