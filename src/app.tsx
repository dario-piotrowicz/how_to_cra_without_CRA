import React, {
  FunctionComponent,
  lazy,
  Suspense,
  useState,
  useEffect,
} from 'react';
import './app.scss';
import { useSelector } from 'react-redux';
import {
  selectEsLint,
  selectPrettier,
} from './redux/settings/settings.selectors';
import Header from './components/header/header.component';
import Introduction from './sections/introduction/introduction.component';
import Settings from './sections/settings/settings.component';
import Footer from './components/footer/footer.component';
import { selectFilesStructureIsVisible } from './redux/files-structure/files-structure.selectors';

const InitialBoilerplateSection = lazy(() =>
  import('./sections/initial-boilerplate/initial-boilerplate.component')
);
const WebPackBabelSetupSection = lazy(() =>
  import('./sections/webpack-babel-setup/webpack-babel-setup.component')
);
const RunAppSection = lazy(() =>
  import('./sections/run-app/run-app.component')
);
const CssSetupSection = lazy(() =>
  import('./sections/css-setup/css-setup.component')
);
const EsLintSetupSection = lazy(() =>
  import('./sections/eslint-setup/eslint-setup.component')
);
const PrettierSetupSection = lazy(() =>
  import('./sections/prettier-setup/prettier-setup.component')
);
const Conclusions = lazy(() =>
  import('./sections/conclusions/conclusions.component')
);

const FilesStructureModal = lazy(() =>
  import('./components/files-structure-modal/files-structure-modal.component')
);

const App: FunctionComponent = () => {
  const [showSectionsCounter, setShowSectionsCounter] = useState(1);

  useEffect(() => {
    if (showSectionsCounter >= 7) return;

    const updateSectionsToShow = () => {
      const top = window.scrollY;

      if (top > showSectionsCounter * 100) {
        setShowSectionsCounter(Math.ceil(top / 100));
      }
    };

    window.addEventListener('scroll', updateSectionsToShow);
    return () => window.removeEventListener('scroll', updateSectionsToShow);
  });

  const esLint = useSelector(selectEsLint);
  const prettier = useSelector(selectPrettier);

  const filesStructureIsVisible = useSelector(selectFilesStructureIsVisible);

  const loadingSectionDiv = <div className="loading-section"></div>;

  const lazyLoadSection = (
    timerTreshold: number,
    Component: FunctionComponent,
    showConditionMet = true
  ) =>
    showSectionsCounter < timerTreshold ? (
      loadingSectionDiv
    ) : showConditionMet ? (
      <Suspense fallback={loadingSectionDiv}>
        <Component />
      </Suspense>
    ) : null;

  return (
    <div id="app">
      <Header />
      <Introduction />
      <Settings />
      {lazyLoadSection(1, InitialBoilerplateSection)}
      {lazyLoadSection(2, WebPackBabelSetupSection)}
      {lazyLoadSection(3, RunAppSection)}
      {lazyLoadSection(4, CssSetupSection)}
      {lazyLoadSection(5, EsLintSetupSection, esLint)}
      {lazyLoadSection(6, PrettierSetupSection, prettier)}
      {lazyLoadSection(7, Conclusions)}
      <Footer />
      {filesStructureIsVisible ? (
        <Suspense fallback={null}>
          <FilesStructureModal />
        </Suspense>
      ) : null}
    </div>
  );
};

export default App;
