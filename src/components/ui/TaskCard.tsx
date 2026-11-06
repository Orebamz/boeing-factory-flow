import React from 'react';
import { Clock, AlertCircle, CheckCircle2, Lock } from 'lucide-react';
import { Badge, BadgeStatus } from './Badge';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'normal' | 'low';
  status: BadgeStatus;
  timestamp?: string;
}

export const TaskCard = ({ id, title, description, priority, status, timestamp }: TaskCardProps) => {
  const priorityColors = {
    critical: 'border-l-error',
    high: 'border-l-warning',
    normal: 'border-l-info',
    low: 'border-l-border-default',
  };

  return (
    <div className={`
      bg-bg-surface border border-border-default rounded-md p-4 
      border-l-4 ${priorityColors[priority]} 
      hover:bg-bg-elevated transition-colors cursor-pointer
    `}>
      <div className="flex justify-between items-start mb-2">
        <span className="type-label-xs text-text-secondary font-mono">{id}</span>
        <Badge status={status} />
      </div>
      <h4 className="type-heading-sm mb-1 text-text-primary">{title}</h4>
      <p className="type-body-sm text-text-secondary mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 text-text-secondary">
          <Clock className="h-3 w-3" />
          <span className="type-label-xs">{timestamp || 'Just now'}</span>
        </div>
        {priority === 'critical' && (
          <span className="type-label-xs text-error font-bold flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> CRITICAL
          </span>
        )}
      </div>
    </div>
  );
};
