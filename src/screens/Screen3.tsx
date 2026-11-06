import React from 'react';
import { Logo } from '../components/docs/Logo';
import { ChevronDown, RefreshCw, UserCircle, Check } from 'lucide-react';

export const Screen3 = () => {
  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden border border-border-subtle shadow-2xl flex flex-col shrink-0 rounded-xl">
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <span className="font-mono font-bold text-[16px] text-text-primary tracking-wide">FactoryFlow</span>
        </div>
        <div className="flex items-center gap-8 h-full">
          <NavLink label="Overview" active />
          <NavLink label="Work Orders" />
          <NavLink label="Inspections" />
          <NavLink label="Reports" />
          <NavLink label="Schedule" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-sans text-[13px] text-text-primary">Denver Plant 2 · Morning Shift</span>
            <ChevronDown className="w-4 h-4 text-text-secondary" />
          </div>
          <div className="h-[24px] px-2 rounded-full bg-[#14532D] text-success text-[11px] font-medium flex items-center">
            Online
          </div>
          <div className="w-8 h-8 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center text-text-primary font-sans text-[12px] font-medium">
            JM
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-[240px] bg-bg-surface border-r border-border-subtle flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6 border-b border-border-subtle">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-4">Filter Floor</h3>
            <div className="space-y-3">
              <Checkbox label="All Areas" checked />
              <Checkbox label="Wing Assembly" />
              <Checkbox label="Fuselage" />
              <Checkbox label="Final Assembly" />
              <Checkbox label="Paint & Finish" />
              <Checkbox label="Landing Gear" />
            </div>
          </div>
          <div className="p-6 border-b border-border-subtle">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-4">Work Center Status</h3>
            <div className="space-y-3">
              <LegendItem color="bg-success" label="Running" />
              <LegendItem color="bg-text-secondary" label="Idle" />
              <LegendItem color="bg-error" label="Blocked" />
              <LegendItem color="bg-warning" label="Maintenance" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-[12px] uppercase text-text-secondary tracking-wider font-sans font-semibold mb-4">Shift Summary</h3>
            <div className="space-y-4">
              <StatRow label="Tasks Complete" value="47/68" />
              <StatRow label="Active Technicians" value="23" />
              <StatRow label="Blocked Stations" value="3" />
              <StatRow label="Avg Completion" value="84%" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-bg-base">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-4">
              <h1 className="font-sans text-[20px] font-semibold text-text-primary">Production Floor — Real-Time Status</h1>
              <span className="font-mono text-[12px] text-text-secondary">Last updated 14:23:07</span>
            </div>
            <button className="w-[36px] h-[36px] rounded-md border border-border-default flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <StationCard id="Station 1A" wo="WO-27891" desc="Hydraulic Line Routing" tech="Sarah Chen" status="Running" progress={60} />
            <StationCard id="Station 2C" wo="WO-28156" desc="Engine Pylon Mount" tech="Robert Okafor" status="Running" progress={80} />
            <StationCard id="Station 3D" wo="WO-27341" desc="Landing Gear Bay Cover" tech="Arjun Patel" status="Sign-off" progress={100} />
            <StationCard id="Station 4B" wo="WO-28471" desc="Fuselage Skin Panel" tech="Juan Martinez" status="Blocked" progress={45} />
            <StationCard id="Station 5A" wo="—" desc="—" tech="Unassigned" status="Idle" progress={0} />
            <StationCard id="Station 6C" wo="WO-28203" desc="Wing Spar Assembly" tech="Thomas Wilson" status="Running" progress={30} />
            <StationCard id="Station 7A" wo="WO-28392" desc="Wing Rib Assembly" tech="Kevin Thompson" status="Running" progress={55} />
            <StationCard id="Station 8B" wo="—" desc="Maintenance Scheduled" tech="—" status="Maintenance" progress={0} />
            <StationCard id="Station 9B" wo="WO-27654" desc="Composite Panel Bond" tech="Maria Torres" status="Running" progress={70} />
            <StationCard id="Station 10A" wo="WO-28089" desc="Door Frame Install" tech="Carlos Rodriguez" status="Running" progress={25} />
            <StationCard id="Station 11C" wo="WO-27998" desc="Pressurization Test" tech="Brian Kim" status="Blocked" progress={90} />
            <StationCard id="Station 12D" wo="WO-28301" desc="Fuel System Check" tech="David Jackson" status="Running" progress={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

function NavLink({ label, active }: { label: string, active?: boolean }) {
  return (
    <div className={`h-full flex items-center border-b-2 px-1 font-sans text-[14px] font-medium cursor-pointer ${active ? 'border-secondary text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}>
      {label}
    </div>
  );
}

function Checkbox({ label, checked }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'bg-secondary border-secondary' : 'border-border-default group-hover:border-border-strong'}`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="font-sans text-[13px] text-text-primary">{label}</span>
    </label>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
      <span className="font-sans text-[13px] text-text-primary">{label}</span>
    </div>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans text-[13px] text-text-secondary">{label}</span>
      <span className="font-mono text-[13px] font-medium text-text-primary">{value}</span>
    </div>
  );
}

function StationCard({ id, wo, desc, tech, status, progress }: any) {
  const statusColors: any = {
    'Running': 'bg-success',
    'Idle': 'bg-text-secondary',
    'Blocked': 'bg-error',
    'Maintenance': 'bg-warning',
    'Sign-off': 'bg-success'
  };
  const borderColors: any = {
    'Running': 'border-l-success',
    'Idle': 'border-l-text-secondary',
    'Blocked': 'border-l-error',
    'Maintenance': 'border-l-warning',
    'Sign-off': 'border-l-success'
  };
  
  const isBlocked = status === 'Blocked';

  return (
    <div className={`bg-bg-surface border border-border-subtle rounded-lg p-4 border-l-[4px] ${borderColors[status]} flex flex-col justify-between h-[120px] ${isBlocked ? 'bg-[#450A0A]/10' : ''}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono font-bold text-[14px] text-text-primary">{id}</span>
        <div className={`w-2.5 h-2.5 rounded-full ${statusColors[status]}`}></div>
      </div>
      <div className="mb-3">
        <div className="font-mono text-[12px] text-text-secondary mb-0.5">{wo}</div>
        <div className="font-sans text-[13px] text-text-primary truncate">{desc}</div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-sans text-[12px] text-text-secondary">{tech}</span>
        <div className="w-[100px] h-[4px] bg-bg-elevated rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${statusColors[status]}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
