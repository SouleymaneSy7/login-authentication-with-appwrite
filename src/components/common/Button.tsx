import React from "react";
import { type ButtonPropsType } from "../../types";

const Button: React.FC<ButtonPropsType> = ({
  children,
  type,
  ...delegatedProps
}) => {
  return (
    <button
      type={type}
      className="w-full h-[42px] rounded-border-radius-sm bg-dark-bg-clr text-white-text-clr font-fw-semi-bold mt-10 text-fs-body tracking-tighter lg:h-[52px]"
      {...delegatedProps}
    >
      {children}
    </button>
  );
};

export default Button;
