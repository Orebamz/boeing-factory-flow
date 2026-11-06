import React, { useState } from 'react';
import { Logo } from '../components/docs/Logo';
import { 
  Search, Download, Printer, MoreHorizontal, Check,
  LayoutDashboard, ClipboardList, CheckSquare, Users, BarChart3, Clock,
  Filter, AlertTriangle, ChevronRight, Bell
} from 'lucide-react';

interface OrderRow {
  id: string;
  part: string;
  desc: string;
  station: string;
  tech: string;
  priority: 'Critical' | 'High' | 'Normal' | 'Low';
  status: 'In Progress' | 'Pending' | 'Complete' | 'Blocked' | 'Req. Sign-off';
  due: string;
}

const INITIAL_ORDERS: OrderRow[] = [
  { id: 'WO-28471', part: 'P-737-4422', desc: 'Fuselage Skin Panel Inspection', station: 'Station 4B', tech: 'Juan Martinez', priority: 'Critical', status: 'In Progress', due: '14:30' },
  { id: 'WO-28392', part: 'P-737-3891', desc: 'Wing Rib Assembly Torque Verification', station: 'Station 7A', tech: 'Kevin Thompson', priority: 'High', status: 'Pending', due: '15:00' },
  { id: 'WO-28156', part: 'P-777-2201', desc: 'Engine Pylon Mount Check', station: 'Station 2C', tech: 'Robert Okafor', priority: 'Normal', status: 'Complete', due: '13:00' },
  { id: 'WO-27891', part: 'P-737-5512', desc: 'Hydraulic Line Routing (Parts Shortage)', station: 'Station 1A', tech: 'Sarah Chen', priority: 'High', status: 'Blocked', due: '12:00' },
  { id: 'WO-27654', part: 'P-787-0934', desc: 'Composite Panel Bond Inspection', station: 'Station 9B', tech: 'Maria Torres', priority: 'Normal', status: 'In Progress', due: '16:30' },
  { id: 'WO-27341', part: 'P-737-4891', desc: 'Landing Gear Bay Cover Install', station: 'Station 3D', tech: 'Arjun Patel', priority: 'Normal', status: 'Req. Sign-off', due: '11:30' },
  { id: 'WO-28203', part: 'P-737-6201', desc: 'Wing Spar Assembly & Seal Check', station: 'Station 6C', tech: 'Thomas Wilson', priority: 'Low', status: 'In Progress', due: '17:00' },
  { id: 'WO-28089', part: 'P-787-1102', desc: 'Door Frame Install & Rivet Inspection', station: 'Station 10A', tech: 'Carlos Rodriguez', priority: 'Normal', status: 'Pending', due: '16:00' },
];

import { DashboardSidebar } from '../components/DashboardSidebar';

export const Screen4 = () => {
  const [orders, setOrders] = useState<OrderRow[]>(INITIAL_ORDERS);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(['WO-28471']);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    const matchesQuery = searchQuery === '' || 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.part.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.tech.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="w-[1280px] h-[800px] bg-bg-base relative overflow-hidden flex shrink-0">
      
      {/* 1. Left Navigation Sidebar — Harmonized & 100% Consistent */}
      <DashboardSidebar activeTab="Work Orders" />

      {/* 2. Main Work Orders Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-bg-base relative min-w-0">
        
        {/* Top Header Bar */}
        <header className="h-[56px] bg-bg-surface border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
          <div className="flex items-baseline gap-3">
            <h1 className="font-sans font-semibold text-[18px] text-text-primary">Production Orders</h1>
            <span className="font-sans text-[13px] text-text-secondary">68 work orders · Morning Shift</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-bg-elevated border border-border-default rounded-md h-[32px] p-0.5">
              <button className="px-2.5 h-full rounded bg-bg-surface text-text-primary font-sans text-[11px] font-medium shadow-sm">Comfortable</button>
              <button className="px-2.5 h-full rounded text-text-secondary font-sans text-[11px] font-medium hover:text-text-primary">Compact</button>
            </div>
            <div className="w-px h-4 bg-border-subtle mx-0.5"></div>
            <button className="w-[32px] h-[32px] flex items-center justify-center text-text-secondary hover:text-text-primary rounded-md border border-border-subtle hover:bg-bg-elevated transition-colors" title="Export CSV">
              <Download className="w-3.5 h-3.5" />
            </button>
            <button className="w-[32px] h-[32px] flex items-center justify-center text-text-secondary hover:text-text-primary rounded-md border border-border-subtle hover:bg-bg-elevated transition-colors" title="Print List">
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 p-5 flex flex-col overflow-hidden space-y-4 min-w-0">
          
          {/* Controls Bar: Search & Status Filter Tags */}
          <div className="bg-bg-surface border border-border-subtle rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-sm">
            <div className="relative w-[260px] max-w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by WO#, part, desc, tech..." 
                className="w-full h-[34px] bg-bg-elevated border border-border-default rounded-md pl-9 pr-3 font-sans text-[12px] text-text-primary focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            {/* Status Filter Tags (slightly rounded, not pills) */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Pending', 'In Progress', 'Blocked', 'Complete'].map((st) => {
                const active = statusFilter === st;
                return (
                  <button 
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`h-[28px] px-3 rounded-md font-sans text-[12px] font-medium transition-colors ${
                      active 
                        ? 'bg-secondary text-white shadow-sm' 
                        : 'bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-bg-base'
                    }`}
                  >
                    {st === 'All' ? 'All Status' : st}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table Container with Horizontal Scroll so nothing is cut off */}
          <div className="flex-1 border border-border-default rounded-xl overflow-hidden bg-bg-surface flex flex-col shadow-sm min-w-0">
            <div className="overflow-x-auto overflow-y-auto flex-1 w-full">
              <table className="min-w-[950px] w-full text-left border-collapse">
                <thead className="bg-bg-elevated border-b border-border-default sticky top-0 z-10 select-none">
                  <tr>
                    <th className="w-[38px] px-3 py-3"><Checkbox checked={selectedIds.length === filteredOrders.length} onChange={() => {}} /></th>
                    <th className="w-[90px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">WO#</th>
                    <th className="w-[100px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Part Number</th>
                    <th className="w-[220px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Description</th>
                    <th className="w-[90px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Station</th>
                    <th className="w-[115px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Technician</th>
                    <th className="w-[95px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Priority</th>
                    <th className="w-[115px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Status</th>
                    <th className="w-[80px] px-3 py-3 font-sans font-semibold text-[11px] uppercase tracking-wider text-text-secondary">Due Time</th>
                    <th className="w-[38px] px-3 py-3 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle font-sans text-[13px] text-text-primary">
                  {filteredOrders.map((order) => {
                    const isSelected = selectedIds.includes(order.id);
                    const isBlocked = order.status === 'Blocked';

                    return (
                      <tr 
                        key={order.id} 
                        onClick={() => toggleSelect(order.id)}
                        className={`h-[48px] cursor-pointer transition-colors ${
                          isSelected 
                            ? 'bg-sky-100/15 border-l-2 border-l-secondary' 
                            : isBlocked 
                            ? 'bg-error/5 hover:bg-error/10' 
                            : 'hover:bg-bg-elevated'
                        }`}
                      >
                        <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                          <Checkbox checked={isSelected} onChange={() => toggleSelect(order.id)} />
                        </td>
                        <td className="px-3 py-2 font-mono font-bold text-[12px] text-text-primary whitespace-nowrap">
                          {order.id}
                        </td>
                        <td className="px-3 py-2 font-mono text-[12px] text-text-secondary whitespace-nowrap">
                          {order.part}
                        </td>
                        <td className="px-3 py-2 text-text-primary font-medium truncate max-w-[260px]" title={order.desc}>
                          {order.desc}
                        </td>
                        <td className="px-3 py-2 text-text-secondary whitespace-nowrap">
                          {order.station}
                        </td>
                        <td className="px-3 py-2 text-text-primary whitespace-nowrap truncate max-w-[130px]">
                          {order.tech}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <PriorityTag priority={order.priority} />
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <StatusTag status={order.status} />
                        </td>
                        <td className="px-3 py-2 font-mono text-[12px] text-text-secondary whitespace-nowrap">
                          {order.due}
                        </td>
                        <td className="px-3 py-2 text-right text-text-secondary hover:text-text-primary">
                          <MoreHorizontal className="w-4 h-4 ml-auto" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Action Bar */}
            {selectedIds.length > 0 && (
              <div className="h-[50px] bg-bg-elevated border-t border-border-default flex items-center justify-between px-5 shrink-0">
                <span className="font-sans text-[13px] text-text-primary font-semibold">
                  {selectedIds.length} item{selectedIds.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex items-center gap-2.5">
                  <button className="h-[32px] px-3 rounded-md bg-secondary text-white font-sans text-[12px] font-medium hover:bg-secondary-hover transition-colors">
                    Reassign Station
                  </button>
                  <button className="h-[32px] px-3 rounded-md border border-border-default text-text-primary font-sans text-[12px] font-medium hover:bg-bg-surface transition-colors">
                    Change Priority
                  </button>
                  <button className="h-[32px] px-3 rounded-md border border-border-default text-text-primary font-sans text-[12px] font-medium hover:bg-bg-surface transition-colors">
                    Export
                  </button>
                  <div className="w-px h-4 bg-border-subtle mx-1"></div>
                  <button 
                    onClick={() => setSelectedIds([])}
                    className="h-[32px] px-3 rounded-md text-text-secondary font-sans text-[12px] font-medium hover:text-text-primary transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Table Pagination Footer */}
          <div className="flex items-center justify-between shrink-0 pt-1 text-[12px] font-sans text-text-secondary">
            <span>Showing 1–{filteredOrders.length} of 68 work orders</span>
            <div className="flex items-center gap-1">
              <button className="h-[28px] px-2.5 rounded-md text-text-secondary hover:text-text-primary border border-border-subtle hover:bg-bg-elevated transition-colors">
                Previous
              </button>
              <button className="w-[28px] h-[28px] rounded-md bg-secondary text-white font-semibold flex items-center justify-center">
                1
              </button>
              <button className="w-[28px] h-[28px] rounded-md border border-border-subtle hover:bg-bg-elevated text-text-secondary flex items-center justify-center transition-colors">
                2
              </button>
              <button className="w-[28px] h-[28px] rounded-md border border-border-subtle hover:bg-bg-elevated text-text-secondary flex items-center justify-center transition-colors">
                3
              </button>
              <span className="w-[20px] text-center">...</span>
              <button className="w-[28px] h-[28px] rounded-md border border-border-subtle hover:bg-bg-elevated text-text-secondary flex items-center justify-center transition-colors">
                9
              </button>
              <button className="h-[28px] px-2.5 rounded-md text-text-secondary hover:text-text-primary border border-border-subtle hover:bg-bg-elevated transition-colors">
                Next
              </button>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
};

function PriorityTag({ priority }: { priority: string }) {
  const config: Record<string, { bg: string; text: string; border: string }> = {
    'Critical': { bg: 'bg-[#450A0A]', text: 'text-error', border: 'border-error/30' },
    'High': { bg: 'bg-[#451A03]', text: 'text-warning', border: 'border-warning/30' },
    'Normal': { bg: 'bg-bg-base', text: 'text-secondary', border: 'border-secondary/30' },
    'Low': { bg: 'bg-bg-base', text: 'text-text-secondary', border: 'border-border-default' }
  };
  const c = config[priority] || config['Normal'];
  return (
    <div className={`h-[22px] px-2 rounded-md border inline-flex items-center font-sans font-semibold text-[10px] uppercase tracking-wider ${c.bg} ${c.text} ${c.border}`}>
      {priority}
    </div>
  );
}

function StatusTag({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; dot: string; border: string }> = {
    'In Progress': { bg: 'bg-sky-100/20', text: 'text-sky-600', dot: 'bg-sky-500', border: 'border-sky-300/30' },
    'Pending': { bg: 'bg-bg-base', text: 'text-text-secondary', dot: 'bg-text-secondary', border: 'border-border-default' },
    'Complete': { bg: 'bg-[#14532D]/30', text: 'text-success', dot: 'bg-success', border: 'border-success/30' },
    'Blocked': { bg: 'bg-[#450A0A]/30', text: 'text-error', dot: 'bg-error', border: 'border-error/30' },
    'Req. Sign-off': { bg: 'bg-[#451A03]/30', text: 'text-warning', dot: 'bg-warning', border: 'border-warning/30' }
  };
  const c = config[status] || config['Pending'];
  return (
    <div className={`h-[22px] px-2 rounded-md border inline-flex items-center gap-1.5 font-sans font-semibold text-[10px] ${c.bg} ${c.text} ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`}></span>
      {status}
    </div>
  );
}

function Checkbox({ checked, onChange }: { checked?: boolean; onChange?: () => void }) {
  return (
    <div 
      onClick={onChange}
      className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${
        checked ? 'bg-secondary border-secondary' : 'border-border-default hover:border-border-strong bg-bg-surface'
      }`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
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
