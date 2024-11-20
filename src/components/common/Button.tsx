import React from "react";
import { type ButtonPropsType } from "../../types";

const Button: React.FC<ButtonPropsType> = ({
  children,
  type,
  ...delegatedProps
}) => {
  return (
    <button type={type} {...delegatedProps}>
      {children}
    </button>
  );
};

export default Button;
