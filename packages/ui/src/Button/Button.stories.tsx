import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return (
      <div>
        <Button>Default</Button>
        <br />
        <Button disabled>Disabled</Button>
        <br />
        <Button fullWidth>Full Width</Button>
      </div>
    );
  },
};

export const CustomStyle: Story = {
  render: (args) => {
    const styles = {
      root: {
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'green',
        },
      },
    };
    return <Button>Custom Style Button</Button>;
  },
};
