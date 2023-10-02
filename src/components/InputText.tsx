import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, required, ...props }, ref) => {
    return (
      <label className="flex flex-col gap-1 text-sm font-medium cursor-text">
        <span>
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>

        <input
          type="text"
          className="w-full outline-none text-sm font-normal bg-transparent py-2.5 px-3 gap-2 border rounded-md  placeholder:text-slate-500 disabled:opacity-50 disabled:pointer-events-none dark:border-slate-700"
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

InputText.displayName = "InputText";
