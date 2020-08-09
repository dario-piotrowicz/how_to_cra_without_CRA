import React, { FunctionComponent } from 'react';
import './files-structure.styles.scss';
import { Icon } from '@iconify/react';
import foldertreeIcon from '@iconify/icons-whh/foldertree';

interface FilesStructureButtonParams {
  structure: object;
}

const FilesStructureButton: FunctionComponent<FilesStructureButtonParams> = ({
  structure,
}) => {
  const onClickHanlder = () => {
    console.log({ structure });
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
