import React from 'react';
import { RefreshCw, Menu, Search, Bell, Filter, ChevronRight } from 'lucide-react';

export const Screen5_3 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      
      {/* Update Banner */}
      <div className="w-full bg-bg-elevated border-b-2 border-secondary p-3 flex items-center justify-between z-30 relative">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-primary" />
          <div>
            <h3 className="font-sans text-[13px] font-semibold text-text-primary">Update available — v1.4.2</h3>
            <p className="font-sans text-[12px] text-text-secondary">New: Offline inspection forms + bug fixes</p>
          </div>
        </div>
        <button className="h-[44px] px-3 text-primary font-sans font-medium text-[13px] hover:bg-secondary/10 rounded-md transition-colors">
          Update Now
        </button>
      </div>

      {/* Dashboard Content (Dimmed) */}
      <div className="flex-1 opacity-40 pointer-events-none flex flex-col">
        {/* Header */}
        <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-4">
          <Menu className="w-6 h-6 text-text-primary" />
          <span className="font-sans text-[16px] font-semibold text-text-primary">My Tasks</span>
          <div className="flex gap-4">
            <Search className="w-5 h-5 text-text-secondary" />
            <Bell className="w-5 h-5 text-text-secondary" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="h-[48px] bg-bg-base border-b border-border-subtle flex items-center px-4 gap-3">
          <Filter className="w-4 h-4 text-text-secondary" />
          <div className="flex gap-2 overflow-x-hidden">
            <div className="h-[28px] px-3 rounded-full bg-bg-elevated border border-border-default text-text-primary font-sans text-[12px] flex items-center">All Tasks</div>
            <div className="h-[28px] px-3 rounded-full bg-bg-surface border border-border-default text-text-secondary font-sans text-[12px] flex items-center">In Progress</div>
            <div className="h-[28px] px-3 rounded-full bg-bg-surface border border-border-default text-text-secondary font-sans text-[12px] flex items-center">Pending</div>
          </div>
        </div>

        {/* Task List */}
        <div className="p-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-bg-surface border border-border-subtle rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono text-[14px] font-bold text-text-primary">WO-2847{i}</span>
                <span className="font-sans text-[12px] text-text-secondary">14:30</span>
              </div>
              <h3 className="font-sans text-[15px] text-text-primary mb-3">Fuselage Panel Assembly</h3>
              <div className="flex items-center justify-between">
                <div className="h-[24px] px-2 rounded bg-sky-100/20 text-primary font-sans text-[11px] font-medium flex items-center">
                  In Progress
                </div>
                <ChevronRight className="w-5 h-5 text-text-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Modal Overlay */}
      <div className="absolute inset-0 bg-black/60 z-40 flex items-center justify-center p-4">
        <div className="absolute top-4 left-4 bg-bg-elevated/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-text-secondary uppercase tracking-wider border border-border-subtle">
          Update Modal
        </div>
        
        <div className="w-[320px] bg-bg-elevated rounded-xl border border-border-default shadow-2xl overflow-hidden flex flex-col">
          <div className="p-6 pb-4 flex flex-col items-center border-b border-border-subtle">
            <h2 className="font-mono font-bold text-[18px] text-text-primary mb-2">FactoryFlow v1.4.2</h2>
            <div className="h-[24px] px-3 bg-bg-surface border border-border-default rounded-full flex items-center">
              <span className="font-mono text-[12px] text-text-secondary">Current: v1.3.8 → New: v1.4.2</span>
            </div>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-[10px]">✦</span>
                <span className="font-sans text-[13px] text-text-primary leading-snug">Offline inspection forms — complete inspections without network</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-[10px]">✦</span>
                <span className="font-sans text-[13px] text-text-primary leading-snug">Smart sync — automatic background data sync every 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-[10px]">✦</span>
                <span className="font-sans text-[13px] text-text-primary leading-snug">Improved task card swipe actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-[10px]">✦</span>
                <span className="font-sans text-[13px] text-text-primary leading-snug">Performance improvements — 40% faster load time</span>
              </li>
            </ul>
            
            <p className="font-sans text-[11px] text-text-secondary text-center mb-4">
              Update size: 2.4 MB · WiFi recommended
            </p>
            
            <div className="space-y-2">
              <button className="w-full h-[56px] bg-secondary hover:bg-secondary/90 text-white font-sans font-medium text-[16px] rounded-lg transition-colors">
                Update Now
              </button>
              <button className="w-full h-[44px] bg-transparent text-text-secondary hover:text-text-primary font-sans font-medium text-[14px] rounded-lg transition-colors">
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
