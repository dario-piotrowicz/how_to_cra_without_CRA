import React, { FunctionComponent, useState } from 'react';
import './files-structure-modal.styles.scss';
import { useDispatch } from 'react-redux';
import { hideFilesStructure } from '../../redux/files-structure/files-structure.actions';
import Icon from '@iconify/react';
import timesIcon from '@iconify/icons-fa-solid/times';

const FilesStructureModal: FunctionComponent = () => {
  const [closing, setClosing] = useState(false);
  const dispatch = useDispatch();

  if (closing) {
    setTimeout(() => dispatch(hideFilesStructure()), 500);
  }

  return (
    <div id="files-structure-modal">
      <div
        className={`backdrop${closing ? ' closing' : ''}`}
        onClick={() => setClosing(true)}
      />
      <div className={`body${closing ? ' closing' : ''}`}>
        <header>
          <span className="icon" onClick={() => setClosing(true)}>
            <Icon icon={timesIcon} />
          </span>
        </header>
      </div>
    </div>
  );
};

export default FilesStructureModal;
