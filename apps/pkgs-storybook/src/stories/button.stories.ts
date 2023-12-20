import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "react-components";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: "test",
  },
};
