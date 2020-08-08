import React, { FunctionComponent } from 'react';
import './files-structure.styles.scss';
import { Icon } from '@iconify/react';
import foldertreeIcon from '@iconify/icons-whh/foldertree';

const FilesStructureButton: FunctionComponent = () => {
  return (
    <div className="files-structure-btn">
      <div className="content">
        <Icon icon={foldertreeIcon} />
      </div>
    </div>
  );
};

export default FilesStructureButton;
