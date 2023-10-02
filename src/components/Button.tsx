import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex justify-center items-center gap-2 rounded-md font-medium text-sm transition-colors outline-none disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    size: {
      default: "h-10 py-2 px-6",
      sm: "h-9 px-2",
      lg: "h-12 px-5",
    },
    variant: {
      default:
        "bg-gray-900 text-white dark:bg-gray-100 dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300",
      outline:
        "bg-transparent text-black border border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-slate-700 dark:hover:bg-slate-800",
      ghost:
        "bg-transparent border-none hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800",
    },
    disable: {
      true: "mouse-block hover:none opacity-50",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, disable, className, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
