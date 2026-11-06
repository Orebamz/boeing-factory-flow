import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  recentOptions?: DropdownOption[];
}

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  disabled,
  recentOptions
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === value) || recentOptions?.find(opt => opt.value === value);

  const handleSelect = (val: string) => {
    if (onChange) onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full h-12 px-3 py-2 
          bg-bg-surface border rounded-md text-sm text-left
          focus:outline-none focus:ring-[3px] focus:ring-secondary/15 focus:border-secondary
          ${error ? 'border-error' : 'border-border-default'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-bg-elevated'}
          ${isOpen ? 'ring-[3px] ring-secondary/15 border-secondary' : ''}
        `}
        disabled={disabled}
      >
        <span className={selectedOption ? 'text-text-primary' : 'text-text-disabled'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {error && <p className="mt-1 text-xs text-error">{error}</p>}

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-bg-elevated border border-border-default rounded-md shadow-lg max-h-60 overflow-auto">
          {recentOptions && recentOptions.length > 0 && (
            <div className="border-b border-border-subtle">
              <div className="px-3 py-2 text-xs font-medium text-text-secondary uppercase tracking-wider">
                Recent
              </div>
              {recentOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="flex items-center justify-between px-3 py-2 text-sm text-text-primary cursor-pointer hover:bg-bg-overlay"
                >
                  {option.label}
                  {value === option.value && <Check className="h-4 w-4 text-primary" />}
                </div>
              ))}
            </div>
          )}
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="flex items-center justify-between px-3 py-2 text-sm text-text-primary cursor-pointer hover:bg-bg-overlay"
              >
                {option.label}
                {value === option.value && <Check className="h-4 w-4 text-primary" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
