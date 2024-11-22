import React from "react";

import Inputs from "./common/Inputs";
import { type FormInputPropsType } from "../types";
import VisuallyHidden from "./common/VisuallyHidden";

const FormInput: React.FC<FormInputPropsType> = ({
  ID,
  inputType,
  inputPlaceholder,
  inputValue,
  inputLabel,
  inputSetter,
  errors,
}) => {
  const id = React.useId();
  const inputID = `${ID}-${id}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputID}>{inputLabel}</label>

      <Inputs
        id={inputID}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputSetter}
        aria-describedby={inputID}
        required
        autoComplete={inputType === "password" ? "true" : "false"}
      />

      {errors && (
        <span id={inputID} role="alert" className="text-red-clr">
          {errors}
          <VisuallyHidden>{errors}</VisuallyHidden>
        </span>
      )}
    </div>
  );
};

export default FormInput;
