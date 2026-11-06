import React from 'react';
import { ChevronLeft, MoreHorizontal, AlertTriangle, Camera, MessageSquare, Clock } from 'lucide-react';

export const Screen4_5 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-2 shrink-0 z-20">
        <button className="h-[44px] flex items-center px-2 text-text-secondary hover:text-text-primary">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-sans text-[16px] ml-1">Back</span>
        </button>
        <span className="font-sans text-[16px] font-semibold text-text-primary">Escalation — WO-28471</span>
        <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px]">
        {/* Escalation Header */}
        <div className="bg-[#450A0A]/30 border-b border-error p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-error" />
            <h1 className="font-sans font-semibold text-[16px] text-error">Major Defect Escalated</h1>
          </div>
          <p className="font-sans text-[14px] text-text-primary mb-1">Sealant Coverage — Fuselage Panel Section 12</p>
          <p className="font-mono text-[12px] text-text-secondary mb-3">Reported by Juan Martinez · 14:28</p>
          <div className="inline-flex h-[24px] px-3 rounded-full bg-[#451A03] text-warning font-sans font-medium text-[12px] items-center">
            Awaiting QA Review
          </div>
        </div>

        {/* Defect Summary Card */}
        <div className="p-4">
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-4">
            <div className="grid grid-cols-[100px_1fr] gap-2 mb-4">
              <span className="font-sans text-[13px] text-text-secondary">Defect Type:</span>
              <span className="font-sans text-[13px] text-text-primary font-medium">Insufficient sealant coverage</span>
              
              <span className="font-sans text-[13px] text-text-secondary">Severity:</span>
              <div className="flex items-center">
                <div className="h-[20px] px-2 rounded bg-[#451A03] text-warning font-sans font-bold text-[10px] flex items-center">Major</div>
              </div>
              
              <span className="font-sans text-[13px] text-text-secondary">Location:</span>
              <span className="font-sans text-[13px] text-text-primary">Panel lower right edge — approximately 15mm gap</span>
            </div>

            <div>
              <span className="font-sans text-[13px] text-text-secondary block mb-2">Photos:</span>
              <div className="flex gap-2 mb-1">
                <div className="w-[64px] h-[64px] bg-bg-elevated border border-border-subtle rounded-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-border-default/20 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-text-secondary opacity-50" />
                  </div>
                </div>
                <div className="w-[64px] h-[64px] bg-bg-elevated border border-border-subtle rounded-md flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-border-default/20 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-text-secondary opacity-50" />
                  </div>
                </div>
              </div>
              <span className="font-sans text-[11px] text-text-secondary">Tap to enlarge</span>
            </div>
          </div>
        </div>

        {/* Escalation Timeline */}
        <div className="p-4">
          <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-4">Escalation Activity</h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px before:h-full before:w-[2px] before:bg-border-subtle">
            
            <div className="relative flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-error border-2 border-bg-base shrink-0 z-10 mt-1"></div>
              <div>
                <p className="font-mono text-[12px] text-text-secondary mb-1">14:28</p>
                <p className="font-sans text-[13px] text-text-primary">Defect logged by Juan Martinez</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-error border-2 border-bg-base shrink-0 z-10 mt-1"></div>
              <div>
                <p className="font-mono text-[12px] text-text-secondary mb-1">14:28</p>
                <p className="font-sans text-[13px] text-text-primary">Auto-escalated (Major severity)</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-error border-2 border-bg-base shrink-0 z-10 mt-1"></div>
              <div>
                <p className="font-mono text-[12px] text-text-secondary mb-1">14:29</p>
                <p className="font-sans text-[13px] text-text-primary">Richard Chen (QA Lead) notified — Push notification sent</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-warning border-2 border-bg-base shrink-0 z-10 mt-1"></div>
              <div>
                <p className="font-mono text-[12px] text-text-secondary mb-1">14:32</p>
                <p className="font-sans text-[13px] text-text-primary">Richard Chen acknowledged escalation</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-bg-elevated border-2 border-border-default shrink-0 z-10 mt-1 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-pulse"></div>
              </div>
              <div>
                <p className="font-mono text-[12px] text-text-secondary mb-1">NOW</p>
                <p className="font-sans text-[13px] text-text-primary font-medium">Awaiting QA inspection</p>
              </div>
            </div>

          </div>
        </div>

        {/* Response Section */}
        <div className="p-4 pt-0">
          <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-3">QA Lead Response</h3>
          
          <div className="bg-bg-elevated border border-border-subtle rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-info font-sans text-[11px] font-medium shrink-0">
                RC
              </div>
              <div>
                <p className="font-sans font-semibold text-[14px] text-text-primary">Richard Chen — QA Lead</p>
                <p className="font-mono text-[12px] text-text-secondary">14:32 · Acknowledged</p>
              </div>
            </div>
            <div className="bg-bg-surface border border-border-default rounded-md p-3">
              <p className="font-sans text-[14px] text-text-primary italic">"En route to Station 4B. Do not proceed to next step until I complete visual inspection."</p>
            </div>
          </div>
        </div>

        {/* Technician Actions */}
        <div className="p-4 pt-0">
          <div className="bg-[#451A03]/20 border border-warning rounded-md p-3 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-warning" />
              <span className="font-sans font-semibold text-[13px] text-warning">Waiting for QA inspection — Task paused</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md flex items-center justify-center gap-2 text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
              <Camera className="w-4 h-4" /> Add additional photos
            </button>
            <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md flex items-center justify-center gap-2 text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
              Update defect description
            </button>
            <button className="w-full h-[44px] bg-transparent border border-transparent rounded-md flex items-center justify-center gap-2 text-primary font-sans text-[14px] font-medium hover:bg-bg-surface transition-colors">
              <MessageSquare className="w-4 h-4" /> Contact Richard Chen directly
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Timer */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-elevated border-t border-border-subtle p-4 pb-safe z-20 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[14px] text-text-secondary">QA response time:</span>
          <span className="font-mono text-[16px] text-text-primary font-medium">00:04:23</span>
        </div>
      </div>
    </div>
  );
};
