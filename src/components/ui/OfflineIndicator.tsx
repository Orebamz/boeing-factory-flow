import React from 'react';
import { Wifi, WifiOff, RefreshCw, AlertTriangle } from 'lucide-react';

export type ConnectionStatus = 'online-synced' | 'online-syncing' | 'offline-queued' | 'sync-error';

interface OfflineIndicatorProps {
  status: ConnectionStatus;
}

export const OfflineIndicator = ({ status }: OfflineIndicatorProps) => {
  const configs = {
    'online-synced': {
      icon: Wifi,
      text: 'Online',
      subtext: 'Synced',
      color: 'text-success',
      bg: 'bg-success-dim/10 border-success-dim/20'
    },
    'online-syncing': {
      icon: RefreshCw,
      text: 'Syncing',
      subtext: 'Processing...',
      color: 'text-sky-600',
      bg: 'bg-sky-100 border-sky-300',
      animate: true
    },
    'offline-queued': {
      icon: WifiOff,
      text: 'Offline',
      subtext: 'Changes Queued',
      color: 'text-warning',
      bg: 'bg-warning-dim/10 border-warning-dim/20'
    },
    'sync-error': {
      icon: AlertTriangle,
      text: 'Sync Error',
      subtext: 'Tap to retry',
      color: 'text-error',
      bg: 'bg-error-dim/10 border-error-dim/20'
    }
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <div className={`
      flex items-center gap-3 px-3 py-2 rounded-md border
      ${config.bg}
    `}>
      <div className={`p-1.5 rounded-full bg-bg-base ${config.color}`}>
        <Icon className={`h-4 w-4 ${'animate' in config && config.animate ? 'animate-spin' : ''}`} />
      </div>
      <div className="flex flex-col">
        <span className={`type-label-xs font-bold ${config.color}`}>{config.text}</span>
        <span className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">
          {config.subtext}
        </span>
      </div>
    </div>
  );
};
