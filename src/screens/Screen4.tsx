import React from 'react';
import { Logo } from '../components/docs/Logo';
import { ChevronDown, Search, Download, Printer, MoreHorizontal, Check } from 'lucide-react';

export const Screen4 = () => {
  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden border border-border-subtle shadow-2xl flex flex-col shrink-0 rounded-xl">
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <span className="font-mono font-bold text-[16px] text-text-primary tracking-wide">FactoryFlow</span>
        </div>
        <div className="flex items-center gap-8 h-full">
          <NavLink label="Overview" />
          <NavLink label="Work Orders" active />
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

      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex items-baseline gap-4 mb-6 shrink-0">
          <h1 className="font-sans text-[20px] font-semibold text-text-primary">Production Orders</h1>
          <span className="font-sans text-[14px] text-text-secondary">68 work orders · Morning Shift</span>
        </div>

        <div className="h-[48px] bg-bg-elevated border border-border-subtle rounded-lg mb-4 px-4 flex items-center justify-between shrink-0">
          <div className="relative w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search by WO#, part, description..." 
              className="w-full h-[36px] bg-bg-base border border-border-default rounded-md pl-9 pr-3 font-sans text-[13px] text-text-primary focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterPill label="All Status" active />
            <FilterPill label="Pending" />
            <FilterPill label="In Progress" />
            <FilterPill label="Blocked" />
            <FilterPill label="Complete" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-bg-base border border-border-default rounded-md h-[32px] p-0.5">
              <button className="px-3 h-full rounded bg-bg-elevated text-text-primary font-sans text-[12px] font-medium shadow-sm">Comfortable</button>
              <button className="px-3 h-full rounded text-text-secondary font-sans text-[12px] font-medium hover:text-text-primary">Compact</button>
            </div>
            <div className="w-px h-4 bg-border-subtle mx-1"></div>
            <button className="w-[32px] h-[32px] flex items-center justify-center text-text-secondary hover:text-text-primary rounded-md hover:bg-bg-base transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="w-[32px] h-[32px] flex items-center justify-center text-text-secondary hover:text-text-primary rounded-md hover:bg-bg-base transition-colors">
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 border border-border-default rounded-lg overflow-hidden bg-bg-surface flex flex-col relative">
          <div className="overflow-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-bg-elevated border-b border-border-default sticky top-0 z-10">
                <tr>
                  <th className="px-4 h-[40px] w-[48px]"><Checkbox /></th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">WO#</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Part Number</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Description</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Work Center</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Technician</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Priority</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Status</th>
                  <th className="px-4 h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary">Due Time</th>
                  <th className="px-4 h-[40px] w-[48px]"></th>
                </tr>
              </thead>
              <tbody className="font-sans text-[14px] text-text-primary">
                <TableRow selected wo="WO-28471" part="P-737-4422" desc="Fuselage Skin Panel" station="Station 4B" tech="Juan Martinez" prio="Critical" status="In Progress" due="14:30" />
                <TableRow wo="WO-28392" part="P-737-3891" desc="Wing Rib Assembly" station="Station 7A" tech="Kevin Thompson" prio="High" status="Pending" due="15:00" />
                <TableRow complete wo="WO-28156" part="P-777-2201" desc="Engine Pylon Mount" station="Station 2C" tech="Robert Okafor" prio="Normal" status="Complete" due="13:00" />
                <TableRow blocked wo="WO-27891" part="P-737-5512" desc="Hydraulic Line Routing" station="Station 1A" tech="Sarah Chen" prio="High" status="Blocked" due="12:00" />
                <TableRow wo="WO-27654" part="P-787-0934" desc="Composite Panel Bond" station="Station 9B" tech="Maria Torres" prio="Normal" status="In Progress" due="16:30" />
                <TableRow wo="WO-27341" part="P-737-4891" desc="Landing Gear Bay Cover" station="Station 3D" tech="Arjun Patel" prio="Normal" status="Req. Sign-off" due="11:30" />
                <TableRow wo="WO-28203" part="P-737-6201" desc="Wing Spar Assembly" station="Station 6C" tech="Thomas Wilson" prio="Low" status="In Progress" due="17:00" />
                <TableRow wo="WO-28089" part="P-787-1102" desc="Door Frame Install" station="Station 10A" tech="Carlos Rodriguez" prio="Normal" status="Pending" due="16:00" />
              </tbody>
            </table>
          </div>

          <div className="h-[56px] bg-bg-elevated border-t border-border-default flex items-center justify-between px-6 shrink-0">
            <span className="font-sans text-[14px] text-text-primary font-medium">1 item selected</span>
            <div className="flex items-center gap-3">
              <button className="h-[36px] px-4 rounded-md border border-border-default text-text-primary font-sans text-[13px] font-medium hover:bg-bg-surface transition-colors">Reassign</button>
              <button className="h-[36px] px-4 rounded-md border border-border-default text-text-primary font-sans text-[13px] font-medium hover:bg-bg-surface transition-colors">Change Priority</button>
              <button className="h-[36px] px-4 rounded-md border border-border-default text-text-primary font-sans text-[13px] font-medium hover:bg-bg-surface transition-colors">Export</button>
              <div className="w-px h-4 bg-border-subtle mx-1"></div>
              <button className="h-[36px] px-4 rounded-md text-text-secondary font-sans text-[13px] font-medium hover:text-text-primary transition-colors">Cancel</button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 shrink-0">
          <span className="font-sans text-[14px] text-text-secondary">Showing 1–8 of 68 work orders</span>
          <div className="flex items-center gap-1">
            <button className="h-[32px] px-3 rounded-md text-text-secondary font-sans text-[13px] hover:text-text-primary">Previous</button>
            <button className="w-[32px] h-[32px] rounded-md bg-secondary text-white font-sans text-[13px] font-medium flex items-center justify-center">1</button>
            <button className="w-[32px] h-[32px] rounded-md text-text-secondary font-sans text-[13px] hover:bg-bg-elevated flex items-center justify-center">2</button>
            <button className="w-[32px] h-[32px] rounded-md text-text-secondary font-sans text-[13px] hover:bg-bg-elevated flex items-center justify-center">3</button>
            <span className="w-[32px] h-[32px] flex items-center justify-center text-text-secondary">...</span>
            <button className="w-[32px] h-[32px] rounded-md text-text-secondary font-sans text-[13px] hover:bg-bg-elevated flex items-center justify-center">9</button>
            <button className="h-[32px] px-3 rounded-md text-text-secondary font-sans text-[13px] hover:text-text-primary">Next</button>
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

function FilterPill({ label, active }: { label: string, active?: boolean }) {
  return (
    <button className={`h-[28px] px-3 rounded-full font-sans text-[12px] font-medium transition-colors ${active ? 'bg-sky-100 text-primary' : 'bg-bg-base text-text-secondary border border-border-default hover:text-text-primary'}`}>
      {label}
    </button>
  );
}

function Checkbox({ checked }: { checked?: boolean }) {
  return (
    <div className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer ${checked ? 'bg-secondary border-secondary' : 'border-border-default'}`}>
      {checked && <Check className="w-3 h-3 text-white" />}
    </div>
  );
}

function TableRow({ wo, part, desc, station, tech, prio, status, due, selected, blocked, complete }: any) {
  let bgClass = 'bg-bg-surface';
  let borderClass = 'border-b border-border-subtle';
  
  if (selected) {
    bgClass = 'bg-sky-100';
    borderClass = 'border-b border-border-subtle border-l-[2px] border-l-secondary';
  } else if (blocked) {
    bgClass = 'bg-[#450A0A]/20';
    borderClass = 'border-b border-border-subtle border-l-[2px] border-l-error';
  } else if (complete) {
    bgClass = 'bg-bg-base opacity-80';
  }

  const prioColors: any = {
    'Critical': { bg: '#450A0A', text: '#EF4444' },
    'High': { bg: '#451A03', text: '#F59E0B' },
    'Normal': { bg: '#1E3A5F', text: '#3B82F6' },
    'Low': { bg: '#252B35', text: '#8C97A8' }
  };

  const statusColors: any = {
    'In Progress': { bg: 'var(--sky-100)', text: 'var(--sky-600)' },
    'Pending': { bg: '#1E3A5F', text: '#3B82F6' },
    'Complete': { bg: '#14532D', text: '#22C55E' },
    'Blocked': { bg: '#450A0A', text: '#EF4444' },
    'Req. Sign-off': { bg: '#451A03', text: '#F59E0B' }
  };

  return (
    <tr className={`h-[52px] ${bgClass} ${borderClass} hover:bg-bg-elevated transition-colors`}>
      <td className="px-4"><Checkbox checked={selected || complete} /></td>
      <td className="px-4 font-mono text-[13px]">{wo}</td>
      <td className="px-4">{part}</td>
      <td className="px-4">{desc}</td>
      <td className="px-4">{station}</td>
      <td className="px-4">{tech}</td>
      <td className="px-4">
        <div className="h-[24px] px-[8px] rounded-full inline-flex items-center font-sans font-medium text-[12px]" style={{ backgroundColor: prioColors[prio]?.bg, color: prioColors[prio]?.text }}>
          {prio}
        </div>
      </td>
      <td className="px-4">
        <div className="h-[24px] px-[8px] rounded-full inline-flex items-center font-sans font-medium text-[12px]" style={{ backgroundColor: statusColors[status]?.bg, color: statusColors[status]?.text }}>
          {status}
        </div>
      </td>
      <td className="px-4">{due}</td>
      <td className="px-4 text-text-secondary cursor-pointer hover:text-text-primary"><MoreHorizontal className="w-5 h-5" /></td>
    </tr>
  );
}
