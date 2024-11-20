import React from "react";

import Button from "./common/Button";
import { ProviderButtonPropsType } from "../types/index";

const ProviderButton: React.FC<ProviderButtonPropsType> = ({
  providerName,
  children,
}) => {
  console.log(providerName);

  return <Button type={"button"}>{children}</Button>;
};

export default ProviderButton;
