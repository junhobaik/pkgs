import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@junhobaik/ui';
import '@junhobaik/ui/css';

const meta = {
  title: 'UI/Input [🚧 Not released]',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'import { Input } from "@junhobaik/ui";',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Colors: Story = {
  args: {},
  render: (args) => {
    const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

    const list = colors.map((color) => (
      <li key={color} className="mb-4">
        <Input {...args} color={color} placeholder={color} />
      </li>
    ));

    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  },
};

export const Variants: Story = {
  args: {},
  render: (args) => {
    const variants = ['bordered', 'flat', 'underlined', 'faded'] as const;

    const list = variants.map((variant) => (
      <li key={variant} className="mb-4">
        <Input {...args} variant={variant} placeholder={variant} />
      </li>
    ));

    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  },
};

export const Radius: Story = {
  args: {},
  render: (args) => {
    const radius = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as const;

    const list = radius.map((radius) => (
      <li key={radius} className="mb-4">
        <Input {...args} radius={radius} placeholder={radius} />
      </li>
    ));

    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  },
};

export const FullWidth: Story = {
  args: {},
  render: (args) => {
    return (
      <div>
        <Input {...args} placeholder="fullWidth" fullWidth />
      </div>
    );
  },
};
