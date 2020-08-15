import React, { FunctionComponent } from 'react';
import './files-structure-visualizer.styles.scss';
import Icon from '@iconify/react';
import folderIcon from '@iconify/icons-fa-solid/folder';
import fileIcon from '@iconify/icons-fa-solid/file';
import { FilesStructureObject } from '../../redux/files-structure/files-structure.types';

const FileVisualizerLI: FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <li>
      <span className="icon-and-text-container">
        <span className="icon">
          <Icon icon={fileIcon} />
        </span>
        <span className="text">{name}</span>
      </span>
    </li>
  );
};

const FolderVisualizerLI: FunctionComponent<{
  name?: string;
  structure: FilesStructureObject;
  root?: boolean;
}> = ({ name = '', structure, root = false }) => {
  return (
    <li className={root ? 'root' : null}>
      <span className="icon-and-text-container">
        <span className="icon">
          <Icon icon={folderIcon} />
        </span>
        <span className="text">{name}</span>
      </span>
      <ul>
        {Object.keys(structure).map((key) => {
          const value = structure[key];
          if (typeof value === 'string') {
            return <FileVisualizerLI key={key} name={key} />;
          } else {
            return (
              <FolderVisualizerLI key={key} name={key} structure={value} />
            );
          }
        })}
      </ul>
    </li>
  );
};

const FilesStructureVisualizer: FunctionComponent<{
  structure: FilesStructureObject;
}> = ({ structure }) => {
  return (
    <div className="files-structure-visualizer">
      <ul className="root">
        <FolderVisualizerLI structure={structure} root />
      </ul>
    </div>
  );
};

export default FilesStructureVisualizer;
