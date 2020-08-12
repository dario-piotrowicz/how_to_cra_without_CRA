import React, { FunctionComponent } from 'react';
import './files-structure-visualizer.styles.scss';
import Icon from '@iconify/react';
import folderIcon from '@iconify/icons-fa-solid/folder';
import fileIcon from '@iconify/icons-fa-solid/file';

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
  structure: object;
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
        {Object.keys(structure).map((key) =>
          typeof (structure as any)[key] === 'object' ? (
            <FolderVisualizerLI
              key={key}
              name={key}
              structure={(structure as any)[key]}
            />
          ) : (
            <FileVisualizerLI key={key} name={key} />
          )
        )}
      </ul>
    </li>
  );
};

const FilesStructureVisualizer: FunctionComponent<{ structure: object }> = ({
  structure,
}) => {
  return (
    <div className="files-structure-visualizer">
      <ul>
        <FolderVisualizerLI structure={structure} root />
      </ul>
    </div>
  );
};

export default FilesStructureVisualizer;
