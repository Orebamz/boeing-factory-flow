import React from 'react';
import { ChevronLeft, Filter, ArrowUpDown, ChevronDown, Camera, Home, ClipboardList, ScanLine, CheckSquare, User, Check, UserPlus, ArrowLeft } from 'lucide-react';

export const Screen3_1 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Top Bar */}
      <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-2 shrink-0">
        <button className="h-[44px] flex items-center px-2 text-text-secondary hover:text-text-primary">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-sans text-[16px] ml-1">Dashboard</span>
        </button>
        <span className="font-sans text-[16px] font-semibold text-text-primary">My Tasks</span>
        <div className="flex items-center">
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <Filter className="w-5 h-5" />
          </button>
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <ArrowUpDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="h-[48px] bg-bg-surface border-b border-border-subtle flex items-center px-4 gap-2 overflow-x-auto shrink-0 no-scrollbar">
        <FilterPill label="All (12)" active />
        <FilterPill label="Critical (2)" color="text-error" />
        <FilterPill label="High (3)" color="text-warning" />
        <FilterPill label="Pending (5)" />
        <FilterPill label="In Progress (3)" />
        <FilterPill label="Blocked (1)" />
      </div>

      {/* Sort Bar */}
      <div className="h-[32px] bg-bg-base px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1 text-text-secondary">
          <span className="font-sans text-[12px]">Sorted by: Due Time</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <span className="font-mono text-[12px] text-text-secondary">23 Apr · Morning Shift</span>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-[100px] flex flex-col gap-2">
        {/* Card 1 - Swipe Revealed */}
        <div className="relative w-full rounded-lg overflow-hidden flex">
          {/* Actions Background */}
          <div className="absolute inset-0 bg-bg-base flex justify-end">
            <div className="w-[72px] h-full bg-[#14532D] flex flex-col items-center justify-center gap-1 cursor-pointer">
              <Check className="w-6 h-6 text-success" />
              <span className="font-sans text-[11px] text-success font-medium">Complete</span>
            </div>
            <div className="w-[72px] h-full bg-sky-100 flex flex-col items-center justify-center gap-1 cursor-pointer">
              <UserPlus className="w-6 h-6 text-info" />
              <span className="font-sans text-[11px] text-info font-medium">Reassign</span>
            </div>
          </div>
          
          {/* Card Content shifted left */}
          <div className="w-full bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] border-l-error p-3 relative z-10 -translate-x-[144px] shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[12px] text-text-secondary">WO-28471</span>
              <div className="h-[20px] px-2 rounded-full bg-sky-100 text-sky-600 font-sans font-medium text-[11px] flex items-center">In Progress</div>
            </div>
            <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-2">Fuselage Panel Inspection — Section 12</h4>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sans text-[12px] text-text-secondary">📍 Station 4B — Wing Assembly</span>
              <span className="font-sans text-[12px] text-text-secondary">·</span>
              <span className="font-sans text-[12px] text-error font-medium">🕐 Due 14:30 (OVERDUE)</span>
            </div>
            <div className="w-full h-[4px] bg-bg-elevated rounded-full overflow-hidden">
              <div className="h-full bg-error rounded-full" style={{ width: '45%' }}></div>
            </div>
            {/* Swipe affordance */}
            <div className="absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center bg-gradient-to-l from-bg-surface to-transparent">
              <ArrowLeft className="w-4 h-4 text-text-secondary opacity-50" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <TaskCard 
          id="WO-28509" 
          status="Pending" 
          statusColor="bg-sky-100 text-sky-600"
          title="Emergency Seal Check — Pressure Test Rig" 
          station="Station 4B" 
          due="14:45" 
          border="border-l-error"
        />

        {/* Card 3 */}
        <TaskCard 
          id="WO-28392" 
          status="Pending" 
          statusColor="bg-sky-100 text-sky-600"
          title="Torque Verification — Wing Rib Assembly" 
          station="Station 7A" 
          due="15:00" 
          border="border-l-warning"
        />

        {/* Card 4 */}
        <TaskCard 
          id="WO-28156" 
          status="In Progress" 
          statusColor="bg-sky-100 text-sky-600"
          title="Component Assembly Sign-off" 
          station="Station 2C" 
          due="16:30" 
          border="border-l-info"
          progress={80}
          progressColor="bg-info"
        />

        {/* Card 5 */}
        <div className="w-full bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] border-l-error p-3">
          <div className="flex justify-between items-start mb-2">
            <span className="font-mono text-[12px] text-text-secondary">WO-27891</span>
            <div className="h-[20px] px-2 rounded-full bg-[#450A0A] text-error font-sans font-medium text-[11px] flex items-center">Blocked</div>
          </div>
          <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-2">Hydraulic Line Routing Verification</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[12px] text-text-secondary">📍 Station 1A</span>
            <span className="font-sans text-[12px] text-text-secondary">·</span>
            <span className="font-sans text-[12px] text-error font-medium">🕐 Due 12:00 (OVERDUE)</span>
          </div>
          <div className="h-[24px] rounded-full bg-[#450A0A] inline-flex items-center px-3">
            <span className="font-sans text-[12px] text-error font-medium">⚠ Awaiting parts — P-737-5512</span>
          </div>
        </div>

        {/* Card 6 */}
        <TaskCard 
          id="WO-27341" 
          status="Pending" 
          statusColor="bg-sky-100 text-sky-600"
          title="Landing Gear Bay Cover Install" 
          station="Station 3D" 
          due="17:00" 
          border="border-l-border-default"
        />
      </div>

      {/* FAB */}
      <button className="absolute bottom-[88px] right-4 w-[56px] h-[56px] rounded-full bg-secondary shadow-lg flex items-center justify-center z-20 hover:bg-secondary-hover transition-colors">
        <Camera className="w-6 h-6 text-white" />
      </button>

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

function FilterPill({ label, active, color = "text-text-secondary" }: { label: string, active?: boolean, color?: string }) {
  return (
    <button className={`h-[36px] px-3 rounded-full font-sans text-[13px] font-medium whitespace-nowrap shrink-0 ${active ? 'bg-secondary text-white' : `bg-bg-elevated border border-border-subtle ${color}`}`}>
      {label}
    </button>
  );
}

function TaskCard({ id, status, statusColor, title, station, due, border, progress, progressColor }: any) {
  return (
    <div className={`w-full bg-bg-surface border border-border-subtle rounded-lg border-l-[4px] ${border} p-3`}>
      <div className="flex justify-between items-start mb-2">
        <span className="font-mono text-[12px] text-text-secondary">{id}</span>
        <div className={`h-[20px] px-2 rounded-full font-sans font-medium text-[11px] flex items-center ${statusColor}`}>
          {status}
        </div>
      </div>
      <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-2">{title}</h4>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-sans text-[12px] text-text-secondary">📍 {station}</span>
        <span className="font-sans text-[12px] text-text-secondary">·</span>
        <span className="font-sans text-[12px] text-text-secondary">🕐 Due {due}</span>
      </div>
      {progress !== undefined && (
        <div className="w-full h-[4px] bg-bg-elevated rounded-full overflow-hidden mt-3">
          <div className={`h-full rounded-full ${progressColor}`} style={{ width: `${progress}%` }}></div>
        </div>
      )}
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
