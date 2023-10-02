import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const spinnerVariants = tv({
  base: "flex justify-center items-center rounded-full border border-2  animate-[spin_1000ms_linear_infinite]",
  variants: {
    variant: {
      default:
        "border-slate-200 border-t-transparent dark:border-slate-700 dark:border-t-transparent",
      secondary:
        "border-slate-700 border-t-transparent dark:border-slate-200  dark:border-t-transparent ",
    },
    size: {
      default: "w-4 h-4",
      sm: "w-3 h-3",
      lg: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface SpinnerProps
  extends React.BaseHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ variant, size, className, ...props }: SpinnerProps) {
  return <span className={spinnerVariants({ variant, size, className })} {...props} />;
}
