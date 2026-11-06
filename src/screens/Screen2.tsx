import React from 'react';
import { Bell, Camera, Home, ClipboardList, ScanLine, CheckSquare, User, ChevronRight } from 'lucide-react';
import { Logo } from '../components/docs/Logo';

export const Screen2 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      <div className="h-[64px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <div className="flex flex-col">
            <span className="font-mono font-bold text-[14px] text-text-primary tracking-tight">FactoryFlow</span>
            <span className="font-sans text-[10px] text-text-secondary">Denver Plant 2 · Morning Shift</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-[24px] px-2 rounded-full bg-[#14532D] text-success text-[11px] font-medium flex items-center">Online</div>
          <div className="w-8 h-8 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center text-text-primary font-sans text-[12px] font-medium">
            JM
          </div>
        </div>
      </div>

      <div className="bg-bg-surface w-full py-2 px-4 border-b border-border-subtle shrink-0">
        <p className="font-mono text-[12px] text-text-secondary text-center">Morning Shift · Station 4B · 06:00–14:00</p>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px]">
        <div className="p-4">
          <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-3">Today's Progress</h3>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-mono text-[40px] font-bold text-white leading-none">8</span>
            <span className="font-sans text-[16px] text-text-secondary">of 12 Tasks Complete</span>
          </div>
          <div className="w-full h-[8px] bg-bg-elevated rounded-full overflow-hidden mb-4">
            <div className="h-full bg-secondary rounded-full" style={{ width: '67%' }}></div>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 rounded bg-bg-surface border border-border-subtle flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-error"></div>
              <span className="font-sans text-[12px] text-text-primary">2 Critical</span>
            </div>
            <div className="px-3 py-1.5 rounded bg-bg-surface border border-border-subtle flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-info"></div>
              <span className="font-sans text-[12px] text-text-primary">3 In Progress</span>
            </div>
            <div className="px-3 py-1.5 rounded bg-bg-surface border border-border-subtle flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <span className="font-sans text-[12px] text-text-primary">1 Blocked</span>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Action Required</h3>
            <div className="w-5 h-5 rounded-full bg-error text-white text-[11px] flex items-center justify-center font-bold">1</div>
          </div>
          <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-error rounded-lg p-3">
            <h4 className="font-sans text-[14px] font-semibold text-text-primary mb-1">Quality sign-off required — WO-28471</h4>
            <p className="font-sans text-[12px] text-error mb-2">Fuselage Panel Inspection · Overdue by 00:23</p>
            <div className="flex justify-end">
              <a href="#" className="font-sans text-[13px] text-primary flex items-center gap-1">Review <ChevronRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold">Assigned Tasks</h3>
            <a href="#" className="font-sans text-[13px] text-primary">View All</a>
          </div>
          <div className="space-y-3">
            <TaskCardMobile id="WO-28471" title="Fuselage Panel Inspection" priority="critical" status="In Progress" station="Station 4B" time="14:30" />
            <TaskCardMobile id="WO-28392" title="Torque Verification Wing Assembly" priority="high" status="Pending" station="Station 7A" time="15:00" />
            <TaskCardMobile id="WO-28156" title="Component Assembly Sign-off" priority="normal" status="Pending" station="Station 2C" time="16:30" />
          </div>
        </div>
      </div>

      <button className="absolute bottom-[88px] right-4 w-[56px] h-[56px] rounded-full bg-secondary shadow-lg flex items-center justify-center z-20 hover:bg-secondary-hover transition-colors">
        <Camera className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-0 left-0 w-full h-[64px] bg-bg-elevated border-t border-border-subtle flex items-center justify-around px-2 pb-safe z-10">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" active />
        <NavItem icon={<ClipboardList className="w-6 h-6" />} label="Tasks" />
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

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-text-secondary'}`}>
      {icon}
      <span className="text-[10px] font-sans">{label}</span>
    </div>
  );
}

function TaskCardMobile({ id, title, priority, status, station, time }: any) {
  const priorityColors: any = {
    critical: 'border-l-error',
    high: 'border-l-warning',
    normal: 'border-l-info',
    low: 'border-l-border-default'
  };
  const statusColors: any = {
    'In Progress': { bg: 'var(--sky-100)', text: 'var(--sky-600)' },
    'Pending': { bg: '#1E3A5F', text: '#3B82F6' },
  };

  return (
    <div className={`w-full bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] ${priorityColors[priority]} p-3`}>
      <div className="flex justify-between items-start mb-2">
        <span className="font-mono text-[12px] text-text-secondary">{id}</span>
        <div className="h-[20px] px-2 rounded-full font-sans font-medium text-[11px] flex items-center" style={{ backgroundColor: statusColors[status]?.bg, color: statusColors[status]?.text }}>
          {status}
        </div>
      </div>
      <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-2 line-clamp-1">{title}</h4>
      <div className="flex items-center gap-3 text-text-secondary">
        <span className="font-sans text-[12px]">{station}</span>
        <span className="font-sans text-[12px]">{time}</span>
      </div>
    </div>
  );
}
