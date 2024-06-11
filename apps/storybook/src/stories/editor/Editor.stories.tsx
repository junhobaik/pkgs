import type { Meta, StoryObj } from '@storybook/react';

import { Editor, type EditorRef } from '@junhobaik/editor';
import '@junhobaik/editor/css';

import { Button } from '@junhobaik/ui';
import '@junhobaik/ui/css';

import { useRef } from 'react';

import { CodeBlock } from '@/components';

const meta = {
  title: 'editor/Editor',
  component: Editor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'import { Editor } from "@junhobaik/editor";',
      },
    },
  },
  args: {
    onChange: (markdown: string) => console.log(markdown),
    toolbarItems: [],
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      table: {
        required: true,
      },
    },
    ref: {},
    onChange: {},
  },
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof Editor>;

export const Default: Story = {
  args: {
    defaultValue: '# Hello, Markdown!\n> test\n```javascript\nconst foo = "test";\n```\n- list',
  },
  render: (args) => {
    return (
      <div className="h-[360px] overflow-hidden">
        <Editor {...args} />
      </div>
    );
  },
};

export const Refs: Story = {
  args: {
    defaultValue: '# Hello, Markdown!',
  },
  render: (args) => {
    const ref = useRef<EditorRef>(null);
    return (
      <div>
        <div className="h-[240px] overflow-hidden">
          <Editor {...args} ref={ref} />
        </div>

        <div className="mt-2">
          <Button
            fullWidth
            color="default"
            onClick={() => {
              const md = ref.current?.getMarkdown();
              alert(md);
            }}
          >
            {`ref.current.getMarkdown()`}
          </Button>
        </div>

        <div className="mt-2">
          <Button
            fullWidth
            color="default"
            onClick={() => {
              ref.current?.insert('## Inserted');
            }}
          >
            {`ref.current.insert('...')`}
          </Button>
        </div>

        <div className="mt-2">
          <Button
            fullWidth
            color="default"
            onClick={() => {
              ref.current?.update('# Update\n> ' + new Date());
            }}
          >
            {`ref.current.update('...')`}
          </Button>
        </div>
      </div>
    );
  },
};

export const ToolbarItems: Story = {
  args: {
    toolbarItems: [
      {
        icon: 'attachment',
        onClick: () => {
          alert('Attachment');
        },
      },
    ],
  },
  render: (args) => {
    return (
      <div>
        <div className="h-[180px] overflow-hidden">
          <Editor {...args} />
        </div>

        <CodeBlock className="mt-4" lang="javascript" code={`<Editor toolbarItems={[{ icon: 'attachment', onClick: () => {} }]} />`} />
      </div>
    );
  },
};
