import React, { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white border border-transparent hover:bg-primary-700 active:scale-95 focus:ring-transparent",
  secondary:
    "bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:scale-95 focus:ring-transparent",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-button",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md transition duration-150 ease-linear select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

const DISABLED_CLASSES = "opacity-60 pointer-events-none";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      disabled = false,
      className,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const classes = cn(
      BASE_CLASSES,
      VARIANT_CLASSES[variant],
      SIZE_CLASSES[size],
      disabled && DISABLED_CLASSES,
      className
    );

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;