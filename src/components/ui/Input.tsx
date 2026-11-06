import React from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  smartDefault?: boolean;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, helperText, error, success, smartDefault, leftIcon, ...props }, ref) => {
    
    const baseInputStyles = "flex h-12 w-full rounded-md border bg-bg-surface px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-disabled focus-visible:outline-none focus-visible:border-secondary focus-visible:ring-[3px] focus-visible:ring-secondary/15 disabled:cursor-not-allowed disabled:opacity-50 transition-all";
    
    let stateStyles = "border-border-default text-text-primary";
    if (error) stateStyles = "border-error text-error focus-visible:border-error focus-visible:ring-[3px] focus-visible:ring-error/15";
    else if (success) stateStyles = "border-success text-success focus-visible:border-success focus-visible:ring-[3px] focus-visible:ring-success/15";
    else if (smartDefault) stateStyles = "border-sky-300 text-sky-600 bg-sky-100/50";

    return (
      <div className="space-y-2 w-full">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-secondary">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`${baseInputStyles} ${stateStyles} ${leftIcon ? 'pl-10' : ''} ${className}`}
            {...props}
          />
          {smartDefault && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-xs text-sky-600 font-mono bg-sky-100 border border-sky-300 px-1.5 py-0.5 rounded">AUTO</span>
            </div>
          )}
          {success && !smartDefault && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-success">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          )}
          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-error">
              <AlertCircle className="h-4 w-4" />
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-error flex items-center mt-1">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p className="text-xs text-text-secondary mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
