import React, { FunctionComponent } from 'react';
import './files-structure-modal.styles.scss';
import { useDispatch } from 'react-redux';
import { hideFilesStructure } from '../../redux/files-structure/files-structure.actions';
import Icon from '@iconify/react';
import timesIcon from '@iconify/icons-fa-solid/times';

const FilesStructureModal: FunctionComponent = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(hideFilesStructure());

  return (
    <div id="files-structure-modal">
      <div className="backdrop" onClick={closeModal} />
      <div className="body">
        <header>
          <span className="icon" onClick={closeModal}>
            <Icon icon={timesIcon} />
          </span>
        </header>
      </div>
    </div>
  );
};

export default FilesStructureModal;
