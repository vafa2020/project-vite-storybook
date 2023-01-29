import React from "react";
import { InputCalc } from "./InputCalc";

export default {
  title: "InputCalc",
  component: InputCalc,

};

const Template = (args) => <InputCalc {...args} />;
export const Input_Calc = Template.bind({});
Input_Calc.args = {
  color: "blue",
  size:"50",
  arz:"دلار"
};
