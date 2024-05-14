import { useEffect, useMemo } from 'react';

import { Editor, defaultValueCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/core';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { history } from '@milkdown/plugin-history';
import { indent } from '@milkdown/plugin-indent';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { prism, prismConfig } from '@milkdown/plugin-prism';
import { trailing } from '@milkdown/plugin-trailing';
import { upload } from '@milkdown/plugin-upload';
import { codeBlockSchema, commonmark, listItemSchema } from '@milkdown/preset-commonmark';
import { useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';
import debounce from 'lodash.debounce';
import { refractor } from 'refractor/lib/common';
import { ListItem } from './editor-component/ListItem';
import { useNodeViewFactory, usePluginViewFactory, useWidgetViewFactory } from '@prosemirror-adapter/react';
import { $view } from '@milkdown/utils';
import { useSetInspector } from './InspectorProvider';
import { footnoteDefinitionSchema, footnoteReferenceSchema, gfm } from '@milkdown/preset-gfm';
import type { MilkdownPlugin, Ctx } from '@milkdown/ctx';
import { tableTooltip, tableTooltipCtx, TableTooltip, tableSelectorPlugin } from './editor-component/TableWidget';
import { FootnoteDef, FootnoteRef } from './editor-component/Footnote';
import { CodeBlock } from './editor-component/CodeBlock';
import { useSlash } from './slash-menu';
import { ImageTooltip, imageTooltip } from './editor-component/ImageTooltip';
import { math, mathBlockSchema } from '@milkdown/plugin-math';
import { MathBlock } from './editor-component/MathBlock';
import { diagram, diagramSchema } from '@milkdown/plugin-diagram';
import { Diagram } from './editor-component/Diagram';
import { block } from '@milkdown/plugin-block';
import { Block } from './editor-component/Block';

const useMilkdownEditor = (defaultValue: string, onChange: (markdown: string) => void) => {
  const nodeViewFactory = useNodeViewFactory();
  const setInspector = useSetInspector();
  const pluginViewFactory = usePluginViewFactory();
  const widgetViewFactory = useWidgetViewFactory();

  const slash = useSlash();

  const gfmPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      gfm,
      tableTooltip,
      tableTooltipCtx,
      (ctx: Ctx) => async () => {
        ctx.set(tableTooltip.key, {
          view: pluginViewFactory({
            component: TableTooltip,
          }),
        });
      },
      $view(footnoteDefinitionSchema.node, () => nodeViewFactory({ component: FootnoteDef })),
      $view(footnoteReferenceSchema.node, () => nodeViewFactory({ component: FootnoteRef })),
      tableSelectorPlugin(widgetViewFactory),
    ].flat();
  }, [nodeViewFactory, pluginViewFactory, widgetViewFactory]);

  const mathPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      $view(mathBlockSchema.node, () =>
        nodeViewFactory({
          component: MathBlock,
          stopEvent: () => true,
        })
      ),
      math,
    ].flat();
  }, [nodeViewFactory]);

  const diagramPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      diagram,
      $view(diagramSchema.node, () =>
        nodeViewFactory({
          component: Diagram,
          stopEvent: () => true,
        })
      ),
    ].flat();
  }, [nodeViewFactory]);

  const blockPlugins: MilkdownPlugin[] = useMemo(() => {
    return [
      block,
      (ctx: Ctx) => () => {
        ctx.set(block.key, {
          view: pluginViewFactory({
            component: Block,
          }),
        });
      },
    ].flat();
  }, [pluginViewFactory]);

  const editorInfo = useEditor(
    (root) => {
      return Editor.make()
        .enableInspector()
        .config((ctx) => {
          ctx.update(editorViewOptionsCtx, (prev) => ({
            ...prev,
            attributes: {
              // class: 'mx-auto px-2 py-4 box-border',
            },
          }));
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, defaultValue);
          ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
            debounce(onChange, 100)(markdown);
          });

          ctx.update(prismConfig.key, (prev) => ({
            ...prev,
            configureRefractor: () => refractor,
          }));
          ctx.set(imageTooltip.key, {
            view: pluginViewFactory({
              component: ImageTooltip,
            }),
          });

          slash.config(ctx);
        })
        .config(nord)
        .use(commonmark)
        .use(listener)
        .use(clipboard)
        .use(history)
        .use(cursor)
        .use(prism)
        .use(indent)
        .use(upload)
        .use(trailing)
        .use(imageTooltip)
        .use(slash.plugins)
        .use($view(listItemSchema.node, () => nodeViewFactory({ component: ListItem })))
        .use($view(codeBlockSchema.node, () => nodeViewFactory({ component: CodeBlock })));
    },
    [onChange, defaultValue]
  );

  const { get, loading } = editorInfo;

  useEffect(() => {
    requestAnimationFrame(() => {
      const effect = async () => {
        const editor = get();
        if (!editor) return;

        editor.use(gfmPlugins);
        editor.use(blockPlugins);
        editor.use(mathPlugins);
        editor.use(diagramPlugins);

        await editor.create();

        setInspector(() => editor.inspect());
      };

      effect().catch((e) => {
        console.error(e);
      });
    });
  }, [get, loading, gfmPlugins, mathPlugins, diagramPlugins, blockPlugins, setInspector]);

  useEffect(() => {
    onChange(defaultValue);
  }, [defaultValue, onChange]);

  return editorInfo;
};

export default useMilkdownEditor;
