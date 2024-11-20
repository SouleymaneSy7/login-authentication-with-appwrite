import React from "react";
import { type InputsPropsType } from "../../types";

const Inputs: React.FC<InputsPropsType> = ({ id, type, ...delegatedProps }) => {
  return <input id={id} type={type} {...delegatedProps} />;
};

export default Inputs;
