import React from 'react';
import { Check, Info, Camera } from 'lucide-react';

export const Screen3_4 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* AFTER Banner */}
      <div className="bg-[#14532D] border-b border-[#22C55E] p-3 flex items-center justify-center gap-2 shrink-0">
        <Check className="w-5 h-5 text-success" />
        <span className="font-sans text-[13px] text-success font-bold">✓ AFTER — FactoryFlow Redesign</span>
      </div>

      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated flex flex-col justify-center shrink-0 relative">
        <div className="flex items-center justify-center">
          <span className="font-mono text-[13px] font-bold text-primary">WO-28471 — Step 4 of 9</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-bg-base">
          <div className="h-full bg-secondary" style={{ width: '45%' }}></div>
        </div>
      </div>

      {/* Smart Context Banner */}
      <div className="bg-bg-elevated border-b border-border-subtle p-3 border-l-[4px] border-l-sky-300 shrink-0 relative">
        <div className="flex justify-between items-start mb-1">
          <span className="font-sans text-[12px] text-text-secondary">Auto-loaded from Work Order WO-28471</span>
          <div className="h-[20px] px-2 rounded-full bg-sky-100 text-primary font-mono font-medium text-[11px] flex items-center">Auto-filled</div>
        </div>
        <span className="font-sans text-[13px] text-text-primary">Fuselage Panel Inspection · Station 4B · J. Martinez</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px]">
        {/* Form Section 1 */}
        <div className="p-4 border-b border-border-subtle relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[11px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Work Order Details</h3>
            <span className="font-sans text-[12px] text-success font-medium">Auto-filled ✓</span>
          </div>

          <div className="space-y-4">
            <AutoFilledField label="Work Order #" value="WO-28471" />
            <AutoFilledField label="Technician ID" value="J.MARTINEZ-4892" />
            <AutoFilledField label="Station" value="Station 4B — Wing Assembly" />
            <AutoFilledField label="Part Number" value="P-737-4422" />
          </div>

          <div className="mt-3 flex items-start gap-2">
            <Info className="w-4 h-4 text-text-secondary shrink-0 mt-0.5" />
            <span className="font-sans text-[11px] text-text-secondary">Populated from work order — tap to override</span>
          </div>

          {/* Callout */}
          <div className="absolute -right-4 top-1/2 bg-success text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-lg z-50 transform translate-x-full -translate-y-1/2 w-[180px]">
            Smart defaults eliminate 4 manual entry fields — reduces errors by removing transcription
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-success transform -translate-y-1/2 rotate-45"></div>
          </div>
        </div>

        {/* Form Section 2 */}
        <div className="p-4 relative">
          <h3 className="text-[11px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-4">Torque Measurements</h3>

          <div className="bg-sky-100 rounded-full px-4 py-2 flex items-center justify-center mb-6 sticky top-4 z-10 shadow-md">
            <span className="font-mono text-[12px] text-primary">✦ Specification: 45.0 ±2.5 Nm (42.5–47.5 Nm acceptable)</span>
          </div>

          <div className="space-y-6">
            {/* Field 1: Filled */}
            <div>
              <label className="block font-sans text-[14px] text-text-primary mb-1">Fasteners F1–F8</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="44.8" 
                  readOnly
                  className="w-full h-[56px] bg-bg-base border border-success rounded-md px-4 font-mono text-[16px] text-text-primary focus:outline-none" 
                />
                <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
              </div>
              <p className="font-sans text-[12px] text-text-secondary mt-1">Enter torque wrench reading for fasteners F1 through F8</p>
              <p className="font-sans text-[12px] text-success mt-1">✓ Within spec (42.5–47.5 Nm)</p>
            </div>

            {/* Field 2: Focused */}
            <div className="relative">
              <label className="block font-sans text-[14px] text-text-primary mb-1">Fasteners F9–F16</label>
              <input 
                type="text" 
                placeholder="00.0 Nm" 
                className="w-full h-[56px] bg-bg-base border-2 border-secondary rounded-md px-4 font-mono text-[16px] text-text-primary focus:outline-none shadow-[0_0_0_2px_rgba(0,51,160,0.2)]" 
                autoFocus
              />
              <p className="font-sans text-[12px] text-text-secondary mt-1">Enter torque wrench reading for fasteners F9 through F16</p>
              
              {/* Callout */}
              <div className="absolute -left-4 top-1/2 bg-success text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-lg z-50 transform -translate-x-full -translate-y-1/2 w-[180px]">
                Inline validation fires onBlur — technician knows immediately if reading is out of spec
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-success transform -translate-y-1/2 rotate-45"></div>
              </div>
            </div>

            {/* Field 3: Default */}
            <div>
              <label className="block font-sans text-[14px] text-text-primary mb-1">Fasteners F17–F24</label>
              <input 
                type="text" 
                placeholder="00.0 Nm" 
                className="w-full h-[56px] bg-bg-base border border-border-default rounded-md px-4 font-mono text-[16px] text-text-primary focus:outline-none focus:border-secondary" 
              />
              <p className="font-sans text-[12px] text-text-secondary mt-1">Enter torque wrench reading for fasteners F17 through F24</p>
            </div>
          </div>

          {/* Photo Capture */}
          <div className="mt-8">
            <label className="block font-sans text-[14px] text-text-primary mb-2">Photograph torque wrench display</label>
            <div className="w-full h-[120px] bg-bg-surface border-2 border-dashed border-border-default rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-secondary transition-colors">
              <Camera className="w-8 h-8 text-text-secondary mb-2" />
              <span className="font-sans text-[14px] text-text-secondary">Tap to capture · Required for this step</span>
              <span className="font-sans text-[12px] text-text-secondary mt-1">1 of 2 photos required</span>
            </div>
          </div>

          {/* Form Progress */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-[14px] text-text-primary font-medium">Form 60% complete</span>
              <span className="font-sans text-[12px] text-text-secondary">2 of 5 required fields complete</span>
            </div>
            <div className="w-full h-[8px] bg-bg-elevated rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-elevated border-t border-border-subtle p-4 pb-safe z-20">
        <div className="flex gap-3 mb-2">
          <button className="flex-1 h-[56px] bg-bg-surface border border-border-default rounded-md text-text-primary font-sans text-[16px] font-medium hover:bg-bg-base transition-colors">
            Save Draft
          </button>
          <button className="flex-1 h-[56px] bg-bg-surface border border-border-default rounded-md text-text-disabled font-sans text-[16px] font-medium cursor-not-allowed">
            Continue →
          </button>
        </div>
        <p className="text-center font-sans text-[12px] text-text-secondary">Complete 3 remaining fields to continue</p>
      </div>

      {/* Completion Stat */}
      <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 bg-success text-white px-4 py-2 rounded-full font-sans font-bold text-[14px] shadow-lg whitespace-nowrap z-50">
        Form Completion Rate: 91% ↑ from 67%
      </div>
    </div>
  );
};

function AutoFilledField({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <label className="block font-sans text-[13px] text-text-secondary mb-1">{label}</label>
      <div className="relative">
        <input 
          type="text" 
          value={value} 
          readOnly
          className="w-full h-[40px] bg-bg-surface border border-success rounded-md px-3 font-mono text-[14px] text-text-primary opacity-80 cursor-not-allowed" 
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-[20px] px-2 rounded-full bg-sky-100 text-primary font-mono font-medium text-[10px] flex items-center">
          Auto-filled
        </div>
      </div>
    </div>
  );
}
