import { useState } from "react";

const InputField = ({
  label,
  hint,
  error,
  disabled = false,
  icon,
  className = "",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const filled = rest.value !== null && rest.value !== "";
  const hasError = Boolean(error);

  const borderColor = hasError
    ? "border-red-600 focus:border-red-600 focus:ring-red-600"
    : "border-neutral-500 focus:border-indigo-500 focus:ring-indigo-500";
  const bgColor = disabled
    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
    : "bg-white text-gray-900";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label htmlFor="">{label}</label>}
      <div className={`relative flex items-center ${borderColor} ${bgColor}`}>
        {icon && <span>{icon}</span>}
      </div>
      <input
        className="flex-1 bg-transparent outline-none placeholder-gray-400 disabled:placeholder-gray-400"
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <div className="mt-1 min-h-[1rem] text-sm">
        {hasError ? (
          <p className="text-red-600">{error}</p>
        ) : (
          label && hint && <p className="text-gray-500">{hint}</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
