import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Button",
  },
};

export const CustomStyle: Story = {
  render: (args) => {
    const styles = {
      root: {
        backgroundColor: "red",
        "&:hover": {
          backgroundColor: "green",
        },
      },
    };
    return <Button styles={styles}>Custom Style Button</Button>;
  },
};
