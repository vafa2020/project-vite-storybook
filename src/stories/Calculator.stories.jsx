import React from "react";
import { Calculator } from "./Calculator";
export default {
  title: "Example/Calculator",
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;
export const Blue_Calculator = Template.bind({});
Blue_Calculator.args = {
  color: "blue",
  title: "Blue_Calculator",
};
export const Red_Calculator = Template.bind({});
Red_Calculator.args = {
  color: "red",
  title: "Red_Calculator",
};
export const Black_Calculator = Template.bind({});
Black_Calculator.args = {
  color: "black",
  title: "Black_Calculator",
};
