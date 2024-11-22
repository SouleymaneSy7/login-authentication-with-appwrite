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
      <label htmlFor={inputID} className="font-fw-semi-bold">
        {inputLabel}
      </label>

      <Inputs
        id={inputID}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputSetter}
        aria-describedby={inputID}
        autoComplete={inputType === "password" ? "true" : "false"}
        className={
          errors
            ? "focus-visible:outline-none w-full h-[42px] lg:h-[52px] text-red-clr bg-input-errors-bg-clr border-2 border-red-clr font-fw-semi-bold placeholder:font-fw-regular placeholder:text-input-text-clr  px-[14px] rounded-border-radius-sm"
            : "w-full h-[42px] lg:h-[52px] bg-input-bg-clr text-dark-text-clr border-2 border-transparent font-fw-semi-bold placeholder:font-fw-regular placeholder:text-input-text-clr  px-[14px] rounded-border-radius-sm"
        }
      />

      {errors && (
        <span
          id={inputID}
          role="alert"
          className="text-red-clr text-fs-errors font-fw-semi-bold -mt-1"
        >
          {errors}
          <VisuallyHidden>{errors}</VisuallyHidden>
        </span>
      )}
    </div>
  );
};

export default FormInput;
