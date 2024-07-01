import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@junhobaik/ui';
import '@junhobaik/ui/css';
import { IconAlertCircle, IconLoader3 } from '@tabler/icons-react';

const meta = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'import { Input } from "@junhobaik/ui";',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Input value',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Change event handler',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: 'Input type',
      table: {
        defaultValue: { summary: '"text"' },
        type: { summary: `'text' | 'password' | 'email' | 'number' | 'tel' | 'url'` },
      },
    },
    label: {
      control: 'text',
      description: 'Input label',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Input description',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'Input message (often used for error messages)',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
      table: {
        defaultValue: { summary: '"md"' },
        type: { summary: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Input color',
      table: {
        defaultValue: { summary: '"default"' },
        type: { summary: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'` },
      },
    },
    variant: {
      control: 'select',
      options: ['bordered', 'flat', 'underlined', 'faded'],
      description: 'Input variant',
      table: {
        defaultValue: { summary: '"bordered"' },
        type: { summary: `'bordered' | 'flat' | 'underlined' | 'faded'` },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Input border radius',
      table: {
        defaultValue: { summary: '"lg"' },
        type: { summary: `'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'` },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    labelPlacement: {
      control: 'radio',
      options: ['top', 'left'],
      description: 'Label placement',
      table: {
        defaultValue: { summary: '"top"' },
        type: { summary: `'top' | 'left'` },
      },
    },
    startContent: {
      description: 'Content at the start of the input',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endContent: {
      description: 'Content at the end of the input',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Input disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    spinner: {
      description: 'Custom spinner element',
      table: {
        type: { summary: 'ReactElement' },
      },
    },
    spinnerPlacement: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Placement of the spinner',
      table: {
        defaultValue: { summary: '"end"' },
        type: { summary: `'start' | 'end'` },
      },
    },
    as: {
      control: 'text',
      description: 'Render input as different element',
      table: {
        defaultValue: { summary: '"div"' },
        type: { summary: 'ElementType' },
      },
    },
    ref: {
      description: 'Ref to the input element',
      table: {
        type: { summary: 'Ref<HTMLInputElement>' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class',
      table: {
        type: { summary: 'string' },
      },
    },
    passwordToggle: {
      control: 'boolean',
      description: 'Enable password visibility toggle',
      table: {
        defaultValue: { summary: 'false' },
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

export const Contents: Story = {
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

export const Label: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex">
        <Input {...args} containerClassName="m-2" placeholder="label" label="Top Label" />
        <Input {...args} containerClassName="m-2" placeholder="label" label="Left Label" labelPlacement="left" />
      </div>
    );
  },
};

export const Description: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex">
        <Input {...args} containerClassName="m-2" placeholder="label" label="Top Label" description="Top Label, Description" />
        <Input {...args} containerClassName="m-2" placeholder="label" label="Left Label" labelPlacement="left" description="Left Label, Description" />
      </div>
    );
  },
};

export const Message: Story = {
  args: {},
  render: (args) => {
    const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

    const list = colors.map((color) => (
      <li key={color} className="m-2">
        <Input {...args} color={color} placeholder={color} message="message text..." />
      </li>
    ));

    return (
      <div>
        <ul className="flex flex-wrap">{list}</ul>
        <div className="mt-4">
          <Input
            color="danger"
            {...args}
            containerClassName="m-2"
            placeholder="with description"
            label="Top label"
            labelPlacement="top"
            description="Top Label, Description"
            message="message text..."
          />
          <Input
            color="danger"
            {...args}
            containerClassName="m-2"
            placeholder="with description"
            label="Left label"
            labelPlacement="left"
            description="Top Label, Description"
            message="message text..."
          />
        </div>
      </div>
    );
  },
};

export const Password: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex">
        <Input {...args} containerClassName="m-2" placeholder="label" label="PW:" description="Enter New Password" type="password" />
        <Input {...args} containerClassName="m-2" placeholder="label" label="PW:" description="Enter New Password" type="password" passwordToggle />
      </div>
    );
  },
};
