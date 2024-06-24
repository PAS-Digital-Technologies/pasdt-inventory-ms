import React from "react";
import { Controller } from "react-hook-form";

function ControlledInput({
  min = null,
  control,
  name,
  label = null,
  type,
  icon,
  defaultValue,
  width = null,
  readOnly = false,
  placeholder,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="mb-4 w-full relative">
          {label && (
            <label
              htmlFor={name}
              className="text-gray-600 font-semibold text-sm "
            >
              {label?.substring(0, label?.length - 1)}
              <span
                className={
                  label[label?.length - 1] === "*"
                    ? "text-red-500"
                    : "text-inherit"
                }
              >
                {label[label?.length - 1]}
              </span>
            </label>
          )}
          <input
            id={name}
            readOnly={readOnly}
            // value={defaultValue}
            className={` w-full outline-none p-2 rounded-sm  outline-gray-300 ${
              label && "mt-1"
            }`}
            type={type}
            {...field}
            defaultValue={defaultValue ? defaultValue : ""}
            placeholder={placeholder}
          />

          {icon && <div className="absolute right-4 top-3 ">{icon}</div>}

          {fieldState.error?.message && (
            <span className="text-xs text-red-600 ml-1 font-semibold ">
              {fieldState.error?.message}
            </span>
          )}
        </div>
      )}
      defaultValue={defaultValue ? defaultValue : ""}
    />
  );
}

export default ControlledInput;
