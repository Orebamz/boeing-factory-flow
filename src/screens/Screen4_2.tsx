import React from 'react';
import { ChevronLeft, Info, Check, X, Camera, AlertTriangle, ChevronRight } from 'lucide-react';

export const Screen4_2 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-2 shrink-0 z-20">
        <button className="h-[44px] flex items-center px-2 text-text-secondary hover:text-text-primary">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-mono text-[14px] ml-1">WO-28471</span>
        </button>
        <span className="font-sans text-[16px] font-semibold text-text-primary">Quality Inspection</span>
        <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
          <Info className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[140px]">
        {/* Inspection Header */}
        <div className="bg-bg-surface border-b border-border-subtle p-4">
          <div className="flex justify-between items-start mb-1">
            <h1 className="font-sans font-semibold text-[18px] text-text-primary">Final Quality Inspection</h1>
            <div className="h-[20px] px-2 rounded-md bg-sky-100 text-info font-sans font-medium text-[11px] flex items-center">In Progress</div>
          </div>
          <p className="font-mono text-[13px] text-text-secondary mb-1">WO-28471 · Fuselage Panel Section 12</p>
          <p className="font-sans text-[12px] text-text-secondary mb-4">Inspector: Juan Martinez · Station 4B</p>
          
          <div className="flex justify-between items-center mb-2">
            <span className="font-sans text-[13px] text-text-primary font-medium">7 of 12 items checked</span>
          </div>
          <div className="w-full h-[6px] bg-bg-elevated rounded-full overflow-hidden">
            <div className="h-full bg-info rounded-full" style={{ width: '58%' }}></div>
          </div>
        </div>

        {/* Inspection Items List */}
        <div className="p-4 flex flex-col gap-2">
          
          {/* Item 1 - PASS */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3">
            <div className="flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#14532D] flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-semibold text-[14px] text-text-primary">Surface finish quality</h3>
                  <div className="h-[20px] px-2 rounded bg-[#14532D] text-success font-sans font-bold text-[10px] flex items-center">PASS</div>
                </div>
                <p className="font-sans text-[12px] text-text-secondary mb-2">No scratches, dents, or corrosion visible</p>
                <div className="bg-bg-elevated rounded p-2 border border-border-subtle">
                  <p className="font-sans text-[12px] text-text-secondary">Inspector note: Clear <span className="font-mono text-[11px] ml-2">13:52</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 - PASS */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3">
            <div className="flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#14532D] flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-semibold text-[14px] text-text-primary">Panel alignment tolerance ±0.5mm</h3>
                  <div className="h-[20px] px-2 rounded bg-[#14532D] text-success font-sans font-bold text-[10px] flex items-center">PASS</div>
                </div>
                <p className="font-sans text-[12px] text-text-secondary">Measured: +0.2mm</p>
              </div>
            </div>
          </div>

          {/* Item 3 - PASS */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3">
            <div className="flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#14532D] flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-semibold text-[14px] text-text-primary">Fastener torque — all 24 points</h3>
                  <div className="h-[20px] px-2 rounded bg-[#14532D] text-success font-sans font-bold text-[10px] flex items-center">PASS</div>
                </div>
                <p className="font-sans text-[12px] text-text-secondary">All readings within spec 45.0 ±2.5 Nm</p>
              </div>
            </div>
          </div>

          {/* Item 4 - FAIL */}
          <div className="bg-bg-surface border border-error rounded-lg overflow-hidden">
            <div className="p-3 flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#7F1D1D] flex items-center justify-center shrink-0">
                <X className="w-6 h-6 text-error" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-semibold text-[14px] text-text-primary">Sealant coverage — panel edge</h3>
                  <div className="flex gap-1">
                    <div className="h-[20px] px-2 rounded bg-[#451A03] text-warning font-sans font-bold text-[10px] flex items-center">Defect logged</div>
                    <div className="h-[20px] px-2 rounded bg-[#7F1D1D] text-error font-sans font-bold text-[10px] flex items-center">Fail</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Defect Logging Form */}
            <div className="bg-[#450A0A]/30 border-t border-b border-error p-4 space-y-4">
              <div>
                <label className="block font-sans text-[12px] text-text-secondary mb-1">Defect Type</label>
                <div className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md px-3 flex items-center justify-between">
                  <span className="font-sans text-[14px] text-text-primary">Insufficient sealant coverage</span>
                  <ChevronRight className="w-4 h-4 text-text-secondary rotate-90" />
                </div>
              </div>

              <div>
                <label className="block font-sans text-[12px] text-text-secondary mb-1">Severity</label>
                <div className="flex bg-bg-surface border border-border-default rounded-md p-1">
                  <button className="flex-1 h-[36px] rounded font-sans text-[13px] text-text-secondary">Minor</button>
                  <button className="flex-1 h-[36px] rounded bg-[#451A03] border border-warning text-warning font-sans text-[13px] font-medium shadow-sm">Major</button>
                  <button className="flex-1 h-[36px] rounded font-sans text-[13px] text-text-secondary">Critical</button>
                </div>
              </div>

              <div>
                <label className="block font-sans text-[12px] text-text-secondary mb-1">Description</label>
                <textarea 
                  className="w-full min-h-[56px] bg-bg-surface border border-border-default rounded-md p-3 font-sans text-[14px] text-text-primary focus:outline-none focus:border-secondary resize-y"
                  defaultValue="Sealant gap approximately 15mm on lower right edge of panel"
                ></textarea>
              </div>

              <div>
                <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md flex items-center justify-center gap-2 text-text-primary font-sans text-[14px] font-medium mb-3">
                  <Camera className="w-4 h-4" />
                  Capture defect photo
                </button>
                <div className="flex gap-2">
                  <div className="w-[64px] h-[64px] bg-bg-elevated border border-border-subtle rounded-md flex items-center justify-center">
                    <Camera className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div className="w-[64px] h-[64px] bg-bg-elevated border border-border-subtle rounded-md flex items-center justify-center">
                    <Camera className="w-6 h-6 text-text-secondary" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="w-5 h-5 rounded border border-border-default bg-bg-surface shrink-0 mt-0.5"></div>
                <div>
                  <span className="font-sans text-[14px] text-text-primary block">Escalate to Supervisor</span>
                  <span className="font-sans text-[11px] text-text-secondary">Auto-escalates for Critical severity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 5 - PASS */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3">
            <div className="flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-[#14532D] flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1 flex justify-between items-center h-[40px]">
                <h3 className="font-sans font-semibold text-[14px] text-text-primary">Rivet pattern spacing</h3>
                <div className="h-[20px] px-2 rounded bg-[#14532D] text-success font-sans font-bold text-[10px] flex items-center">PASS</div>
              </div>
            </div>
          </div>

          {/* Item 6 - N/A */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 opacity-60">
            <div className="flex gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0">
                <div className="w-4 h-[2px] bg-text-secondary"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-sans font-semibold text-[14px] text-text-primary">Corrosion treatment</h3>
                  <div className="h-[20px] px-2 rounded bg-bg-elevated text-text-secondary font-sans font-bold text-[10px] flex items-center">N/A</div>
                </div>
                <p className="font-sans text-[12px] text-text-secondary">Not applicable — new panel installation</p>
              </div>
            </div>
          </div>

          {/* Item 7 - CURRENT */}
          <div className="bg-bg-surface border border-secondary rounded-lg p-4 shadow-[0_0_0_1px_rgba(0,51,160,0.5)]">
            <div className="flex gap-3 mb-4">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-secondary flex items-center justify-center shrink-0 relative">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-sans font-semibold text-[16px] text-primary mb-1">Hydraulic line clearance</h3>
                <p className="font-sans text-[13px] text-text-secondary">Min clearance: 25mm from panel edge</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 h-[56px] bg-[#14532D] border border-success rounded-md flex items-center justify-center gap-2 text-success font-sans text-[16px] font-semibold">
                <Check className="w-5 h-5" /> Pass
              </button>
              <button className="flex-1 h-[56px] bg-[#7F1D1D] border border-error rounded-md flex items-center justify-center gap-2 text-error font-sans text-[16px] font-semibold">
                <X className="w-5 h-5" /> Fail
              </button>
              <button className="w-[72px] h-[56px] bg-bg-elevated border border-border-default rounded-md flex items-center justify-center text-text-secondary font-sans text-[14px] font-medium">
                N/A
              </button>
            </div>
          </div>

          {/* Item 8 - Locked */}
          <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 opacity-40">
            <div className="flex gap-3 items-center h-[40px]">
              <div className="w-[40px] h-[40px] rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0"></div>
              <h3 className="font-sans text-[14px] text-text-primary">Electrical bonding check</h3>
            </div>
          </div>

        </div>
      </div>

      {/* Escalation Alert & Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-[#450A0A] border-l-[4px] border-l-error p-3 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-error" />
            <span className="font-sans font-semibold text-[13px] text-error">1 defect requires supervisor review</span>
          </div>
          <span className="font-sans text-[12px] text-text-primary ml-6">Major defect logged — Richard Chen (QA Lead) notified</span>
          <div className="flex justify-between items-center ml-6 mt-1">
            <span className="font-mono text-[11px] text-text-secondary">Escalation sent 14:28</span>
            <button className="font-sans text-[12px] text-primary font-medium">View Escalation →</button>
          </div>
        </div>
        
        <div className="bg-bg-elevated border-t border-border-subtle p-4 pb-safe flex gap-3">
          <button className="flex-1 h-[56px] bg-bg-surface border border-border-default rounded-md text-text-primary font-sans text-[16px] font-medium hover:bg-bg-base transition-colors">
            Save & Pause
          </button>
          <div className="flex-1 flex flex-col">
            <button className="w-full h-[56px] bg-bg-surface border border-border-default rounded-md text-text-disabled font-sans text-[16px] font-medium cursor-not-allowed mb-1">
              Submit Inspection
            </button>
            <span className="font-sans text-[10px] text-text-secondary text-center">Complete 5 remaining items</span>
          </div>
        </div>
      </div>
    </div>
  );
};
