"use client";

import { ButtonSize, ButtonVariant, IButton } from "@/app/interface/common/button.interface";
import clsx from "clsx";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 hover:bg-blue-600 text-white border border-blue-500",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300",
  danger:
    "bg-red-500 hover:bg-red-600 text-white border border-red-500",
  outline:
    "bg-transparent hover:bg-gray-100 text-blue-500 border border-blue-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        "rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;