import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from ".";
import { ButtonProps } from "./Button.types";

export default {
  title: "Vendition/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
  disabled: false,
  children: 'Button Inverse',
  type: "button",
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'small',
  type: 'button',
  children: "Button example Danger",
  inverse: true,
  disabled: false
};