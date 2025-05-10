import { useState } from "react";

const InputField = ({
  label,
  hint,
  disabled = false,
  error,
  icon,
  select,
  defaultOption,
  selectOptions,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4">
      {label && <label className="block mb-1">{label}</label>}

      <div
        className={`flex bg-neutral-100 items-center border px-2 py-2 rounded-lg outline-none ${
          isFocused
            ? "border-blue-500 ring ring-blue-500/30"
            : error
            ? "border-red-500 ring ring-red-500/30"
            : "border-neutral-200"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {icon && <div className="mr-2">{icon}</div>}
        {select ? (
          <select 
          className="text-base focus:outline-none w-full rounded-md border-neutral-300 text-neutral-500"
          disabled={disabled}
          {...rest}>
            <option value="">
              {defaultOption}
            </option>
            {selectOptions.map((option) => (
              <option key={option.code} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="text-base w-full focus:outline-none"
            disabled={disabled}
            {...rest}
          />
        )}
      </div>

      {hint && <p className="text-sm text-gray-500">{hint}</p>}

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
