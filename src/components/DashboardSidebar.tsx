import React from 'react';
import { Logo } from './docs/Logo';
import { 
  LayoutDashboard, ClipboardList, CheckSquare, Users, BarChart3, Clock, Bell
} from 'lucide-react';

export type DashboardTab = 'Floor Overview' | 'Work Orders' | 'Inspections' | 'Team' | 'Reports' | 'Schedule';

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange?: (tab: DashboardTab) => void;
  onSelectException?: (id: string) => void;
  supervisorName?: string;
  supervisorRole?: string;
  supervisorInitials?: string;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeTab,
  onTabChange,
  onSelectException,
  supervisorName = 'J. Doe',
  supervisorRole = 'Supervisor · Floor 2',
  supervisorInitials = 'JD'
}) => {
  return (
    <aside className="w-[230px] bg-bg-surface border-r border-border-subtle flex flex-col justify-between shrink-0 h-full select-none overflow-hidden">
      {/* Top Scrollable/Flex Section */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
        {/* Brand */}
        <div className="p-4 border-b border-border-subtle flex items-center gap-3 shrink-0">
          <Logo size={24} />
          <div>
            <div className="font-mono font-bold text-[15px] text-text-primary tracking-tight">FactoryFlow</div>
            <div className="font-sans text-[11px] text-text-secondary">Boeing MES · Plant 2</div>
          </div>
        </div>

        {/* Primary Navigation Links */}
        <nav className="p-3 space-y-1 shrink-0">
          <SidebarNavItem 
            icon={LayoutDashboard} 
            label="Floor Overview" 
            active={activeTab === 'Floor Overview'} 
            onClick={() => onTabChange?.('Floor Overview')}
          />
          <SidebarNavItem 
            icon={ClipboardList} 
            label="Work Orders" 
            badge="68" 
            active={activeTab === 'Work Orders'} 
            onClick={() => onTabChange?.('Work Orders')}
          />
          <SidebarNavItem 
            icon={CheckSquare} 
            label="Inspections" 
            active={activeTab === 'Inspections'} 
            onClick={() => onTabChange?.('Inspections')}
          />
          <SidebarNavItem 
            icon={Users} 
            label="Team" 
            badge="6" 
            active={activeTab === 'Team'} 
            onClick={() => onTabChange?.('Team')}
          />
          <SidebarNavItem 
            icon={BarChart3} 
            label="Reports" 
            active={activeTab === 'Reports'} 
            onClick={() => onTabChange?.('Reports')}
          />
          <SidebarNavItem 
            icon={Clock} 
            label="Schedule" 
            active={activeTab === 'Schedule'} 
            onClick={() => onTabChange?.('Schedule')}
          />
        </nav>

        {/* Shift Summary Box */}
        <div className="mx-3 p-3 bg-bg-elevated border border-border-subtle rounded-lg shrink-0 mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary font-semibold">Morning Shift</span>
            <span className="h-[20px] px-2 rounded-md bg-sky-100 text-info font-sans font-medium text-[10px] flex items-center">Live</span>
          </div>
          <p className="font-mono text-[11px] text-text-primary mb-2">Denver Plant 2 · 06:00–14:00</p>
          <div className="flex justify-between items-center text-[11px] font-sans text-text-secondary mb-1">
            <span>Shift Progress</span>
            <span className="font-mono text-text-primary font-bold">47 / 68</span>
          </div>
          <div className="w-full h-[5px] bg-bg-base rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '69%' }}></div>
          </div>
        </div>

        {/* Exceptions Widget */}
        <div className="mx-3 p-3 bg-bg-base/60 border border-border-subtle rounded-lg shrink-0 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary font-semibold">Exceptions</span>
            <span className="h-[18px] px-1.5 rounded-md bg-error/15 text-error font-mono text-[10px] font-bold">3</span>
          </div>
          <div className="space-y-1.5 text-[11px] font-sans">
            <div 
              onClick={() => onSelectException?.('jm')}
              className="flex items-start gap-2 p-1 rounded hover:bg-bg-elevated transition-colors cursor-pointer"
            >
              <span className="text-[11px] leading-tight mt-0.5">🔴</span>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-text-primary truncate">WO-28471 Overdue</span>
                <span className="text-text-secondary truncate">J. Martinez · +00:23</span>
              </div>
            </div>
            <div 
              onClick={() => onSelectException?.('sc')}
              className="flex items-start gap-2 p-1 rounded hover:bg-bg-elevated transition-colors cursor-pointer"
            >
              <span className="text-[11px] leading-tight mt-0.5">🔴</span>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-text-primary truncate">WO-27891 Blocked</span>
                <span className="text-text-secondary truncate">S. Chen · Parts shortage</span>
              </div>
            </div>
            <div 
              onClick={() => onSelectException?.('ap')}
              className="flex items-start gap-2 p-1 rounded hover:bg-bg-elevated transition-colors cursor-pointer"
            >
              <span className="text-[11px] leading-tight mt-0.5">🟡</span>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-text-primary truncate">WO-27341 Sign-off</span>
                <span className="text-text-secondary truncate">A. Patel · Needs review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supervisor Profile anchored at the bottom */}
      <div className="p-3.5 bg-bg-surface border-t border-border-subtle flex items-center justify-between shrink-0 w-full mt-auto">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-md bg-sky-100 border border-secondary/30 flex items-center justify-center text-info font-sans text-[13px] font-bold shrink-0">
            {supervisorInitials}
          </div>
          <div className="min-w-0">
            <div className="font-sans font-semibold text-[13px] text-text-primary truncate">{supervisorName}</div>
            <div className="font-sans text-[11px] text-text-secondary truncate">{supervisorRole}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="h-[22px] px-2 rounded-md bg-[#14532D] text-success text-[10px] font-medium flex items-center shrink-0">
            Online
          </div>
          <button className="relative p-1 rounded-md text-text-secondary hover:text-text-primary transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-error rounded-full"></span>
          </button>
        </div>
      </div>
    </aside>
  );
};

function SidebarNavItem({ 
  icon: Icon, 
  label, 
  active, 
  badge,
  onClick
}: { 
  icon: any; 
  label: string; 
  active?: boolean; 
  badge?: string;
  onClick?: () => void;
}) {
  return (
    <div 
      onClick={onClick}
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
