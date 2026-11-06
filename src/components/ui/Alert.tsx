import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface AlertProps {
  variant?: 'error' | 'warning' | 'success' | 'info';
  size?: 'inline' | 'banner';
  title?: string;
  children: React.ReactNode;
}

export const Alert = ({ variant = 'info', size = 'inline', title, children }: AlertProps) => {
  const variants = {
    error: {
      bg: 'bg-error-dim/20',
      border: 'border-error',
      text: 'text-error',
      icon: AlertCircle
    },
    warning: {
      bg: 'bg-warning-dim/20',
      border: 'border-warning',
      text: 'text-warning',
      icon: AlertTriangle
    },
    success: {
      bg: 'bg-success-dim/20',
      border: 'border-success',
      text: 'text-success',
      icon: CheckCircle2
    },
    info: {
      bg: 'bg-info-dim/20',
      border: 'border-info',
      text: 'text-info',
      icon: Info
    }
  };

  const style = variants[variant];
  const Icon = style.icon;

  if (size === 'banner') {
    return (
      <div className={`w-full p-4 border-l-4 ${style.border} ${style.bg} flex items-start gap-3`}>
        <Icon className={`h-5 w-5 ${style.text} mt-0.5`} />
        <div className="flex-1">
          {title && <h4 className={`font-medium ${style.text} mb-1`}>{title}</h4>}
          <div className="text-sm text-text-primary">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 text-sm ${style.text}`}>
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
};
