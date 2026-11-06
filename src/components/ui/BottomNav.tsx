import React from 'react';
import { Home, List, Scan, Bell, Settings } from 'lucide-react';

export const BottomNav = () => {
  return (
    <div className="w-full bg-bg-elevated border-t border-border-default pb-safe">
      <div className="flex items-center justify-between px-2 h-16 relative">
        <NavTab icon={Home} label="Home" active />
        <NavTab icon={List} label="Tasks" />
        
        {/* FAB Container */}
        <div className="relative -top-6">
          <button className="
            flex flex-col items-center justify-center w-14 h-14 
            bg-secondary rounded-full shadow-lg border-4 border-bg-base
            text-white hover:bg-secondary-hover active:bg-secondary-pressed transition-colors
          ">
            <Scan className="h-6 w-6" />
          </button>
        </div>

        <NavTab icon={Bell} label="Alerts" badge="3" />
        <NavTab icon={Settings} label="Settings" />
      </div>
    </div>
  );
};

const NavTab = ({ icon: Icon, label, active, badge }: { icon: any, label: string, active?: boolean, badge?: string }) => (
  <button className={`
    flex-1 flex flex-col items-center justify-center gap-1 h-full
    ${active ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}
  `}>
    <div className="relative">
      <Icon className="h-6 w-6" />
      {badge && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </div>
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);
