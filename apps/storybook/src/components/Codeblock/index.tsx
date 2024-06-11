import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 원하는 테마를 선택

interface CodeBlockProps {
  code: string;
  lang: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, className = '' }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    <pre className={`border text-sm ${className}`}>
      <code ref={codeRef} className={`language-${lang}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
