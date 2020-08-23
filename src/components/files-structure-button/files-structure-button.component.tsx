import React, { FunctionComponent } from 'react';
import './files-structure.styles.scss';
import { Icon } from '@iconify/react';
import foldertreeIcon from '@iconify/icons-whh/foldertree';
import { useDispatch } from 'react-redux';
import { showFilesStructure } from '../../redux/files-structure/files-structure.actions';
import { SectionAbsoluteIndex } from '../../redux/files-structure/files-structure.types';

interface FilesStructureButtonParams {
  sectionIndex: SectionAbsoluteIndex;
}

const FilesStructureButton: FunctionComponent<FilesStructureButtonParams> = ({
  sectionIndex,
}) => {
  const dispatch = useDispatch();

  const onClickHanlder = () => {
    dispatch(showFilesStructure(sectionIndex));
  };

  return (
    <div className="files-structure-btn">
      <div className="content" onClick={onClickHanlder}>
        <Icon icon={foldertreeIcon} />
      </div>
    </div>
  );
};

export default FilesStructureButton;
