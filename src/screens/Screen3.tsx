import React, { useState } from 'react';
import { Logo } from '../components/docs/Logo';
import { 
  ChevronDown, ChevronRight, RefreshCw, Check, 
  LayoutDashboard, ClipboardList, CheckSquare, BarChart3, Clock,
  Filter, AlertTriangle
} from 'lucide-react';

interface Station {
  id: string;
  area: string;
  wo: string;
  desc: string;
  tech: string;
  status: 'Running' | 'Idle' | 'Blocked' | 'Maintenance' | 'Sign-off';
  progress: number;
}

const STATIONS: Station[] = [
  { id: 'Station 1A', area: 'Wing Assembly', wo: 'WO-27891', desc: 'Hydraulic Line Routing', tech: 'Sarah Chen', status: 'Blocked', progress: 42 },
  { id: 'Station 2C', area: 'Wing Assembly', wo: 'WO-28156', desc: 'Engine Pylon Mount', tech: 'Robert Okafor', status: 'Running', progress: 80 },
  { id: 'Station 3D', area: 'Landing Gear', wo: 'WO-27341', desc: 'Landing Gear Bay Cover', tech: 'Arjun Patel', status: 'Sign-off', progress: 95 },
  { id: 'Station 4B', area: 'Fuselage', wo: 'WO-28471', desc: 'Fuselage Skin Panel', tech: 'Juan Martinez', status: 'Blocked', progress: 45 },
  { id: 'Station 5A', area: 'Fuselage', wo: '—', desc: 'Standby / Tooling Prep', tech: 'Unassigned', status: 'Idle', progress: 0 },
  { id: 'Station 6C', area: 'Wing Assembly', wo: 'WO-28203', desc: 'Wing Spar Assembly', tech: 'Thomas Wilson', status: 'Running', progress: 30 },
  { id: 'Station 7A', area: 'Wing Assembly', wo: 'WO-28392', desc: 'Wing Rib Assembly', tech: 'Kevin Thompson', status: 'Running', progress: 55 },
  { id: 'Station 8B', area: 'Final Assembly', wo: '—', desc: 'Maintenance Scheduled', tech: 'Service Crew', status: 'Maintenance', progress: 0 },
  { id: 'Station 9B', area: 'Final Assembly', wo: 'WO-27654', desc: 'Composite Panel Bond', tech: 'Maria Torres', status: 'Running', progress: 70 },
  { id: 'Station 10A', area: 'Fuselage', wo: 'WO-28089', desc: 'Door Frame Install', tech: 'Carlos Rodriguez', status: 'Running', progress: 25 },
  { id: 'Station 11C', area: 'Landing Gear', wo: 'WO-27998', desc: 'Pressurization Test', tech: 'Brian Kim', status: 'Running', progress: 90 },
  { id: 'Station 12D', area: 'Paint & Finish', wo: 'WO-28301', desc: 'Fuel System Check', tech: 'David Jackson', status: 'Running', progress: 15 },
];

const AREAS = ['All Areas', 'Wing Assembly', 'Fuselage', 'Final Assembly', 'Paint & Finish', 'Landing Gear'];

import { DashboardSidebar } from '../components/DashboardSidebar';

export const Screen3 = () => {
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredStations = STATIONS.filter(s => {
    const matchesArea = selectedArea === 'All Areas' || s.area === selectedArea;
    const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchesArea && matchesStatus;
  });

  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden flex shrink-0">
      
      {/* 1. Left Navigation Sidebar — Harmonized & 100% Consistent */}
      <DashboardSidebar activeTab="Floor Overview" />

      {/* 2. Main Dashboard Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-bg-base relative">
        
        {/* Top Header Bar */}
        <header className="h-[56px] bg-bg-surface border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
          <div className="flex items-baseline gap-3">
            <h1 className="font-sans font-semibold text-[18px] text-text-primary">Production Floor — Real-Time Status</h1>
            <span className="font-mono text-[12px] text-text-secondary">Last updated 14:23:07</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-[12px] font-sans text-text-secondary mr-2">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span>8 Running</span>
              <span className="text-border-default">·</span>
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="text-error font-medium">2 Blocked</span>
            </div>
            <button 
              className="h-[34px] px-3 rounded-md bg-bg-elevated border border-border-default flex items-center gap-1.5 text-text-primary font-sans text-[12px] font-medium hover:bg-bg-surface transition-colors"
              title="Refresh floor status"
            >
              <RefreshCw className="w-3.5 h-3.5 text-text-secondary" />
              <span>Refresh</span>
            </button>
          </div>
        </header>

        {/* Dashboard Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* Collapsible Floor Filter Section */}
          <div className="bg-bg-surface border border-border-subtle rounded-xl shadow-sm overflow-hidden transition-all">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full px-4 py-3 flex items-center justify-between bg-bg-elevated hover:bg-bg-surface/80 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                {isFilterOpen ? (
                  <ChevronDown className="w-4 h-4 text-text-secondary" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-text-secondary" />
                )}
                <span className="font-sans font-semibold text-[13px] text-text-primary">Filter Floor & Work Centers</span>
                <span className="h-[20px] px-2 rounded-md bg-secondary/15 text-secondary font-sans font-semibold text-[10px] flex items-center">
                  {selectedArea} ({filteredStations.length} Stations)
                </span>
              </div>
              <span className="font-sans text-[11px] text-text-secondary">
                {isFilterOpen ? 'Click to collapse filters' : 'Click to expand filters'}
              </span>
            </button>

            {isFilterOpen && (
              <div className="p-4 border-t border-border-subtle/60 bg-bg-surface space-y-3">
                {/* Area Filter Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary font-bold mr-1">Area:</span>
                  {AREAS.map((area) => {
                    const active = selectedArea === area;
                    return (
                      <button
                        key={area}
                        onClick={() => setSelectedArea(area)}
                        className={`h-[28px] px-3 rounded-md font-sans text-[12px] font-medium transition-colors ${
                          active 
                            ? 'bg-secondary text-white shadow-sm' 
                            : 'bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-bg-surface'
                        }`}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-border-subtle/40">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-text-secondary font-bold mr-1">Status:</span>
                  {['All', 'Running', 'Blocked', 'Idle', 'Maintenance', 'Sign-off'].map((status) => {
                    const active = statusFilter === status;
                    return (
                      <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`h-[26px] px-2.5 rounded-md font-sans text-[11px] font-medium transition-colors ${
                          active 
                            ? 'bg-text-primary text-bg-base font-semibold' 
                            : 'bg-bg-base border border-border-subtle text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {status}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Station Cards Grid — Responsive, text wraps cleanly without right cutoff */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredStations.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>

        </div>

      </main>

    </div>
  );
};

const StationCard: React.FC<{ station: Station }> = ({ station }) => {
  const statusConfig: Record<string, { bg: string; dot: string; text: string; border: string }> = {
    'Running': { bg: 'bg-[#14532D]/40', dot: 'bg-success', text: 'text-success', border: 'border-l-success' },
    'Idle': { bg: 'bg-bg-elevated', dot: 'bg-text-secondary', text: 'text-text-secondary', border: 'border-l-text-secondary' },
    'Blocked': { bg: 'bg-[#450A0A]/40', dot: 'bg-error', text: 'text-error', border: 'border-l-error' },
    'Maintenance': { bg: 'bg-[#451A03]/40', dot: 'bg-warning', text: 'text-warning', border: 'border-l-warning' },
    'Sign-off': { bg: 'bg-sky-100/30', dot: 'bg-info', text: 'text-info', border: 'border-l-info' }
  };

  const cfg = statusConfig[station.status] || statusConfig['Idle'];
  const isBlocked = station.status === 'Blocked';

  return (
    <div className={`bg-bg-surface border border-border-subtle rounded-lg p-3.5 border-l-[4px] ${cfg.border} flex flex-col justify-between min-h-[135px] shadow-sm hover:border-secondary/40 transition-colors ${isBlocked ? 'bg-error/5 ring-1 ring-error/20' : ''}`}>
      <div>
        {/* Top: Station ID & Status Tag (rounded-md) */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-[14px] text-text-primary">{station.id}</span>
            <span className="font-sans text-[10px] text-text-secondary bg-bg-elevated px-1.5 py-0.5 rounded-md border border-border-subtle">
              {station.area}
            </span>
          </div>
          <div className={`h-[22px] px-2 rounded-md font-sans font-semibold text-[10px] flex items-center gap-1.5 shrink-0 ${cfg.bg} ${cfg.text} border border-current/20`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`}></span>
            {station.status}
          </div>
        </div>

        {/* Work Order & Description - Breaks to next line cleanly */}
        <div className="mb-2">
          <div className="font-mono text-[12px] font-bold text-text-primary mb-0.5">{station.wo}</div>
          <p className="font-sans text-[13px] text-text-secondary leading-snug break-words">
            {station.desc}
          </p>
        </div>
      </div>

      {/* Footer: Technician & Progress Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50 text-[11px] font-sans">
        <span className="text-text-secondary truncate max-w-[120px] font-medium">{station.tech}</span>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-[85px] h-[5px] bg-bg-elevated rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${cfg.dot}`} style={{ width: `${station.progress}%` }}></div>
          </div>
          <span className="font-mono text-[10px] text-text-secondary font-bold w-[28px] text-right">{station.progress}%</span>
        </div>
      </div>
    </div>
  );
}

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
