import React, { FunctionComponent, useEffect } from 'react';
import './code-snippet.styles.scss';
import Prism from 'prismjs';
import './prism.css';

export enum CodeSnippetLanguage {
  HTML = 'html',
  CSS = 'css',
  JS = 'javascript',
}

interface CodeSnippetParams {
  code: string;
  lang: CodeSnippetLanguage;
}

const CodeSnippet: FunctionComponent<CodeSnippetParams> = ({ code, lang }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeClassName = `language-${lang}`;

  return (
    <div className="code-snippet">
      <pre>
        <code className={codeClassName}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
