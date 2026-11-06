import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import { Logo } from '../components/docs/Logo';

export const Screen5_2 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-[#050608] relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      
      {/* Lock Screen Header */}
      <div className="pt-20 pb-12 flex flex-col items-center">
        <h1 className="font-sans font-light text-[72px] text-text-primary leading-none tracking-tight">14:32</h1>
        <p className="font-sans text-[18px] text-text-primary mt-2">Wednesday, October 24</p>
      </div>

      {/* Notifications Area */}
      <div className="px-4 space-y-3 relative z-10">
        
        {/* Notification 1 - Success */}
        <div className="bg-bg-elevated/90 backdrop-blur-md border border-border-subtle rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center">
                <Logo size={14} />
              </div>
              <span className="font-sans text-[13px] font-semibold text-text-primary">FactoryFlow</span>
            </div>
            <span className="font-sans text-[12px] text-text-secondary">now</span>
          </div>
          
          <div className="pl-7">
            <h3 className="font-sans text-[15px] font-semibold text-text-primary mb-1 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-success" />
              5 tasks synced successfully
            </h3>
            <p className="font-sans text-[13px] text-text-secondary leading-snug">
              WO-28471, WO-28392 and 3 others updated
            </p>
          </div>
        </div>

        {/* Notification 2 - Warning */}
        <div className="bg-bg-elevated/90 backdrop-blur-md border border-border-subtle rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center">
                <Logo size={14} />
              </div>
              <span className="font-sans text-[13px] font-semibold text-text-primary">FactoryFlow</span>
            </div>
            <span className="font-sans text-[12px] text-text-secondary">2 min ago</span>
          </div>
          
          <div className="pl-7">
            <h3 className="font-sans text-[15px] font-semibold text-warning mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Critical task overdue — WO-28471
            </h3>
            <p className="font-sans text-[13px] text-text-secondary leading-snug">
              Fuselage Panel Inspection due 14:30 · Tap to open
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 h-[44px] bg-secondary/20 text-primary font-sans font-medium text-[14px] rounded-full border border-secondary/30">
            Open FactoryFlow
          </button>
          <button className="flex-1 h-[44px] bg-bg-surface/50 text-text-secondary font-sans font-medium text-[14px] rounded-full border border-border-subtle">
            Dismiss
          </button>
        </div>

      </div>

      {/* Slide to unlock hint */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center">
        <p className="font-sans text-[14px] text-text-secondary animate-pulse">Slide to unlock</p>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-0 w-full flex justify-center pb-1">
        <div className="w-[134px] h-[5px] bg-text-primary rounded-full opacity-50"></div>
      </div>
    </div>
  );
};
