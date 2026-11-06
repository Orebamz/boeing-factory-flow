import React from 'react';
import { X, AlertTriangle, Check } from 'lucide-react';

export const Screen4_4 = () => {
  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-xl shadow-2xl flex items-center justify-center shrink-0">
      
      {/* Dimmed Background (Simulated Dashboard) */}
      <div className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm z-0"></div>

      {/* Modal Container */}
      <div className="w-[560px] max-h-[90%] bg-bg-elevated border border-border-default rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-border-subtle flex justify-between items-start">
          <div>
            <h2 className="font-sans font-semibold text-[18px] text-text-primary mb-1">Reassign Task</h2>
            <p className="font-mono text-[13px] text-text-secondary">WO-27891 · Hydraulic Line Routing</p>
          </div>
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary -mt-2 -mr-2 rounded-full hover:bg-bg-surface transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          
          {/* Current Assignment */}
          <div className="mb-6">
            <h3 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider font-semibold mb-3">Currently Assigned To</h3>
            <div className="flex items-center gap-4 bg-bg-surface border border-border-subtle rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-info font-sans text-[14px] font-medium shrink-0">
                SC
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-sans font-semibold text-[14px] text-text-primary">Sarah Chen</span>
                  <span className="font-sans text-[13px] text-text-secondary">· Station 1A</span>
                  <div className="h-[20px] px-2 rounded-full bg-[#450A0A] text-error font-sans font-medium text-[11px] flex items-center ml-auto">Blocked</div>
                </div>
                <p className="font-sans text-[12px] text-error">Blocked since 12:47 — awaiting parts P-737-5512</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-border-subtle flex-1"></div>
            <span className="font-sans text-[12px] text-text-secondary px-4 bg-bg-elevated">Reassign to</span>
            <div className="h-px bg-border-subtle flex-1"></div>
          </div>

          {/* Available Technicians */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider font-semibold">Available Technicians</h3>
              <span className="font-sans text-[12px] text-text-secondary">4 available</span>
            </div>

            <div className="space-y-2">
              {/* Option 1 (Selected) */}
              <div className="bg-sky-100/20 border border-secondary rounded-lg p-3 cursor-pointer relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-secondary"></div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-secondary bg-bg-elevated shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-semibold text-[14px] text-text-primary">David Jackson</span>
                      <span className="font-sans text-[13px] text-text-secondary">· Station 12D</span>
                      <div className="h-[20px] px-2 rounded bg-[#14532D] text-success font-sans font-medium text-[10px] flex items-center ml-auto">Low workload</div>
                    </div>
                    <p className="font-sans text-[12px] text-text-secondary mb-1">Current task: WO-28301 · 15% complete · 2h remaining</p>
                    <p className="font-sans text-[12px] text-success mb-2">Compatible with Station 1A equipment</p>
                    <div className="flex gap-2">
                      <span className="font-sans text-[11px] text-text-secondary bg-bg-surface px-2 py-0.5 rounded border border-border-default flex items-center gap-1">Hydraulics <Check className="w-3 h-3 text-success" /></span>
                      <span className="font-sans text-[11px] text-text-secondary bg-bg-surface px-2 py-0.5 rounded border border-border-default flex items-center gap-1">Assembly <Check className="w-3 h-3 text-success" /></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 cursor-pointer hover:border-border-default transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-border-default bg-bg-base shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-semibold text-[14px] text-text-primary">Carlos Rodriguez</span>
                      <span className="font-sans text-[13px] text-text-secondary">· Station 10A</span>
                      <div className="h-[20px] px-2 rounded bg-[#451A03] text-warning font-sans font-medium text-[10px] flex items-center ml-auto">Medium workload</div>
                    </div>
                    <p className="font-sans text-[12px] text-text-secondary mb-2">Current task: WO-28089 · 25% complete · 1.5h remaining</p>
                    <div className="flex gap-2">
                      <span className="font-sans text-[11px] text-text-secondary bg-bg-base px-2 py-0.5 rounded border border-border-default flex items-center gap-1">Hydraulics <Check className="w-3 h-3 text-success" /></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 cursor-pointer hover:border-border-default transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-border-default bg-bg-base shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans font-semibold text-[14px] text-text-primary">Brian Kim</span>
                      <span className="font-sans text-[13px] text-text-secondary">· Station 11C</span>
                      <div className="h-[20px] px-2 rounded bg-[#450A0A] text-error font-sans font-medium text-[10px] flex items-center ml-auto">High workload</div>
                    </div>
                    <p className="font-sans text-[12px] text-text-secondary mb-2">Blocked station — may be available soon</p>
                    <div className="flex gap-2">
                      <span className="font-sans text-[11px] text-text-secondary bg-bg-base px-2 py-0.5 rounded border border-border-default flex items-center gap-1">Hydraulics <Check className="w-3 h-3 text-success" /></span>
                      <span className="font-sans text-[11px] text-text-secondary bg-bg-base px-2 py-0.5 rounded border border-border-default flex items-center gap-1">Inspection <Check className="w-3 h-3 text-success" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reassignment Impact */}
          <div className="bg-[#451A03]/20 border border-warning rounded-md p-3 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans font-semibold text-[13px] text-warning mb-1">Reassignment impact</h4>
              <p className="font-sans text-[12px] text-text-primary mb-1">WO-28301 (D. Jackson) will be paused and rescheduled</p>
              <p className="font-sans text-[12px] text-text-secondary">Estimated delay: 45 minutes to WO-28301 completion</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-border-subtle flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3">
            <button className="h-[56px] px-6 bg-transparent border border-border-default rounded-md text-text-primary font-sans text-[16px] font-medium hover:bg-bg-surface transition-colors">
              Cancel
            </button>
            <button className="h-[56px] px-6 bg-secondary rounded-md text-white font-sans text-[16px] font-medium hover:bg-secondary-hover transition-colors">
              Confirm Reassignment
            </button>
          </div>
          <p className="font-sans text-[11px] text-text-secondary">Sarah Chen will be notified and reassigned to standby</p>
        </div>

      </div>
    </div>
  );
};
