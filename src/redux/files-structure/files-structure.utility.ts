import { store } from '../store';
import {
  SectionAbsoluteIndex,
  FilesStructureObject,
} from './files-structure.types';

export const getFilesStructureForSection = (
  sectionIndex: SectionAbsoluteIndex
) => {
  const { babelrc, sass, esLint, prettier } = store.getState().settings;

  const filesStructure: FilesStructureObject = {
    public: { 'index.html': 'html-file' },
    src: { 'index.js': 'js-file' },
  };

  if (sectionIndex <= SectionAbsoluteIndex.INITAL_BOILERPLATE)
    return filesStructure;

  if (babelrc) filesStructure['.babelrc'] = 'json-file';
  filesStructure['webpack.config.js'] = 'js-file';

  if (sectionIndex <= SectionAbsoluteIndex.WEBPACK_BABEL) return filesStructure;

  const publicDir = filesStructure.public as FilesStructureObject;
  publicDir['app.js'] = 'js-file';
  const appStylesFileName = `app.${sass ? 's' : ''}css`;
  publicDir[appStylesFileName] = `${sass ? 's' : ''}css-file`;

  if (sectionIndex <= SectionAbsoluteIndex.CSS) return filesStructure;

  if (esLint) filesStructure['.eslintrc'] = 'json-file';

  if (sectionIndex <= SectionAbsoluteIndex.ESLINT) return filesStructure;

  if (prettier) filesStructure['.prettierrc'] = 'json-file';

  return filesStructure;
};
