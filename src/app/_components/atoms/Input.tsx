import React, { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const base =
      "block w-full px-3 py-2 text-sm placeholder-gray-400 bg-white text-background-950 transition-colors disabled:opacity-50 border-b-2 focus:outline-none focus:ring-0";
    const stateClasses = error
      ? "border-red-500 focus:border-red-700"
      : "border-secondary-950 focus:border-secondary-600";

    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-1 text-sm font-medium text-secondary-950">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`${base} ${stateClasses} ${className}`}
          aria-invalid={Boolean(error)}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;