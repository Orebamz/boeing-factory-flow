import React from 'react';
import { Check, RefreshCw, Home, ClipboardList, ScanLine, CheckSquare, User } from 'lucide-react';

export const Screen3_6 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Full Screen Success State */}
      <div className="h-[50%] bg-bg-elevated relative flex flex-col items-center justify-center p-6 shrink-0 border-b border-border-subtle">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#3D4757 1px, transparent 1px), linear-gradient(90deg, #3D4757 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#14532D] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Check className="w-10 h-10 text-success" />
          </div>
          <h1 className="font-sans font-semibold text-[24px] text-text-primary mb-3">Task Submitted Successfully</h1>
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="w-4 h-4 text-success" />
            <span className="font-mono text-[13px] text-success">WO-28471 synced to server</span>
          </div>
          <span className="font-mono text-[12px] text-text-secondary">14:31:07</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px] bg-bg-base">
        {/* Metrics Strip */}
        <div className="flex gap-2 p-4">
          <MetricCard icon="⚡" value="44 min" label="38% faster than your average" />
          <MetricCard icon="✓" value="9/9 Steps" label="100% completion" />
          <MetricCard icon="📊" value="98/100" label="Quality Score" />
        </div>

        {/* Next Task Card */}
        <div className="px-4 mb-6">
          <h3 className="text-[11px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-3">Your Next Task</h3>
          
          <div className="bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] border-l-warning p-6 mb-4 shadow-lg">
            <div className="flex justify-between items-start mb-3">
              <span className="font-mono text-[14px] font-bold text-text-primary">WO-28392</span>
              <div className="h-[24px] px-3 rounded-md bg-[#451A03] text-warning font-sans font-medium text-[12px] flex items-center tracking-wide">High Priority</div>
            </div>
            <h4 className="font-sans font-semibold text-[18px] text-text-primary mb-4">Torque Verification — Wing Rib Assembly</h4>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[13px] text-text-secondary">📍 Station 7A</span>
              <span className="font-sans text-[13px] text-text-secondary">·</span>
              <span className="font-sans text-[13px] text-text-secondary">🕐 Due 15:00</span>
              <span className="font-sans text-[13px] text-text-secondary">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Est. 30 min</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans text-[13px] text-text-secondary">Parts pre-confirmed:</span>
              <Check className="w-4 h-4 text-primary" />
            </div>
            <p className="font-sans text-[12px] text-success">Materials ready at Station 7A</p>
          </div>

          <div className="space-y-3">
            <button className="w-full h-[56px] bg-secondary rounded-lg text-white font-sans text-[16px] font-medium hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/20">
              Start Task Now
            </button>
            <button className="w-full h-[56px] bg-bg-surface border border-border-default rounded-lg text-text-primary font-sans text-[16px] font-medium hover:bg-bg-base transition-colors">
              View All Tasks
            </button>
          </div>
        </div>

        {/* Shift Progress Footer */}
        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[11px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Shift Progress</h3>
            <div className="h-[20px] px-2 rounded-md bg-[#14532D] text-success font-sans font-medium text-[11px] flex items-center">On track</div>
          </div>
          <p className="font-sans text-[12px] text-text-secondary mb-3">9 of 12 tasks complete · 3 remaining · Shift ends 14:00</p>
          <div className="w-full h-[8px] bg-bg-elevated rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 w-full h-[64px] bg-bg-elevated border-t border-border-subtle flex items-center justify-around px-2 pb-safe z-10">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" />
        <NavItem icon={<ClipboardList className="w-6 h-6" />} label="Tasks" active />
        <div className="relative -top-5">
          <div className="w-[56px] h-[56px] rounded-full bg-secondary shadow-lg flex items-center justify-center border-4 border-bg-base">
            <ScanLine className="w-6 h-6 text-white" />
          </div>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-sans text-text-secondary">Scan</span>
        </div>
        <NavItem icon={<CheckSquare className="w-6 h-6" />} label="Inspect" />
        <NavItem icon={<User className="w-6 h-6" />} label="Profile" />
      </div>
    </div>
  );
};

function MetricCard({ icon, value, label }: { icon: string, value: string, label: string }) {
  return (
    <div className="flex-1 bg-bg-surface border border-border-subtle rounded-lg p-3 flex flex-col items-center text-center">
      <span className="text-[20px] mb-1">{icon}</span>
      <span className="font-mono font-bold text-[14px] text-text-primary mb-1">{value}</span>
      <span className="font-sans text-[10px] text-text-secondary leading-tight">{label}</span>
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-text-secondary'}`}>
      {icon}
      <span className="text-[10px] font-sans">{label}</span>
    </div>
  );
}
