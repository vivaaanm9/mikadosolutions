import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-900 text-white hover:bg-slate-800":
            variant === "secondary",

          "border border-slate-300 bg-white hover:bg-slate-50":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}