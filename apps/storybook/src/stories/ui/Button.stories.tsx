import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@junhobaik/ui';
import '@junhobaik/ui/css';
import { CodeBlock } from '@/components';
import { fn } from '@storybook/test';
import { useState } from '@storybook/preview-api';

const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'import { Button } from "@junhobaik/ui";',
      },
    },
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  args: {
    onClick: fn(),
  },
  argTypes: {
    children: {
      control: 'text',
      table: {
        required: true,
      },
    },
    ref: {},
    onClick: {
      action: 'clicked',
      description: 'Button click event',
    },
    debounce: {
      control: 'number',
      // @ts-expect-error
      type: 'boolean | number',
      description: 'onClick event, Debounce wait time (ms)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    scalable: {
      control: 'boolean',
      description: 'Button click, shrink animation',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    startContent: {
      control: {
        type: 'object',
      },
      description: 'Content at the start of the button',
    },
    endContent: {
      description: 'Content at the end of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    spinner: {
      control: {},
      description: 'Custom spinner element',
    },
    spinnerPlacement: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Placement of the spinner',
      table: {
        defaultValue: { summary: '"start"' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: '"md"' },
      },
    },
    radius: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Button border radius',
      table: {
        defaultValue: { summary: '"md"' },
      },
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Button color',
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: 'radio',
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
      description: 'Button variant',
      table: {
        defaultValue: { summary: '"solid"' },
        type: { summary: `"solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"` },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Debounce: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <Button
          {...args}
          debounce={1000}
          onClick={() => {
            setCount((prev) => prev + 1);
            console.log('clicked');
          }}
        >
          [Count: {count}] Count Up / (debounce: 1000)
        </Button>
      </div>
    );
  },
};

export const Color: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap">
        <Button {...args} className="m-1" color="default">
          default
        </Button>
        <Button {...args} className="m-1" color="primary">
          primary
        </Button>
        <Button {...args} className="m-1" color="secondary">
          secondary
        </Button>
        <Button {...args} className="m-1" color="success">
          success
        </Button>
        <Button {...args} className="m-1" color="warning">
          warning
        </Button>
        <Button {...args} className="m-1" color="danger">
          danger
        </Button>
      </div>
    );
  },
};

export const Variant: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap">
        <Button color="primary" {...args} variant="solid" className="m-1">
          solid
        </Button>
        <Button color="primary" {...args} variant="shadow" className="m-1">
          shadow
        </Button>
        <Button color="primary" {...args} variant="bordered" className="m-1">
          bordered
        </Button>
        <Button color="primary" {...args} variant="faded" className="m-1">
          faded
        </Button>
        <Button color="primary" {...args} variant="ghost" className="m-1">
          ghost
        </Button>
        <Button color="primary" {...args} variant="flat" className="m-1">
          flat
        </Button>
        <Button color="primary" {...args} variant="light" className="m-1">
          light
        </Button>
      </div>
    );
  },
};

export const Size: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap">
        <Button color="primary" {...args} className="m-1" size="xs">
          X-Small
        </Button>
        <Button color="primary" {...args} className="m-1" size="sm">
          Small
        </Button>
        <Button color="primary" {...args} className="m-1" size="md">
          Medium
        </Button>
        <Button color="primary" {...args} className="m-1" size="lg">
          Large
        </Button>
        <Button color="primary" {...args} className="m-1" size="xl">
          X-Large
        </Button>
      </div>
    );
  },
};

export const Radius: Story = {
  render: (args) => {
    return (
      <div className="flex flex-wrap">
        <Button color="primary" {...args} className="m-1" radius="none">
          none
        </Button>
        <Button color="primary" {...args} className="m-1" radius="sm">
          Small
        </Button>
        <Button color="primary" {...args} className="m-1" radius="md">
          Medium
        </Button>
        <Button color="primary" {...args} className="m-1" radius="lg">
          Large
        </Button>
        <Button color="primary" {...args} className="m-1" radius="xl">
          X-Large
        </Button>
        <Button color="primary" {...args} className="m-1" radius="2xl">
          2X-Large
        </Button>
        <Button color="primary" {...args} className="m-1" radius="3xl">
          3X-Large
        </Button>
        <Button color="primary" {...args} className="m-1" radius="full">
          Full
        </Button>
      </div>
    );
  },
};

export const Loading: Story = {
  render: (args) => {
    return (
      <div className="p-1">
        <div className="flex flex-wrap">
          <Button color="primary" variant="solid" {...args} isLoading={true} className="m-1">
            solid
          </Button>
          <Button color="primary" variant="shadow" {...args} isLoading={true} className="m-1">
            shadow
          </Button>
          <Button color="primary" variant="bordered" {...args} isLoading={true} className="m-1">
            bordered
          </Button>
          <Button color="primary" variant="faded" {...args} isLoading={true} className="m-1">
            faded
          </Button>
          <Button color="primary" variant="ghost" {...args} isLoading={true} className="m-1">
            ghost
          </Button>
          <Button color="primary" variant="flat" {...args} isLoading={true} className="m-1">
            flat
          </Button>
          <Button color="primary" variant="light" {...args} isLoading={true} className="m-1">
            light
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-lg">Spinner Placement</p>
          <div className="flex flex-wrap">
            <Button color="primary" variant="solid" {...args} isLoading={true} spinnerPlacement="start" className="m-1">
              Start
            </Button>
            <Button color="primary" variant="solid" {...args} isLoading={true} spinnerPlacement="end" className="m-1">
              End
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg">Custom Spinner</p>
          <div className="">
            <Button {...args} isLoading={true} spinner={<div>loading...</div>}>
              Custom
            </Button>
            <CodeBlock code={`<Button isLoading={true} spinnerElement={<div>loading...</div>}>`} lang="javascript" className="mt-2" />
          </div>
        </div>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: (args) => {
    return (
      <div className="">
        <Button color="primary" {...args} fullWidth>
          Full Width
        </Button>
      </div>
    );
  },
};

export const Scalable: Story = {
  render: (args) => {
    return (
      <div className="">
        <Button color="primary" {...args} scalable>
          Scalable
        </Button>
      </div>
    );
  },
};

export const Custom: Story = {
  render: (args) => {
    return (
      <div className="">
        <p className="text-lg mb-1">Support TailwindCSS</p>
        <div className="">
          <div className="flex items-center">
            <Button {...args} className="text-slate-700 border-4 bg-slate-400 border-slate-700 mr-1">
              Custom
            </Button>
            <Button {...args} className="text-slate-700 border-4 bg-slate-400 border-slate-700" isLoading={true}>
              Custom
            </Button>
          </div>

          <CodeBlock code={`<Button className="text-slate-700 border-4 bg-slate-400 border-slate-700 mr-1"> ...`} lang="javascript" className="mt-2" />
          <CodeBlock code={`<Button className="text-slate-700 border-4 bg-slate-400 border-slate-700" isLoading={true}> ...`} lang="javascript" className="mt-2" />
        </div>
      </div>
    );
  },
};
