import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface BottomSheetProps {
  isOpen?: boolean;
  size?: 'sm' | 'md' | 'full';
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const BottomSheet = ({ isOpen = true, size = 'md', title, children, onClose }: BottomSheetProps) => {
  const heights = {
    sm: 'h-[40vh]',
    md: 'h-[60vh]',
    full: 'h-[90vh]'
  };

  return (
    <div className="relative w-full h-[600px] bg-bg-base border border-border-subtle overflow-hidden rounded-lg shadow-lg">
      {/* Backdrop simulation */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Sheet */}
      <div className={`
        absolute bottom-0 left-0 right-0 bg-bg-surface rounded-t-xl 
        flex flex-col shadow-2xl border-t border-border-subtle
        ${heights[size]}
      `}>
        {/* Drag Handle */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-border-default rounded-full" />
        </div>

        {/* Header */}
        <div className="px-4 py-3 border-b border-border-subtle flex items-center justify-between">
          <h3 className="type-heading-sm">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-bg-elevated rounded-full text-text-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border-subtle bg-bg-surface pb-safe">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
