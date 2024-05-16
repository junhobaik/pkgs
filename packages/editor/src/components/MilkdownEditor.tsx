import type { FC, RefObject } from 'react';
import { useEffect, useImperativeHandle, useState } from 'react';

import type { CmdKey } from '@milkdown/core';
import { editorViewCtx, parserCtx, serializerCtx } from '@milkdown/core';
import { redoCommand, undoCommand } from '@milkdown/plugin-history';
import {
  toggleEmphasisCommand,
  toggleStrongCommand,
  wrapInBlockquoteCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from '@milkdown/preset-commonmark';
import { insertTableCommand, toggleStrikethroughCommand } from '@milkdown/preset-gfm';
import { Slice } from '@milkdown/prose/model';
import { Milkdown as Editor } from '@milkdown/react';
import { callCommand, insert as insertUtil } from '@milkdown/utils';
import clsx from 'clsx';
import { MaterialSymbol } from 'material-symbols';
import { FadeLoader } from 'react-spinners';

import { useLinkClass } from '@/hooks';

import useMilkdownEditor from './useMilkdownEditor';

import '@milkdown/theme-nord/style.css';

const Button: FC<{ icon: MaterialSymbol; onClick?: () => boolean | void | Promise<void | boolean> }> = ({
  icon,
  onClick,
}) => {
  const linkClass = useLinkClass();
  return (
    <div
      className={clsx(
        'flex h-10 w-10 cursor-pointer items-center justify-center rounded',
        linkClass(false)
      )}
      onMouseDown={(e) => {
        onClick?.();
        e.preventDefault();
      }}
    >
      <span className="material-symbols-outlined !text-base">{icon}</span>
    </div>
  );
};

interface MilkdownProps {
  content: string;
  onChange: (markdown: string) => void;
  milkdownRef: RefObject<MilkdownRef>;
  toolbarItems?: { icon: MaterialSymbol; onClick: () => void }[];
}

export interface MilkdownRef {
  update: (markdown: string) => void;
  insert: (markdown: string) => void;
  getMarkdown: () => string;
}

export const MilkdownEditor = ({ content, onChange, toolbarItems, milkdownRef }: MilkdownProps) => {
  const [loadedFonts, setLoadedFonts] = useState(true);
  const { loading, get } = useMilkdownEditor(content, onChange);

  const update = (markdown: string) => {
    if (loading) return;
    const editor = get();
    editor?.action((ctx) => {
      const view = ctx.get(editorViewCtx);
      const parser = ctx.get(parserCtx);
      const doc = parser(markdown);
      if (!doc) return;
      const state = view.state;
      view.dispatch(state.tr.replace(0, state.doc.content.size, new Slice(doc.content, 0, 0)));
    });
  };

  const insert = (markdown: string) => {
    const editor = get();
    return editor?.action(insertUtil(markdown));
  };

  const getMarkdown = () => {
    const editor = get();

    const markdown = editor?.action((ctx) => {
      const editorView = ctx.get(editorViewCtx);
      const serializer = ctx.get(serializerCtx);
      return serializer(editorView.state.doc);
    });
    return markdown ?? '';
  };

  useImperativeHandle(milkdownRef, () => ({
    update: update,
    insert: insert,
    getMarkdown: getMarkdown,
  }));

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (!document) return;

      let loaded = false;

      const testElement = document.createElement('span');
      testElement.className = 'material-symbols-outlined';
      testElement.innerText = 'undo';
      document.body.appendChild(testElement);

      const computedStyle = window.getComputedStyle(testElement);
      if (computedStyle.getPropertyValue('font-family').includes('Material Symbols Outlined')) {
        loaded = true;
      }

      document.body.removeChild(testElement);

      if (loaded) {
        setLoadedFonts(true);
        clearInterval(intervalID);
      }
    }, 500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function call<T>(command: CmdKey<T>, payload?: T) {
    return get()?.action(callCommand(command, payload));
  }

  return (
    <div className="flex flex-col relative border border-nord4 rounded-2xl h-full overflow-hidden overflow-y-auto">
      {loading && !loadedFonts ? (
        <div className="prose flex items-center justify-center w-full h-full">
          <FadeLoader color="rgb(100, 116, 139)" />
        </div>
      ) : (
        <>
          <div className="flex border-b border-nord4 px-2 py-1 sticky top-0 left-0 z-10 bg-slate-50 slate">
            <Button icon="undo" onClick={() => call(undoCommand.key)} />
            <Button icon="redo" onClick={() => call(redoCommand.key)} />
            <Button icon="format_bold" onClick={() => call(toggleStrongCommand.key)} />
            <Button icon="format_italic" onClick={() => call(toggleEmphasisCommand.key)} />
            <Button icon="format_strikethrough" onClick={() => call(toggleStrikethroughCommand.key)} />
            <Button icon="table" onClick={() => call(insertTableCommand.key)} />
            <Button icon="format_list_bulleted" onClick={() => call(wrapInBulletListCommand.key)} />
            <Button icon="format_list_numbered" onClick={() => call(wrapInOrderedListCommand.key)} />
            <Button icon="format_quote" onClick={() => call(wrapInBlockquoteCommand.key)} />
            {toolbarItems?.map((item, i) => {
              return <Button key={i} icon={item.icon} onClick={item.onClick} />;
            })}
          </div>

          <div id="editorWrap" className="">
            <Editor />
          </div>
        </>
      )}
    </div>
  );
};
