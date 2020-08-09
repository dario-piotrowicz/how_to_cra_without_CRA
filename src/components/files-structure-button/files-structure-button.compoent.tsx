import React, { FunctionComponent } from 'react';
import './files-structure.styles.scss';
import { Icon } from '@iconify/react';
import foldertreeIcon from '@iconify/icons-whh/foldertree';
import { useDispatch } from 'react-redux';
import { showFilesStructure } from '../../redux/files-structure/files-structure.actions';

interface FilesStructureButtonParams {
  structure: object;
}

const FilesStructureButton: FunctionComponent<FilesStructureButtonParams> = ({
  structure,
}) => {
  const dispatch = useDispatch();

  const onClickHanlder = () => {
    dispatch(showFilesStructure(structure));
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
