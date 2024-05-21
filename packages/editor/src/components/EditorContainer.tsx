import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import { MilkdownProvider } from '@milkdown/react';
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react';

import { MilkdownEditor, type MilkdownRef } from '@/components/MilkdownEditor';

import { compose } from '@/utils/compose';

import '../styles/editor.css';
import '../styles/globals.css';
import '../styles/katex.css';
import '../styles/prism-node.css';
import '../styles/prose.css';
import '../styles/prosemirror.css';

import { ProseStateProvider } from './ProseStateProvider';
import { InspectorProvider } from './InspectorProvider';
import { MaterialSymbol } from 'material-symbols';

const Provider = compose(MilkdownProvider, ProsemirrorAdapterProvider, ProseStateProvider, InspectorProvider);

interface EditorContainerProps {
  defaultValue: string;
  onChange?: (markdown: string) => void;
  toolbarItems?: { icon: MaterialSymbol; onClick: () => void }[];
}

export type EditorToolbarItems = EditorContainerProps['toolbarItems'];

export type EditorRef = MilkdownRef;

const EditorContainer = forwardRef<EditorRef, EditorContainerProps>((props, ref) => {
  const { defaultValue, onChange = () => {}, toolbarItems } = props;
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
    <>
      <div id="pkg-editor" style={{ height: '100%' }}>
        <Provider>
          <MilkdownEditor milkdownRef={milkdownRef} content={content} onChange={onMilkdownChange} toolbarItems={toolbarItems} />
        </Provider>
      </div>
      <div id="pkg-editor" className="modal-root" />
    </>
  );
});

export default EditorContainer;
