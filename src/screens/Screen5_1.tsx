import React from 'react';
import { Smartphone, Zap, Bell } from 'lucide-react';
import { Logo } from '../components/docs/Logo';

export const Screen5_1 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Dimmed Dashboard Background (Simulated) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-[88px] bg-bg-elevated border-b border-border-subtle"></div>
        <div className="p-4 space-y-4">
          <div className="h-[120px] bg-bg-surface rounded-xl border border-border-subtle"></div>
          <div className="h-[120px] bg-bg-surface rounded-xl border border-border-subtle"></div>
          <div className="h-[120px] bg-bg-surface rounded-xl border border-border-subtle"></div>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-elevated rounded-t-[24px] z-20 flex flex-col pb-safe">
        {/* Drag Handle */}
        <div className="w-full flex justify-center pt-3 pb-4">
          <div className="w-12 h-1.5 bg-border-default rounded-full"></div>
        </div>

        <div className="px-6 pb-8 flex flex-col items-center">
          {/* Logo & Header */}
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
            <Logo size={32} />
          </div>
          <h2 className="font-mono font-bold text-[18px] text-text-primary mb-1">FactoryFlow</h2>
          <p className="font-sans text-[13px] text-text-secondary mb-6 text-center">Boeing Manufacturing Execution System</p>

          {/* Feature List */}
          <div className="w-full mb-8">
            <div className="flex items-center gap-4 h-[48px] border-b border-border-subtle">
              <Smartphone className="w-5 h-5 text-primary shrink-0" />
              <span className="font-sans text-[14px] text-text-primary">Works offline — access tasks without network</span>
            </div>
            <div className="flex items-center gap-4 h-[48px] border-b border-border-subtle">
              <Zap className="w-5 h-5 text-warning shrink-0" />
              <span className="font-sans text-[14px] text-text-primary">Faster than browser — native app performance</span>
            </div>
            <div className="flex items-center gap-4 h-[48px] border-b border-border-subtle">
              <Bell className="w-5 h-5 text-error shrink-0" />
              <span className="font-sans text-[14px] text-text-primary">Push notifications for critical task alerts</span>
            </div>
          </div>

          {/* Actions */}
          <div className="w-full space-y-3 mb-6">
            <button className="w-full h-[56px] bg-secondary hover:bg-secondary/90 text-white font-sans font-medium text-[16px] rounded-lg transition-colors">
              Add to Home Screen
            </button>
            <button className="w-full h-[44px] bg-transparent text-text-secondary hover:text-text-primary font-sans font-medium text-[14px] rounded-lg transition-colors">
              Continue in Browser
            </button>
          </div>

          {/* Footer Pill */}
          <div className="h-[24px] px-3 bg-sky-100/20 rounded-full flex items-center justify-center">
            <span className="font-sans text-[11px] font-medium text-primary">Recommended for factory floor use</span>
          </div>
        </div>
      </div>
    </div>
  );
};
