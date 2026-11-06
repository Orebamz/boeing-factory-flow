import React from 'react';
import { ArrowUpDown, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge, BadgeStatus } from './Badge';

export const DataTable = () => {
  return (
    <div className="w-full border border-border-default rounded-lg overflow-hidden bg-bg-surface">
      {/* Toolbar */}
      <div className="p-4 border-b border-border-subtle flex justify-between items-center">
        <h3 className="type-heading-sm">Production Orders</h3>
        <div className="flex gap-2">
          {/* Density Toggle Mockup */}
          <div className="flex bg-bg-elevated rounded-md p-1 border border-border-subtle">
            <div className="w-8 h-8 flex items-center justify-center bg-bg-overlay rounded text-text-primary cursor-pointer">
              <div className="space-y-1">
                 <div className="w-4 h-0.5 bg-current"></div>
                 <div className="w-4 h-0.5 bg-current"></div>
                 <div className="w-4 h-0.5 bg-current"></div>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-text-secondary cursor-pointer hover:text-text-primary">
               <div className="space-y-1.5">
                 <div className="w-4 h-0.5 bg-current"></div>
                 <div className="w-4 h-0.5 bg-current"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-bg-elevated border-b border-border-default">
            <tr>
              <th className="px-4 py-3 font-medium text-text-secondary w-32">
                <div className="flex items-center gap-1 cursor-pointer hover:text-text-primary">
                  Order ID <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-4 py-3 font-medium text-text-secondary">Description</th>
              <th className="px-4 py-3 font-medium text-text-secondary w-32">Status</th>
              <th className="px-4 py-3 font-medium text-text-secondary w-32 text-right">Qty</th>
              <th className="px-4 py-3 font-medium text-text-secondary w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            <TableRow id="ORD-001" desc="Wing Assembly Bracket A" status="in-progress" qty="50" />
            <TableRow id="ORD-002" desc="Landing Gear Strut" status="pending" qty="12" />
            <TableRow id="ORD-003" desc="Hydraulic Pump Housing" status="blocked" qty="5" />
            <TableRow id="ORD-004" desc="Fuselage Panel L4" status="complete" qty="1" />
            <TableRow id="ORD-005" desc="Cockpit Instrument Panel" status="requires-sign-off" qty="1" />
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
        <span>Showing 1-5 of 24 items</span>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-bg-elevated rounded disabled:opacity-50" disabled><ChevronLeft className="h-4 w-4" /></button>
          <span className="text-text-primary">1</span>
          <button className="p-1 hover:bg-bg-elevated rounded">2</button>
          <button className="p-1 hover:bg-bg-elevated rounded">3</button>
          <span>...</span>
          <button className="p-1 hover:bg-bg-elevated rounded"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ id, desc, status, qty }: { id: string, desc: string, status: BadgeStatus, qty: string }) => (
  <tr className="hover:bg-bg-elevated transition-colors group">
    <td className="px-4 py-3 font-mono text-text-primary">{id}</td>
    <td className="px-4 py-3 text-text-primary">{desc}</td>
    <td className="px-4 py-3">
      <Badge status={status} />
    </td>
    <td className="px-4 py-3 text-text-primary text-right font-mono">{qty}</td>
    <td className="px-4 py-3 text-right">
      <button className="text-text-secondary hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal className="h-4 w-4" />
      </button>
    </td>
  </tr>
);
