import React from 'react';
import { Loader2, WifiOff, RefreshCw } from 'lucide-react';

export type BadgeStatus = 'pending' | 'in-progress' | 'complete' | 'blocked' | 'requires-sign-off' | 'syncing' | 'offline';

interface BadgeProps {
  status: BadgeStatus;
  size?: 'sm' | 'lg';
  label?: string;
}

export const Badge = ({ status, size = 'sm', label }: BadgeProps) => {
  const styles = {
    pending: "bg-bg-elevated text-text-secondary border-border-default",
    'in-progress': "bg-sky-100 text-sky-600 border-sky-300",
    complete: "bg-success-dim text-success border-transparent",
    blocked: "bg-error-dim text-error border-transparent",
    'requires-sign-off': "bg-warning-dim text-warning border-transparent",
    syncing: "bg-sky-100 text-sky-600 border-sky-300",
    offline: "bg-warning-dim text-caution border-transparent",
  };

  const icons = {
    pending: null,
    'in-progress': null,
    complete: null,
    blocked: null,
    'requires-sign-off': null,
    syncing: <span className="relative flex h-2 w-2 mr-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span></span>,
    offline: <WifiOff className="h-3 w-3 mr-1.5" />,
  };

  const defaultLabels = {
    pending: 'Pending',
    'in-progress': 'In Progress',
    complete: 'Complete',
    blocked: 'Blocked',
    'requires-sign-off': 'Sign-off Req',
    syncing: 'Syncing',
    offline: 'Offline',
  };

  const sizeStyles = {
    sm: "h-6 px-2 text-xs", // 24px
    lg: "h-8 px-3 text-sm", // 32px
  };

  return (
    <span className={`
      inline-flex items-center justify-center font-medium rounded-full border
      ${styles[status]} 
      ${sizeStyles[size]}
    `}>
      {icons[status]}
      {label || defaultLabels[status]}
    </span>
  );
};
