import React from 'react';
import { Check, AlertTriangle, ChevronRight, RefreshCw } from 'lucide-react';

export const Screen3_5 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-center shrink-0">
        <span className="font-sans text-[16px] font-semibold text-text-primary">Confirm Submission — WO-28471</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px]">
        {/* Completion Header */}
        <div className="flex flex-col items-center justify-center py-8 border-b border-border-subtle">
          <div className="w-16 h-16 rounded-full bg-[#14532D] flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h1 className="font-sans font-semibold text-[20px] text-text-primary mb-1">All Steps Complete</h1>
          <p className="font-sans text-[14px] text-text-secondary mb-2">WO-28471 · Fuselage Panel Inspection</p>
          <p className="font-mono text-[12px] text-text-secondary">Completed at 14:31 · Duration: 44 minutes</p>
        </div>

        {/* Summary Card */}
        <div className="p-4">
          <div className="bg-bg-surface border border-border-subtle rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-border-subtle bg-bg-elevated">
              <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Submission Summary</h3>
            </div>
            <div className="divide-y divide-border-subtle">
              <SummaryRow label="Steps Completed" value="9 of 9" />
              <SummaryRow label="Photos Captured" value="7" />
              <SummaryRow label="Measurements Logged" value="3 readings" />
              <SummaryRow label="Parts Confirmed" value="3 of 3" />
              <SummaryRow label="Technician Sign-off" value="J. Martinez" />
              <div className="flex items-center justify-between px-4 h-[44px]">
                <span className="font-sans text-[14px] text-text-secondary">Time to Complete</span>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[14px] text-text-primary">44 min</span>
                  <span className="font-sans text-[12px] text-primary">(⚡ 38% faster than avg)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discrepancy Check */}
        <div className="px-4 mb-6">
          <div className="bg-[#451A03]/20 border border-border-subtle border-l-[4px] border-l-warning rounded-lg p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <h4 className="font-sans font-semibold text-[14px] text-warning">1 item flagged for review</h4>
            </div>
            <p className="font-sans text-[13px] text-text-primary mb-1">Fastener F23 reading: 44.1 Nm — within spec but near lower limit</p>
            <p className="font-sans text-[12px] text-text-secondary">Recommended: Note in comments field</p>
          </div>
          <textarea 
            placeholder="Add note for supervisor (optional)" 
            className="w-full min-h-[56px] bg-bg-surface border border-border-default rounded-md p-3 font-sans text-[14px] text-text-primary focus:outline-none focus:border-secondary resize-y"
          ></textarea>
        </div>

        {/* Next Task Suggestion */}
        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Next Assigned Task</h3>
            <div className="h-[20px] px-2 rounded-full bg-sky-100 text-primary font-sans font-medium text-[11px] flex items-center">Auto-assigned</div>
          </div>
          
          <div className="w-full bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] border-l-warning p-3 mb-3">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[12px] text-text-secondary">WO-28392</span>
              <div className="h-[20px] px-2 rounded-full bg-[#451A03] text-warning font-sans font-medium text-[11px] flex items-center">High priority</div>
            </div>
            <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-2">Torque Verification — Wing Rib Assembly</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans text-[12px] text-text-secondary">📍 Station 7A</span>
              <span className="font-sans text-[12px] text-text-secondary">·</span>
              <span className="font-sans text-[12px] text-text-secondary">🕐 Due 15:00</span>
            </div>
          </div>
          
          <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md flex items-center justify-center gap-2 text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
            Navigate to Station 7A <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-elevated border-t border-border-subtle p-4 pb-safe z-20">
        <div className="flex items-center justify-center gap-2 mb-3">
          <RefreshCw className="w-3 h-3 text-text-secondary" />
          <span className="font-mono text-[11px] text-text-secondary">Submission will sync immediately</span>
          <div className="w-2 h-2 rounded-full bg-success ml-1"></div>
          <span className="font-sans text-[11px] text-success font-medium">Online</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 h-[56px] bg-transparent border border-border-default rounded-md text-text-primary font-sans text-[16px] font-medium hover:bg-bg-surface transition-colors">
            Review Again
          </button>
          <button className="flex-1 h-[56px] bg-secondary rounded-md text-white font-sans text-[16px] font-medium hover:bg-secondary-hover transition-colors">
            Submit & Close
          </button>
        </div>
      </div>
    </div>
  );
};

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between px-4 h-[44px]">
      <span className="font-sans text-[14px] text-text-secondary">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-sans text-[14px] text-text-primary">{value}</span>
        <Check className="w-4 h-4 text-success" />
      </div>
    </div>
  );
}
