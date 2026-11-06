import React from 'react';
import { ChevronLeft, Share, MoreHorizontal, Check, AlertTriangle, Lock, Camera } from 'lucide-react';

export const Screen3_2 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-2 shrink-0">
        <button className="h-[44px] flex items-center px-2 text-text-secondary hover:text-text-primary">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-sans text-[16px] ml-1">My Tasks</span>
        </button>
        <div className="flex items-center">
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <Share className="w-5 h-5" />
          </button>
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[88px]">
        {/* Task Header Card */}
        <div className="bg-bg-surface border-b border-border-subtle p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono font-bold text-[14px] text-primary">WO-28471</span>
            <div className="h-[20px] px-2 rounded-md bg-[#450A0A] text-error font-sans font-medium text-[11px] flex items-center">CRITICAL</div>
          </div>
          <h1 className="font-sans font-semibold text-[20px] text-text-primary leading-tight mb-3">Fuselage Panel Inspection — Section 12</h1>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[12px] text-text-secondary">📍 Station 4B — Wing Assembly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[12px] text-text-secondary">🕐 Due 14:30 <span className="text-text-primary">TODAY</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[12px] text-text-secondary">🔧 Part: <span className="text-text-primary">P-737-4422</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[12px] text-text-secondary">👤 <span className="text-text-primary">J. Martinez</span></span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="h-[20px] px-2 rounded-md bg-sky-100 text-sky-600 font-sans font-medium text-[11px] flex items-center">In Progress</div>
            <span className="font-mono text-[12px] text-text-secondary">Started 13:47</span>
          </div>

          <div className="w-full h-[8px] bg-bg-elevated rounded-full overflow-hidden mb-1">
            <div className="h-full bg-secondary rounded-full" style={{ width: '45%' }}></div>
          </div>
          <div className="text-right">
            <span className="font-sans text-[12px] text-text-secondary">Step 4 of 9</span>
          </div>
        </div>

        {/* Parts/Materials Section */}
        <div className="p-4 border-b border-border-subtle">
          <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-3">Required Materials</h3>
          <div className="space-y-2">
            <PartRow part="P-737-4422" desc="Fuselage Skin Panel" qty="1" status="confirmed" />
            <PartRow part="P-737-4423" desc="Fastener Set M6" qty="24" status="confirmed" />
            <PartRow part="P-737-4501" desc="Sealant Compound" qty="2 units" status="warning" />
          </div>
        </div>

        {/* Sequential Steps Checklist */}
        <div className="p-4">
          <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-1">Inspection Steps</h3>
          <p className="font-sans text-[11px] text-text-secondary italic mb-4">Steps must be completed in order</p>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-start gap-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-[#14532D] flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Check className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="font-sans text-[14px] text-text-primary line-through">Visual inspection of panel surface</p>
                <p className="font-mono text-[12px] text-text-secondary mt-1">Completed 13:47 · J. Martinez</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-[#14532D] flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Check className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="font-sans text-[14px] text-text-primary line-through">Measure panel thickness at reference points A1–A6</p>
                <p className="font-mono text-[12px] text-text-secondary mt-1">Completed 13:52</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-[#14532D] flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Check className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="font-sans text-[14px] text-text-primary line-through">Photograph panel from 4 reference angles</p>
                <p className="font-mono text-[12px] text-text-secondary mt-1">Completed 14:01 · 📷 4 photos attached</p>
              </div>
            </div>

            {/* Step 4 CURRENT */}
            <div className="relative flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0 z-10 mt-0.5 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
              </div>
              <div className="flex-1 bg-bg-elevated border border-border-subtle border-l-[4px] border-l-secondary rounded-lg p-4">
                <p className="font-sans font-semibold text-[14px] text-text-primary mb-3">Torque check — fasteners F1 through F24</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-border-default shrink-0"></div>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-sans text-[13px] text-text-secondary w-[60px]">F1–F8:</span>
                      <input type="text" placeholder="00.0 Nm" className="flex-1 h-[40px] bg-bg-base border border-border-default rounded-md px-3 font-mono text-[13px] text-text-primary focus:outline-none focus:border-secondary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-border-default shrink-0"></div>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-sans text-[13px] text-text-secondary w-[60px]">F9–F16:</span>
                      <input type="text" placeholder="00.0 Nm" className="flex-1 h-[40px] bg-bg-base border border-border-default rounded-md px-3 font-mono text-[13px] text-text-primary focus:outline-none focus:border-secondary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-border-default shrink-0"></div>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-sans text-[13px] text-text-secondary w-[60px]">F17–F24:</span>
                      <input type="text" placeholder="00.0 Nm" className="flex-1 h-[40px] bg-bg-base border border-border-default rounded-md px-3 font-mono text-[13px] text-text-primary focus:outline-none focus:border-secondary" />
                    </div>
                  </div>
                </div>

                <div className="bg-sky-100/30 rounded-full px-3 py-1.5 inline-block mb-4">
                  <span className="font-mono text-[12px] text-primary">Spec: 45.0 ±2.5 Nm</span>
                </div>

                <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-lg flex items-center justify-center gap-2 text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
                  <Camera className="w-4 h-4" />
                  Photograph torque wrench reading
                </button>
              </div>
            </div>

            {/* Locked Steps */}
            <div className="relative flex items-start gap-3 opacity-40 mt-6">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Lock className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-sans text-[14px] text-text-primary mb-1">Apply sealant to panel edges</p>
                <p className="font-sans text-[11px] text-text-disabled">Complete previous step to unlock</p>
              </div>
            </div>
            
            <div className="relative flex items-start gap-3 opacity-40">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Lock className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-sans text-[14px] text-text-primary mb-1">Second inspector sign-off</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3 opacity-40">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Lock className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-sans text-[14px] text-text-primary mb-1">Final photography — all angles</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3 opacity-40">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Lock className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-sans text-[14px] text-text-primary mb-1">Supervisor approval</p>
              </div>
            </div>

            <div className="relative flex items-start gap-3 opacity-40">
              <div className="w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center shrink-0 z-10 mt-0.5">
                <Lock className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-sans text-[14px] text-text-primary mb-1">System close-out</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-elevated border-t border-border-subtle p-4 pb-safe z-20">
        <div className="text-center mb-3">
          <span className="font-mono text-[11px] text-text-secondary">⚡ Auto-saved 14:23</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 h-[56px] bg-bg-surface border border-border-default rounded-lg text-text-primary font-sans text-[16px] font-medium hover:bg-bg-base transition-colors">
            Save Progress
          </button>
          <button className="flex-1 h-[56px] bg-secondary rounded-lg text-white font-sans text-[16px] font-medium hover:bg-secondary-hover transition-colors">
            Complete Step 4 →
          </button>
        </div>
      </div>
    </div>
  );
};

function PartRow({ part, desc, qty, status }: { part: string, desc: string, qty: string, status: 'confirmed' | 'warning' }) {
  return (
    <div className="min-h-[44px] flex items-center justify-between py-1">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] text-text-primary w-[90px]">{part}</span>
        <div className="flex flex-col">
          <span className="font-sans text-[13px] text-text-secondary">{desc}</span>
          <span className="font-sans text-[12px] text-text-secondary">Qty: {qty}</span>
        </div>
      </div>
      {status === 'confirmed' ? (
        <div className="flex items-center gap-1 text-success">
          <Check className="w-4 h-4" />
          <span className="font-sans text-[12px]">Confirmed</span>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-warning">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-sans text-[12px]">Check quantity</span>
        </div>
      )}
    </div>
  );
}
