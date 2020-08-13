import React, { FunctionComponent, useState } from 'react';
import './files-structure-modal.styles.scss';
import { useDispatch } from 'react-redux';
import { hideFilesStructure } from '../../redux/files-structure/files-structure.actions';
import Icon from '@iconify/react';
import timesIcon from '@iconify/icons-fa-solid/times';
import FilesStructureVisualizer from '../files-structure-visualizer/files-structure-visualizer.component';

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
          <h2 className="title">
            If you've been following the guide at this point your project's
            files structure should be as follows
          </h2>
          <span className="icon" onClick={() => setClosing(true)}>
            <Icon icon={timesIcon} />
          </span>
        </header>
        <section>
          <FilesStructureVisualizer
            structure={{
              public: { 'index.html': 'html-file' },
              src: { 'index.js': 'js-file' },
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default FilesStructureModal;
