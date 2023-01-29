import React from "react";
import { ButtonCalc } from "./ButtonCalc";

export default {
  title: "example",
  component: ButtonCalc,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    width: { control: "text" },
  },
};

export const ButtonCalcComponent = (args) => <ButtonCalc {...args} />;

export const NumberButton = ButtonCalcComponent.bind({});
NumberButton.args = {
  content: "Number",
  primary: true,
};
export const OperatorButton = ButtonCalcComponent.bind({});
OperatorButton.args = {
  content: "Operator",
};

export const Primary = ButtonCalcComponent.bind({});
Primary.args = {
  primary: true,
  content: "Button",
};
export const Secondary = ButtonCalcComponent.bind({});
Secondary.args = {
  content: "Button",
};
export const Small = ButtonCalcComponent.bind({});
Small.args = {
  size: "small",
  content: "Button",
};
export const Medium = ButtonCalcComponent.bind({});
Medium.args = {
  size: "medium",
  content: "Button",
};
export const Large = ButtonCalcComponent.bind({});
Large.args = {
  size: "large",
  content: "Button",
};
