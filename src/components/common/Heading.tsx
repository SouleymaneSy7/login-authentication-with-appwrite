import React from "react";
import { type HeadingPropsType } from "../../types";

const Heading: React.FC<HeadingPropsType> = ({
  level,
  children,
  ...delegatedProps
}) => {
  const Heading: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...delegatedProps
  }) => {
    return React.createElement(level, delegatedProps, children);
  };

  return <Heading {...delegatedProps}>{children}</Heading>;
};

export default Heading;
