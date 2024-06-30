import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@junhobaik/ui';
import '@junhobaik/ui/css';
import { IconAlertCircle, IconLoader3 } from '@tabler/icons-react';

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
      <li key={color} className="m-2">
        <Input {...args} color={color} placeholder={color} />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
      </div>
    );
  },
};

export const Variants: Story = {
  args: {},
  render: (args) => {
    const variants = ['bordered', 'flat', 'underlined', 'faded'] as const;

    const list = variants.map((variant) => (
      <li key={variant} className="m-2">
        <Input {...args} variant={variant} placeholder={variant} />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
      </div>
    );
  },
};

export const Size: Story = {
  args: {},
  render: (args) => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    const list = sizes.map((size) => (
      <li key={size} className="m-2">
        <Input {...args} size={size} placeholder={size} />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
      </div>
    );
  },
};

export const Radius: Story = {
  args: {},
  render: (args) => {
    const radius = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as const;

    const list = radius.map((radius) => (
      <li key={radius} className="m-2">
        <Input {...args} radius={radius} placeholder={radius} />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {},
  render: (args) => {
    const variants = ['bordered', 'flat', 'underlined', 'faded'] as const;

    const list = variants.map((variant) => (
      <li key={variant} className="m-2">
        <Input {...args} variant={variant} placeholder={`${variant}/disabled`} disabled />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
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

export const Loading: Story = {
  args: {},
  render: (args) => {
    const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

    const list = colors.map((color) => (
      <li key={color} className="m-2">
        <Input {...args} color={color} placeholder={`${color}/loading`} isLoading />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>

        <p className="text-lg mt-3 ml-2 font-semibold">Spinner placement</p>
        <div className="flex">
          <Input containerClassName="m-2" {...args} placeholder={`start/loading`} isLoading spinnerPlacement="start" />
          <Input containerClassName="m-2" {...args} placeholder={`end/loading`} isLoading spinnerPlacement="end" />
        </div>

        <p className="text-lg mt-3 ml-2 font-semibold">Custom Spinner</p>
        <div className="flex">
          <Input containerClassName="m-2" {...args} placeholder={`start/loading`} isLoading spinner={<IconLoader3 />} />
        </div>
      </div>
    );
  },
};

export const AdditionalContent: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex">
        <Input {...args} placeholder="startContent" startContent={<IconAlertCircle />} />
        &nbsp;&nbsp;&nbsp;
        <Input {...args} placeholder="endContent" endContent={<IconAlertCircle />} />
      </div>
    );
  },
};
