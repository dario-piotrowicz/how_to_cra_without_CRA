import React, { FunctionComponent } from 'react';
import './files-structure-visualizer.styles.scss';
import Icon from '@iconify/react';
import folderIcon from '@iconify/icons-fa-solid/folder';
import fileIcon from '@iconify/icons-fa-solid/file';

const FilesStructureVisualizer: FunctionComponent<{ structure: object }> = ({
  structure,
}) => {
  if (!structure) return <div>Error</div>;

  return (
    <div className="files-structure-visualizer">
      <span className="icon-and-text-container">
        <span className="icon">
          <Icon icon={folderIcon} />
        </span>
        <span className="text">Folder Name</span>
      </span>
      <div className="folder-content">
        <div className="item-container">
          <span className="icon-and-text-container">
            <span className="icon">
              <Icon icon={folderIcon} />
            </span>
            <span className="text">Folder Name 1</span>
          </span>
        </div>
        <div className="item-container">
          <span className="icon-and-text-container">
            <span className="icon">
              <Icon icon={fileIcon} />
            </span>
            <span className="text">File Name</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilesStructureVisualizer;
