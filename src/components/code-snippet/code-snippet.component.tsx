import React, { FunctionComponent } from 'react';
import './code-snippet.styles.scss';

const CodeSnippet: FunctionComponent<{ code: string }> = ({ code }) => {
  return (
    <div className="code-snippet">
      <pre>{code}</pre>
    </div>
  );
};

export default CodeSnippet;
