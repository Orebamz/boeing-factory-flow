import React, { useState } from 'react';
import { 
  Bell, Search, Filter, MoreHorizontal, X,
  LayoutDashboard, ClipboardList, CheckSquare, Users, BarChart3, AlertTriangle, ArrowRight,
  ShieldCheck, Wrench, Clock
} from 'lucide-react';
import { Logo } from '../components/docs/Logo';

interface ActivityItem {
  time: string;
  text: string;
  dot: string;
}

interface TeamMemberData {
  id: string;
  name: string;
  fullName: string;
  initials: string;
  station: string;
  status: 'In Progress' | 'Pending' | 'Complete' | 'Blocked' | 'Sign-off';
  statusColor: string;
  dotColor: string;
  wo: string;
  taskTitle: string;
  priority: 'Critical' | 'High' | 'Normal' | 'Low';
  priorityColor: string;
  progress: number;
  time: string;
  overdue?: boolean;
  alertNote?: string;
  partNumber?: string;
  activities: ActivityItem[];
}

const TEAM_MEMBERS: TeamMemberData[] = [
  {
    id: 'sc',
    name: 'S. Chen',
    fullName: 'Sarah Chen',
    initials: 'SC',
    station: 'Station 1A',
    status: 'Blocked',
    statusColor: 'bg-[#450A0A] text-error border border-error/30',
    dotColor: 'bg-error',
    wo: 'WO-27891',
    taskTitle: 'Hydraulic Line Routing',
    priority: 'Normal',
    priorityColor: 'bg-bg-base text-text-secondary border border-border-default',
    progress: 42,
    time: '00:49',
    alertNote: 'Awaiting parts · P-737-5512 · ETA unknown',
    partNumber: 'P-737-5512',
    activities: [
      { time: '12:47', text: 'Task blocked (part shortage)', dot: 'bg-error' },
      { time: '12:30', text: 'Step 3 of 7 complete', dot: 'bg-border-default' },
      { time: '11:58', text: 'Task started at Station 1A', dot: 'bg-border-default' },
    ]
  },
  {
    id: 'jm',
    name: 'J. Martinez',
    fullName: 'Jorge Martinez',
    initials: 'JM',
    station: 'Station 4B',
    status: 'In Progress',
    statusColor: 'bg-sky-100 text-sky-600 border border-sky-300/30',
    dotColor: 'bg-warning',
    wo: 'WO-28471',
    taskTitle: 'Fuselage Panel Inspection — Sec 12',
    priority: 'Critical',
    priorityColor: 'bg-error/15 text-error border border-error/30',
    progress: 45,
    time: '00:44',
    overdue: true,
    alertNote: 'Critical priority · Overdue by +00:23',
    partNumber: 'P-737-4422',
    activities: [
      { time: '14:08', text: 'Step 4 of 9 underway', dot: 'bg-warning' },
      { time: '13:47', text: 'Inspection task started', dot: 'bg-border-default' },
      { time: '13:45', text: 'Work order scanned at Station 4B', dot: 'bg-border-default' },
    ]
  },
  {
    id: 'kt',
    name: 'K. Thompson',
    fullName: 'Keira Thompson',
    initials: 'KT',
    station: 'Station 7A',
    status: 'Pending',
    statusColor: 'bg-bg-elevated text-text-secondary border border-border-default',
    dotColor: 'bg-text-secondary',
    wo: 'WO-28392',
    taskTitle: 'Torque Verification — Wing Rib',
    priority: 'High',
    priorityColor: 'bg-warning/15 text-warning border border-warning/30',
    progress: 0,
    time: '--',
    alertNote: 'Next in queue · Pre-checks pending tooling release',
    activities: [
      { time: '13:15', text: 'Assigned to Station 7A', dot: 'bg-border-default' },
      { time: '12:50', text: 'Pre-flight tooling verified', dot: 'bg-border-default' },
    ]
  },
  {
    id: 'ro',
    name: 'R. Okafor',
    fullName: 'Rachel Okafor',
    initials: 'RO',
    station: 'Station 2C',
    status: 'Complete',
    statusColor: 'bg-[#14532D] text-success border border-success/30',
    dotColor: 'bg-success',
    wo: 'WO-28156',
    taskTitle: 'Component Assembly Sign-off',
    priority: 'Normal',
    priorityColor: 'bg-bg-base text-text-secondary border border-border-default',
    progress: 100,
    time: '01:12',
    alertNote: 'All 12 checkpoints passed 100%',
    activities: [
      { time: '13:58', text: 'Sign-off stamp applied', dot: 'bg-success' },
      { time: '13:40', text: 'Final torque readings logged', dot: 'bg-border-default' },
      { time: '12:45', text: 'Assembly initiated', dot: 'bg-border-default' },
    ]
  },
  {
    id: 'mt',
    name: 'M. Torres',
    fullName: 'Miguel Torres',
    initials: 'MT',
    station: 'Station 9B',
    status: 'In Progress',
    statusColor: 'bg-sky-100 text-sky-600 border border-sky-300/30',
    dotColor: 'bg-sky-500',
    wo: 'WO-27654',
    taskTitle: 'Avionics Harness Installation',
    priority: 'Normal',
    priorityColor: 'bg-bg-base text-text-secondary border border-border-default',
    progress: 15,
    time: '00:12',
    alertNote: 'On schedule · Section B connector routing',
    activities: [
      { time: '14:18', text: 'Wire bundle route started', dot: 'bg-info' },
      { time: '14:05', text: 'Connector kit unpacked', dot: 'bg-border-default' },
    ]
  },
  {
    id: 'ap',
    name: 'A. Patel',
    fullName: 'Ananya Patel',
    initials: 'AP',
    station: 'Station 3D',
    status: 'Sign-off',
    statusColor: 'bg-[#451A03] text-warning border border-warning/30',
    dotColor: 'bg-warning',
    wo: 'WO-27341',
    taskTitle: 'Cabin Pressure Seal Verification',
    priority: 'Low',
    priorityColor: 'bg-bg-base text-text-secondary border border-border-default',
    progress: 95,
    time: '01:45',
    alertNote: 'Supervisor sign-off pending review',
    activities: [
      { time: '14:15', text: 'Awaiting supervisor signature', dot: 'bg-warning' },
      { time: '13:50', text: 'Pressure test delta verified: 0.02 psi', dot: 'bg-border-default' },
    ]
  }
];

import { DashboardSidebar } from '../components/DashboardSidebar';

export const Screen4_3 = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(TEAM_MEMBERS[0]); // S. Chen initially selected
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const handleSelectMember = (member: TeamMemberData) => {
    setSelectedMember(member);
    setIsDetailOpen(true);
  };

  const handleSelectException = (id: string) => {
    const found = TEAM_MEMBERS.find(m => m.id === id);
    if (found) handleSelectMember(found);
  };

  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden flex shrink-0">
      
      {/* 1. Left Sidebar Navigation — 100% unified */}
      <DashboardSidebar 
        activeTab="Team" 
        onSelectException={handleSelectException}
      />

      {/* 2. Main Dashboard Body Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-bg-base relative">
        
        {/* Top Header Bar */}
        <header className="h-[56px] bg-bg-surface border-b border-border-subtle flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <h1 className="font-sans font-semibold text-[18px] text-text-primary">Floor Overview & Shift Operations</h1>
            <span className="font-sans text-[13px] text-text-secondary">· 23 Apr 2024 · Morning Shift</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input 
                type="text" 
                placeholder="Search team or WO..." 
                className="h-[34px] w-[220px] bg-bg-elevated border border-border-default rounded-md pl-9 pr-3 font-sans text-[12px] text-text-primary focus:outline-none focus:border-secondary transition-colors" 
              />
            </div>
            <button className="h-[34px] px-3 bg-bg-elevated border border-border-default rounded-md flex items-center gap-1.5 text-text-primary font-sans text-[12px] font-medium hover:bg-bg-surface transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            {!isDetailOpen && selectedMember && (
              <button 
                onClick={() => setIsDetailOpen(true)}
                className="h-[34px] px-3 bg-secondary/15 border border-secondary text-secondary rounded-md font-sans text-[12px] font-medium hover:bg-secondary/25 transition-colors"
              >
                Highlight: {selectedMember.name}
              </button>
            )}
          </div>
        </header>

        {/* Dashboard Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* SECTION 1: FLOOR METRICS AT THE TOP */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-text-secondary">
                Floor Metrics & Shift Performance
              </h2>
              <span className="font-mono text-[12px] text-text-secondary">Live updates every 30s</span>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-4 gap-4">
              <StatCard title="Tasks Complete" value="47/68" badge="69% · On Track" badgeColor="success" progress={69} />
              <StatCard title="Active Technicians" value="6/8" subtext="2 on break · 1 standby" />
              <StatCard title="Blocked" value="3" valueColor="text-error" badge="Needs attention" badgeColor="error" />
              <StatCard title="Avg Completion" value="84%" subtext="↑ +12% vs yesterday" subtextColor="text-success" />
            </div>
          </div>

          {/* SECTION 2: MY TEAM AT THE BOTTOM (NO TABLE DUPLICATION) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <h2 className="font-sans font-semibold text-[15px] text-text-primary">My Team</h2>
                <span className="h-[20px] px-2 rounded-md bg-secondary/15 text-secondary font-sans font-semibold text-[11px] flex items-center">
                  6 Technicians · 1 Blocked
                </span>
              </div>
              <span className="font-sans text-[12px] text-text-secondary">
                Click any technician card to view highlight details & supervisor actions
              </span>
            </div>

            {/* 6 Technician Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-3 gap-4">
              {TEAM_MEMBERS.map((member) => {
                const isSelected = selectedMember?.id === member.id && isDetailOpen;
                return (
                  <div 
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className={`bg-bg-surface rounded-xl p-4 border cursor-pointer transition-all flex flex-col justify-between min-h-[175px] shadow-sm ${
                      isSelected 
                        ? 'bg-bg-elevated border-secondary ring-1 ring-secondary/50 shadow-md' 
                        : 'border-border-subtle hover:border-secondary/50 hover:bg-bg-elevated'
                    }`}
                  >
                    <div>
                      {/* Top Row: Avatar + Name + Station + Status Tag */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-9 h-9 rounded-md bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-primary font-sans text-[12px] font-bold shrink-0">
                            {member.initials}
                          </div>
                          <div className="min-w-0">
                            <div className="font-sans font-semibold text-[14px] text-text-primary hover:text-secondary transition-colors truncate">
                              {member.name}
                            </div>
                            <div className="font-sans text-[11px] text-text-secondary">{member.station}</div>
                          </div>
                        </div>

                        {/* Status Tag (slightly rounded, not pill) */}
                        <div className={`h-[22px] px-2 rounded-md font-sans font-semibold text-[10px] flex items-center gap-1.5 shrink-0 ${member.statusColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${member.dotColor}`}></span>
                          {member.status}
                        </div>
                      </div>

                      {/* Work Order & Task Title */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[12px] font-bold text-text-primary">{member.wo}</span>
                          <span className={`h-[18px] px-1.5 rounded-md text-[9px] font-sans font-bold uppercase tracking-wider ${member.priorityColor}`}>
                            {member.priority}
                          </span>
                        </div>
                        <p className="font-sans text-[12px] text-text-secondary line-clamp-1">
                          {member.taskTitle}
                        </p>
                      </div>

                      {/* Alert Note snippet if blocked or overdue */}
                      {member.alertNote && (
                        <div className="mb-3 text-[11px] font-sans text-error bg-error/10 border border-error/20 rounded-md px-2 py-1 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{member.alertNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar & Footer */}
                    <div className="pt-2 border-t border-border-subtle/50">
                      <div className="flex items-center justify-between text-[11px] font-mono text-text-secondary mb-1">
                        <span>Progress</span>
                        <span className="font-bold text-text-primary">{member.progress}%</span>
                      </div>
                      <div className="w-full h-[5px] bg-bg-elevated rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${member.progress === 100 ? 'bg-success' : 'bg-secondary'}`}
                          style={{ width: `${member.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3. Individual Team Highlight Popup to the right (SEPARATE FROM DASHBOARD, ON TOP OF IT) */}
        {isDetailOpen && selectedMember && (
          <>
            {/* Subtle backdrop overlay behind popup */}
            <div 
              className="absolute inset-0 bg-black/45 backdrop-blur-[1px] z-30 transition-opacity"
              onClick={() => setIsDetailOpen(false)}
            />

            {/* Slide-over Popup Drawer firmly anchored on top of dashboard */}
            <aside className="absolute top-0 right-0 h-full w-[360px] max-w-[calc(100%-40px)] bg-bg-elevated border-l border-border-default shadow-[-12px_0_35px_rgba(0,0,0,0.6)] z-40 flex flex-col overflow-hidden select-none animate-in slide-in-from-right duration-200">
              
              {/* Popup Header with Avatar, Details, and prominent Close X */}
              <div className="p-4 border-b border-border-subtle flex items-center justify-between bg-bg-surface shrink-0 gap-3">
                <div className="flex items-center gap-3 min-w-0 pr-1">
                  <div className="w-11 h-11 rounded-md bg-sky-100 border border-secondary/30 flex items-center justify-center text-info font-sans text-[15px] font-bold shrink-0">
                    {selectedMember.initials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans font-semibold text-[16px] text-text-primary leading-tight truncate">
                      {selectedMember.fullName}
                    </h2>
                    <p className="font-sans text-[11px] text-text-secondary mt-0.5 truncate">
                      {selectedMember.station} · {selectedMember.name}
                    </p>
                  </div>
                </div>

                {/* Close Button X — always visible, shrink-0, high contrast */}
                <button 
                  onClick={() => setIsDetailOpen(false)}
                  className="w-8 h-8 rounded-md bg-bg-base hover:bg-bg-surface border border-border-default flex items-center justify-center text-text-primary hover:text-white transition-colors shrink-0 shadow-xs"
                  title="Close highlight popup"
                  aria-label="Close panel"
                >
                  <X className="w-4 h-4 text-text-primary" />
                </button>
              </div>

              {/* Popup Scrollable Body — never cut off */}
              <div className="p-5 flex-1 overflow-y-auto space-y-5">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary font-bold">
                    Individual Team Highlight
                  </span>
                  <div className={`h-[22px] px-2 rounded-md font-sans font-semibold text-[10px] flex items-center gap-1.5 ${selectedMember.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedMember.dotColor}`}></span>
                    {selectedMember.status}
                  </div>
                </div>

                {/* Current Assignment Card */}
                <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] font-bold text-text-primary">{selectedMember.wo}</span>
                    <span className={`h-[20px] px-2 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider ${selectedMember.priorityColor}`}>
                      {selectedMember.priority} Priority
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-semibold text-[14px] text-text-primary leading-snug">
                      {selectedMember.taskTitle}
                    </h3>
                    <p className="font-mono text-[11px] text-text-secondary mt-1">Elapsed: {selectedMember.time}</p>
                  </div>
                  
                  {selectedMember.alertNote && (
                    <div className="p-3 rounded-md border text-[12px] font-sans flex items-start gap-2 bg-error/10 border-error/30 text-error">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{selectedMember.alertNote}</span>
                    </div>
                  )}

                  <div className="pt-1">
                    <div className="flex justify-between items-center text-[11px] font-sans text-text-secondary mb-1">
                      <span>Task Progress</span>
                      <span className="font-mono text-text-primary font-bold">{selectedMember.progress}%</span>
                    </div>
                    <div className="w-full h-[6px] bg-bg-base rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${selectedMember.progress === 100 ? 'bg-success' : 'bg-secondary'}`} 
                        style={{ width: `${selectedMember.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full h-[42px] bg-secondary rounded-lg text-white font-sans text-[13px] font-medium hover:bg-secondary-hover transition-colors flex items-center justify-center gap-2 shadow-sm">
                    Reassign to Available Station
                  </button>
                  {selectedMember.partNumber && (
                    <button className="w-full h-[42px] bg-bg-surface border border-border-default rounded-lg text-text-primary font-sans text-[13px] font-medium hover:bg-bg-base transition-colors flex items-center justify-center gap-2">
                      Order Parts — {selectedMember.partNumber}
                    </button>
                  )}
                  <button className="w-full h-[42px] bg-bg-surface border border-border-default rounded-lg text-text-primary font-sans text-[13px] font-medium hover:bg-bg-base transition-colors flex items-center justify-center gap-2">
                    Assign Alternate Task
                  </button>
                </div>

                {/* Recent Activity Timeline */}
                <div>
                  <h3 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider font-semibold mb-3">
                    Recent Activity
                  </h3>
                  <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px before:h-full before:w-0.5 before:bg-border-subtle">
                    {selectedMember.activities.map((act, index) => (
                      <div key={index} className="relative flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full ${act.dot} border-2 border-bg-elevated shrink-0 z-10 mt-0.5`}></div>
                        <div>
                          <p className="font-mono text-[11px] text-text-secondary mb-0.5">{act.time}</p>
                          <p className="font-sans text-[12px] text-text-primary leading-tight">{act.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </aside>
          </>
        )}

      </main>

    </div>
  );
};

function SidebarNavItem({ icon: Icon, label, active, badge }: { icon: any; label: string; active?: boolean; badge?: string }) {
  return (
    <div 
      className={`h-[40px] px-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
        active 
          ? 'bg-secondary/15 text-secondary font-medium' 
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4" />
        <span className="font-sans text-[13px]">{label}</span>
      </div>
      {badge && (
        <span className="h-[18px] px-2 rounded-md bg-bg-elevated border border-border-default font-mono text-[10px] text-text-secondary flex items-center">
          {badge}
        </span>
      )}
    </div>
  );
}

function ExceptionItem({ icon, title, desc, onClick }: { icon: string; title: string; desc: string; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-start gap-2 p-1.5 rounded hover:bg-bg-elevated cursor-pointer transition-colors"
    >
      <span className="text-[11px] leading-tight mt-0.5">{icon}</span>
      <div className="flex flex-col min-w-0">
        <span className="font-sans text-[12px] text-text-primary font-medium truncate">{title}</span>
        <span className="font-sans text-[10px] text-text-secondary truncate">{desc}</span>
      </div>
    </div>
  );
}

function StatCard({ title, value, valueColor = "text-text-primary", badge, badgeColor, subtext, subtextColor = "text-text-secondary", progress }: any) {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-xl p-5 flex flex-col justify-between shadow-sm min-h-[140px]">
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-wider font-semibold text-text-secondary mb-2">{title}</h3>
        <div className="flex flex-col gap-1.5">
          <span className={`font-mono text-[32px] font-bold leading-none ${valueColor}`}>{value}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 mt-2">
        {badge && (
          <div className={`h-[22px] px-2.5 rounded-md font-sans font-semibold text-[10px] flex items-center w-fit whitespace-nowrap ${badgeColor === 'success' ? 'bg-success/15 text-success border border-success/30' : 'bg-error/15 text-error border border-error/30'}`}>
            {badge}
          </div>
        )}
        
        {subtext && (
          <span className={`font-sans text-[12px] font-medium ${subtextColor}`}>{subtext}</span>
        )}
        
        {progress !== undefined && (
          <div className="w-full h-[5px] bg-bg-elevated rounded-full overflow-hidden mt-0.5">
            <div className="h-full bg-secondary rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        )}
      </div>
    </div>
  );
}
