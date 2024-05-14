import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import { MilkdownProvider } from '@milkdown/react';
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react';

import { type MilkdownRef, MilkdownEditor } from '@/components';

import { compose } from '@/utils/compose';
import { decode } from '@/utils/share';

import '@milkdown/theme-nord/style.css';
import './styles/globals.css';

import './styles/editor.css';
import './styles/prose.css';
import './styles/prosemirror.css';
import './styles/prism-node.css';
import './styles/katex.css';

const Provider = compose(MilkdownProvider, ProsemirrorAdapterProvider);

interface EditorContainerProps {
  defaultValue: string;
  onChange?: (markdown: string) => void;
}

export type EditorRef = MilkdownRef;

const EditorContainer = forwardRef<EditorRef, EditorContainerProps>((props, ref) => {
  const { defaultValue, onChange = () => {} } = props;
  const [content, setContent] = useState(defaultValue);

  const milkdownRef = useRef<EditorRef>(null);
  const onMilkdownChange = useCallback<(markdown: string) => void>(onChange, [onChange]);

  useImperativeHandle(ref, () => ({
    getMarkdown: () => {
      if (milkdownRef.current) {
        return milkdownRef.current.getMarkdown();
      }
      return '';
    },
    insert: (markdown) => {
      if (milkdownRef.current) {
        milkdownRef.current.insert(markdown);
      }
    },
    update: (markdown) => {
      if (milkdownRef.current) {
        milkdownRef.current.update(markdown);
      }
    },
  }));

  return (
    <Provider>
      <MilkdownEditor milkdownRef={milkdownRef} content={content} onChange={onMilkdownChange} />
    </Provider>
  );
});

export default EditorContainer;
