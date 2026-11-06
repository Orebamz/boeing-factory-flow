import React from 'react';
import { Inbox, WifiOff, SearchX, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  type: 'no-tasks' | 'no-network' | 'no-results' | 'sync-required';
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ type, message, actionLabel, onAction }: EmptyStateProps) => {
  const configs = {
    'no-tasks': {
      icon: Inbox,
      title: 'All Caught Up',
      defaultMessage: 'There are no pending tasks assigned to your station.',
      defaultAction: 'Refresh Tasks'
    },
    'no-network': {
      icon: WifiOff,
      title: 'You are Offline',
      defaultMessage: 'Check your connection or continue working in offline mode.',
      defaultAction: 'Open Offline Settings'
    },
    'no-results': {
      icon: SearchX,
      title: 'No Results Found',
      defaultMessage: 'Try adjusting your search filters or ID.',
      defaultAction: 'Clear Filters'
    },
    'sync-required': {
      icon: RefreshCw,
      title: 'Sync Required',
      defaultMessage: 'Last sync was over 24 hours ago. Please sync to continue.',
      defaultAction: 'Sync Now'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-border-subtle rounded-lg bg-bg-surface/50">
      <div className="p-4 bg-bg-elevated rounded-full mb-4">
        <Icon className="h-8 w-8 text-text-secondary" />
      </div>
      <h3 className="type-heading-sm text-text-primary mb-2">{config.title}</h3>
      <p className="type-body-sm text-text-secondary max-w-xs mb-6">
        {message || config.defaultMessage}
      </p>
      {actionLabel || config.defaultAction ? (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel || config.defaultAction}
        </Button>
      ) : null}
    </div>
  );
};
