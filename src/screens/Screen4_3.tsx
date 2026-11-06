import React from 'react';
import { Bell, Search, Filter, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Logo } from '../components/docs/Logo';

export const Screen4_3 = () => {
  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-xl shadow-2xl flex shrink-0">
      
      {/* Left Sidebar */}
      <div className="w-[280px] bg-bg-surface border-r border-border-subtle flex flex-col shrink-0 h-full">
        <div className="p-4 border-b border-border-subtle">
          <h2 className="font-sans text-[12px] uppercase text-text-secondary tracking-wider font-semibold mb-1">Morning Shift</h2>
          <p className="font-mono text-[12px] text-text-primary mb-3">06:00 — 14:00 · Denver Plant 2</p>
          <div className="flex justify-between items-center mb-1">
            <span className="font-sans text-[12px] text-text-secondary">47 of 68 tasks complete</span>
          </div>
          <div className="w-full h-[4px] bg-bg-elevated rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '69%' }}></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-sans text-[12px] uppercase text-text-secondary tracking-wider font-semibold mb-3">My Team</h3>
            <div className="space-y-2">
              <TeamMember name="J. Martinez" station="Station 4B" status="In Progress" wo="WO-28471" dotColor="bg-warning" />
              <TeamMember name="K. Thompson" station="Station 7A" status="Pending" wo="WO-28392" dotColor="bg-success" />
              <TeamMember name="R. Okafor" station="Station 2C" status="Complete" wo="WO-28156" dotColor="bg-success" />
              <TeamMember name="S. Chen" station="Station 1A" status="Blocked" wo="WO-27891" dotColor="bg-error" active />
              <TeamMember name="M. Torres" station="Station 9B" status="In Progress" wo="WO-27654" dotColor="bg-success" />
              <TeamMember name="A. Patel" station="Station 3D" status="Sign-off" wo="WO-27341" dotColor="bg-warning" />
            </div>
          </div>

          <div className="p-4 border-t border-border-subtle">
            <h3 className="font-sans text-[12px] uppercase text-text-secondary tracking-wider font-semibold mb-3">Exceptions</h3>
            <div className="space-y-2">
              <ExceptionItem icon="🔴" title="WO-28471 Overdue" desc="J. Martinez · +00:23" />
              <ExceptionItem icon="🔴" title="WO-27891 Blocked" desc="S. Chen · Awaiting parts" />
              <ExceptionItem icon="🟡" title="WO-27341 Sign-off pending" desc="A. Patel" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Nav */}
        <div className="h-[56px] bg-bg-elevated border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Logo size={24} />
              <span className="font-mono font-bold text-[16px] text-text-primary tracking-tight">FactoryFlow</span>
            </div>
            
            <nav className="flex items-center gap-6 h-full">
              <NavLink label="Floor Overview" />
              <NavLink label="Work Orders" />
              <NavLink label="Inspections" />
              <NavLink label="Team" active />
              <NavLink label="Reports" />
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[24px] px-3 rounded-full bg-sky-100 text-primary font-sans font-medium text-[12px] flex items-center border border-secondary/30">
              Supervisor View
            </div>
            <div className="w-8 h-8 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center text-text-primary font-sans text-[12px] font-medium">
              JD
            </div>
            <button className="relative text-text-secondary hover:text-text-primary">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 flex">
          <div className="flex-1 pr-6 flex flex-col">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="font-sans font-semibold text-[20px] text-text-primary mb-1">Team Overview</h1>
                <p className="font-sans text-[14px] text-text-secondary">23 Apr 2024 · Morning Shift</p>
              </div>
              <div className="flex gap-2">
                <button className="h-[36px] px-4 bg-bg-surface border border-border-default rounded-md flex items-center gap-2 text-text-primary font-sans text-[13px] font-medium hover:bg-bg-elevated transition-colors">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input type="text" placeholder="Search team or WO..." className="h-[36px] w-[200px] bg-bg-surface border border-border-default rounded-md pl-9 pr-3 font-sans text-[13px] text-text-primary focus:outline-none focus:border-secondary" />
                </div>
              </div>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <StatCard title="Tasks Complete" value="47/68" badge="69% · On Track" badgeColor="success" progress={69} />
              <StatCard title="Active Technicians" value="6/8" subtext="2 on break" />
              <StatCard title="Blocked" value="3" valueColor="text-error" badge="Needs attention" badgeColor="error" />
              <StatCard title="Avg Completion" value="84%" subtext="↑ +12% vs yesterday" subtextColor="text-success" />
            </div>

            {/* Team Status Table */}
            <div className="bg-bg-surface border border-border-subtle rounded-xl overflow-hidden flex-1 flex flex-col shadow-sm">
              <div className="grid grid-cols-[1.5fr_0.8fr_1.8fr_1.5fr_0.8fr] gap-4 px-6 py-4 border-b border-border-subtle bg-bg-elevated">
                <div className="font-sans text-[11px] uppercase text-text-secondary font-bold tracking-widest">Technician</div>
                <div className="font-sans text-[11px] uppercase text-text-secondary font-bold tracking-widest">Station</div>
                <div className="font-sans text-[11px] uppercase text-text-secondary font-bold tracking-widest">Current Task</div>
                <div className="font-sans text-[11px] uppercase text-text-secondary font-bold tracking-widest">Status</div>
                <div className="font-sans text-[11px] uppercase text-text-secondary font-bold tracking-widest text-right">Actions</div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <TableRow name="J. Martinez" initials="JM" station="Station 4B" task="WO-28471" priority="Critical" status="In Progress" statusColor="bg-sky-100 text-sky-600" progress={45} time="00:44" overdue />
                <TableRow name="K. Thompson" initials="KT" station="Station 7A" task="WO-28392" priority="High" status="Pending" statusColor="bg-sky-100 text-sky-600" progress={0} time="--" />
                <TableRow name="R. Okafor" initials="RO" station="Station 2C" task="WO-28156" priority="Normal" status="Complete" statusColor="bg-[#14532D] text-success" progress={100} time="01:12" />
                <TableRow name="S. Chen" initials="SC" station="Station 1A" task="WO-27891" priority="Normal" status="Blocked" statusColor="bg-[#450A0A] text-error" progress={42} time="00:49" active />
                <TableRow name="M. Torres" initials="MT" station="Station 9B" task="WO-27654" priority="Normal" status="In Progress" statusColor="bg-sky-100 text-sky-600" progress={15} time="00:12" />
                <TableRow name="A. Patel" initials="AP" station="Station 3D" task="WO-27341" priority="Low" status="Sign-off" statusColor="bg-[#451A03] text-warning" progress={95} time="01:45" />
              </div>
            </div>
          </div>

          {/* Selected Row Detail Panel */}
          <div className="w-[280px] bg-bg-elevated border border-border-subtle rounded-lg flex flex-col shrink-0">
            <div className="p-6 border-b border-border-subtle">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-info font-sans text-[16px] font-medium">
                  SC
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-[18px] text-text-primary">S. Chen</h2>
                  <p className="font-sans text-[14px] text-text-secondary">Station 1A</p>
                </div>
              </div>
              
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 mb-4">
                <p className="font-mono text-[14px] text-text-primary mb-2">WO-27891 · Hydraulic Line Routing</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-[20px] px-2 rounded-full bg-[#450A0A] text-error font-sans font-medium text-[11px] flex items-center">Blocked</div>
                  <span className="font-sans text-[13px] text-text-secondary">Blocked since 12:47</span>
                </div>
                <p className="font-sans text-[13px] text-error">Awaiting parts · P-737-5512 · ETA unknown</p>
              </div>

              <div className="space-y-2">
                <button className="w-full h-[44px] bg-secondary rounded-md text-white font-sans text-[14px] font-medium hover:bg-secondary-hover transition-colors">
                  Reassign to Available Station
                </button>
                <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
                  Order Parts — P-737-5512
                </button>
                <button className="w-full h-[44px] bg-bg-surface border border-border-default rounded-md text-text-primary font-sans text-[14px] font-medium hover:bg-bg-base transition-colors">
                  Assign Alternate Task
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              <h3 className="font-sans text-[12px] uppercase text-text-secondary tracking-wider font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px before:h-full before:w-0.5 before:bg-border-subtle">
                
                <div className="relative flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-error border-2 border-bg-elevated shrink-0 z-10 mt-1"></div>
                  <div>
                    <p className="font-mono text-[12px] text-text-secondary mb-1">12:47</p>
                    <p className="font-sans text-[13px] text-text-primary">Task blocked (part shortage)</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-border-default border-2 border-bg-elevated shrink-0 z-10 mt-1"></div>
                  <div>
                    <p className="font-mono text-[12px] text-text-secondary mb-1">12:30</p>
                    <p className="font-sans text-[13px] text-text-primary">Step 3 of 7 complete</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-border-default border-2 border-bg-elevated shrink-0 z-10 mt-1"></div>
                  <div>
                    <p className="font-mono text-[12px] text-text-secondary mb-1">11:58</p>
                    <p className="font-sans text-[13px] text-text-primary">Task started</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function NavLink({ label, active }: { label: string, active?: boolean }) {
  return (
    <div className={`h-full flex items-center border-b-2 px-1 ${active ? 'border-secondary text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'} cursor-pointer transition-colors`}>
      <span className="font-sans text-[14px] font-medium">{label}</span>
    </div>
  );
}

function TeamMember({ name, station, status, wo, dotColor, active }: any) {
  const statusBg = dotColor.includes('success') ? 'bg-success/10 text-success' : 
                   dotColor.includes('warning') ? 'bg-warning/10 text-warning' : 
                   dotColor.includes('error') ? 'bg-error/10 text-error' : 'bg-info/10 text-info';

  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <div className={`p-4 rounded-xl cursor-pointer transition-all ${active ? 'bg-bg-elevated border border-secondary/50 shadow-md' : 'hover:bg-bg-elevated border border-transparent'}`}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center text-text-secondary font-sans text-[12px] font-bold shrink-0">
              {name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <span className="font-sans text-[15px] text-text-primary font-bold leading-tight truncate">{name}</span>
          </div>
          
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className={`h-[20px] px-2 rounded-full font-sans font-semibold text-[10px] flex items-center gap-1.5 ${statusBg} border border-current/10`}>
              <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></div>
              {formattedStatus}
            </div>
            <div className="w-[60px] h-[3px] bg-bg-base rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-subtle">
          <div className="flex flex-col">
            <span className="font-sans text-[9px] text-text-secondary uppercase tracking-wider">Station</span>
            <span className="font-sans text-[12px] text-text-primary font-medium">{station}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[9px] text-text-secondary uppercase tracking-wider">Work Order</span>
            <span className="font-mono text-[12px] text-text-primary font-bold">{wo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExceptionItem({ icon, title, desc }: any) {
  return (
    <div className="flex items-start gap-2 p-2">
      <span className="text-[12px] leading-tight mt-0.5">{icon}</span>
      <div className="flex flex-col">
        <span className="font-sans text-[13px] text-text-primary">{title}</span>
        <span className="font-sans text-[11px] text-text-secondary">{desc}</span>
      </div>
    </div>
  );
}

function StatCard({ title, value, valueColor = "text-text-primary", badge, badgeColor, subtext, subtextColor = "text-text-secondary", progress }: any) {
  const formattedBadge = badge ? badge.split(' · ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' · ') : '';

  return (
    <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col shadow-sm min-h-[160px]">
      <h3 className="font-sans text-[12px] uppercase tracking-wider font-semibold text-text-secondary mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        <span className={`font-mono text-[36px] font-bold leading-none ${valueColor}`}>{value}</span>
        
        <div className="flex flex-col gap-3">
          {badge && (
            <div className={`h-[24px] px-3 rounded-full font-sans font-semibold text-[11px] flex items-center w-fit whitespace-nowrap ${badgeColor === 'success' ? 'bg-success/10 text-success border border-success/20' : 'bg-error/10 text-error border border-error/20'}`}>
              {formattedBadge}
            </div>
          )}
          
          {subtext && (
            <span className={`font-sans text-[13px] font-medium ${subtextColor}`}>{subtext}</span>
          )}
          
          {progress !== undefined && (
            <div className="w-full h-[6px] bg-bg-elevated rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TableRow({ name, initials, station, task, priority, status, statusColor, progress, time, overdue, active }: any) {
  const [showActions, setShowActions] = React.useState(false);
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <div className={`grid grid-cols-[1.5fr_0.8fr_1.8fr_1.5fr_0.8fr] gap-4 px-6 py-5 border-b border-border-subtle items-center ${active ? 'bg-bg-elevated border-l-[4px] border-l-secondary shadow-inner' : 'hover:bg-bg-elevated border-l-[4px] border-l-transparent'} cursor-pointer transition-all`}>
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-sans text-[14px] text-text-primary font-semibold">{name}</span>
      </div>
      <div className="font-sans text-[13px] text-text-secondary">{station}</div>
      <div className="flex flex-col min-w-0">
        <span className="font-mono text-[14px] text-text-primary font-bold truncate">{task}</span>
        <span className="font-sans text-[11px] text-text-secondary uppercase tracking-wider">{priority} Priority</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className={`inline-flex h-[26px] px-3 rounded-full font-sans font-semibold text-[11px] items-center w-fit ${statusColor} border border-current/10`}>
          {formattedStatus}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-[6px] bg-bg-base rounded-full overflow-hidden max-w-[140px]">
            <div className={`h-full rounded-full ${progress === 100 ? 'bg-success' : 'bg-secondary'}`} style={{ width: `${progress}%` }}></div>
          </div>
          <span className="font-mono text-[12px] text-text-secondary font-bold">{progress}%</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 relative">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setShowActions(!showActions);
          }}
          className={`w-9 h-9 rounded-md flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-surface transition-colors ${showActions ? 'bg-bg-surface text-text-primary' : ''}`}
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>

        {showActions && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setShowActions(false)}></div>
            <div className="absolute right-0 top-full mt-1 w-[160px] bg-bg-elevated border border-border-subtle rounded-md shadow-xl z-40 py-1">
              <button className="w-full px-4 py-2 text-left font-sans text-[13px] text-text-primary hover:bg-bg-surface transition-colors">
                Reassign
              </button>
              <button className="w-full px-4 py-2 text-left font-sans text-[13px] text-text-primary hover:bg-bg-surface transition-colors">
                View Details
              </button>
              <button className="w-full px-4 py-2 text-left font-sans text-[13px] text-text-primary hover:bg-bg-surface transition-colors">
                Message Technician
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
