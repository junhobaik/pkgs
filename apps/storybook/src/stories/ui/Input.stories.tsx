import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@junhobaik/ui';
import '@junhobaik/ui/css';

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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    isLoading: true,
    startContent: 's-',
    endContent: '-e',
  },
};
