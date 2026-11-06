import React from 'react';
import { Clock, AlertCircle, MapPin, ArrowUpDown, ChevronDown } from 'lucide-react';

export const ExtendedComponentsSection = () => {
  return (
    <section id="extended-components" className="space-y-16 pt-8">
      <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
        <h2 className="type-heading-md">06 Extended Components</h2>
        <span className="type-label-xs text-text-secondary">Complex Patterns</span>
      </div>

      {/* TASK CARDS */}
      <div id="task-cards" className="space-y-8">
        <div className="space-y-2">
          <h3 className="type-heading-sm text-primary">Task Cards</h3>
          <p className="type-body-sm text-text-secondary">
            Min-height: 80px. Background: bg-surface (#12151A). Border: 1px solid border-subtle (#2A3040), radius-lg (10px). Left border: 4px solid [status color]. Padding: 16px.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpecBox title="Critical Priority (border-l-error — #EF4444)">
            <div className="w-full min-h-[80px] bg-bg-surface border border-border-subtle rounded-[10px] border-l-[4px] border-l-error p-[16px] relative group hover:bg-bg-elevated hover:shadow-[-2px_0_8px_rgba(239,68,68,0.4)] transition-all duration-150 cursor-pointer">
              <div className="flex justify-between items-start mb-[6px]">
                <span className="font-mono text-[12px] text-text-secondary">TSK-294</span>
                <div className="h-[24px] px-[8px] rounded-full bg-bg-overlay text-text-secondary font-sans font-medium text-[12px] flex items-center">
                  Pending
                </div>
              </div>
              <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-[6px]">Hydraulic Pressure Check</h4>
              <div className="flex items-center gap-[8px] text-text-secondary">
                <div className="flex items-center gap-[4px]">
                  <MapPin className="h-[14px] w-[14px]" />
                  <span className="font-sans text-[14px]">Station 4B</span>
                </div>
                <div className="flex items-center gap-[4px]">
                  <Clock className="h-[14px] w-[14px]" />
                  <span className="font-sans text-[14px]">14:30</span>
                </div>
              </div>
              
              {/* Annotations */}
              <div className="absolute -left-[20px] top-[16px] bottom-[16px] border-l border-error flex items-center -translate-x-full pr-1">
                <span className="text-[10px] text-error font-mono">P: 16px</span>
              </div>
            </div>
          </SpecBox>

          <SpecBox title="High Priority (border-l-warning — #F59E0B)">
            <div className="w-full min-h-[80px] bg-bg-surface border border-border-subtle rounded-[10px] border-l-[4px] border-l-warning p-[16px] hover:bg-bg-elevated hover:shadow-[-2px_0_8px_rgba(245,158,11,0.4)] transition-all duration-150 cursor-pointer">
              <div className="flex justify-between items-start mb-[6px]">
                <span className="font-mono text-[12px] text-text-secondary">TSK-295</span>
                <div className="h-[24px] px-[8px] rounded-full bg-sky-100 text-sky-600 font-sans font-medium text-[12px] flex items-center">
                  In Progress
                </div>
              </div>
              <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-[6px]">Component Assembly</h4>
              <div className="flex items-center gap-[8px] text-text-secondary">
                <div className="flex items-center gap-[4px]">
                  <MapPin className="h-[14px] w-[14px]" />
                  <span className="font-sans text-[14px]">Station 7A</span>
                </div>
                <div className="flex items-center gap-[4px]">
                  <Clock className="h-[14px] w-[14px]" />
                  <span className="font-sans text-[14px]">15:00</span>
                </div>
              </div>
            </div>
          </SpecBox>
        </div>
      </div>

      {/* DATA TABLES */}
      <div id="data-tables" className="space-y-8 pt-8 border-t border-border-subtle">
        <div className="space-y-2">
          <h3 className="type-heading-sm text-primary">Data Tables</h3>
          <p className="type-body-sm text-text-secondary">
            Header: bg-elevated (#1C2028), 12px uppercase. Cell height: 52px (Comfortable). Padding: 0 16px. Zebra striping: odd bg-surface, even bg-base.
          </p>
        </div>

        <div className="w-full border border-border-default rounded-lg overflow-hidden bg-bg-surface">
          <table className="w-full text-left border-collapse">
            <thead className="bg-bg-elevated border-b border-border-default">
              <tr>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-primary border-b border-border-default">
                  <div className="flex items-center gap-1 cursor-pointer">
                    WO# <ArrowUpDown className="h-[14px] w-[14px] text-primary" />
                  </div>
                </th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Part ID</th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Description</th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Station</th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Assignee</th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Status</th>
                <th className="px-[16px] h-[40px] font-sans font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary border-b border-border-default">Due</th>
              </tr>
            </thead>
            <tbody className="font-sans text-[14px] text-text-primary">
              <tr className="h-[52px] bg-bg-surface border-b border-border-subtle hover:bg-bg-elevated transition-colors">
                <td className="px-[16px] font-mono text-[13px]">WO-28471</td>
                <td className="px-[16px]">P-737-4422</td>
                <td className="px-[16px]">Fuselage Skin Panel</td>
                <td className="px-[16px]">Station 4B</td>
                <td className="px-[16px]">J. Martinez</td>
                <td className="px-[16px]"><Badge status="In Progress" bg="var(--sky-100)" text="var(--sky-600)" /></td>
                <td className="px-[16px]">14:30</td>
              </tr>
              <tr className="h-[52px] bg-bg-base border-b border-border-subtle hover:bg-bg-elevated transition-colors">
                <td className="px-[16px] font-mono text-[13px]">WO-28392</td>
                <td className="px-[16px]">P-737-3891</td>
                <td className="px-[16px]">Wing Rib Assembly</td>
                <td className="px-[16px]">Station 7A</td>
                <td className="px-[16px]">K. Thompson</td>
                <td className="px-[16px]"><Badge status="Pending" bg="var(--color-bg-overlay)" text="var(--color-text-secondary)" /></td>
                <td className="px-[16px]">15:00</td>
              </tr>
              <tr className="h-[52px] bg-sky-100/20 border-b border-border-subtle border-l-[2px] border-l-primary relative">
                <td className="px-[16px] font-mono text-[13px]">WO-28156</td>
                <td className="px-[16px]">P-777-2201</td>
                <td className="px-[16px]">Engine Pylon Mount</td>
                <td className="px-[16px]">Station 2C</td>
                <td className="px-[16px]">R. Okafor</td>
                <td className="px-[16px]"><Badge status="Complete" bg="var(--color-success-dim)" text="var(--color-success)" /></td>
                <td className="px-[16px]">13:00</td>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-primary font-mono bg-bg-base px-1 rounded">Selected State</div>
              </tr>
              <tr className="h-[52px] bg-bg-base border-b border-border-subtle hover:bg-bg-elevated transition-colors">
                <td className="px-[16px] font-mono text-[13px]">WO-27891</td>
                <td className="px-[16px]">P-737-5512</td>
                <td className="px-[16px]">Hydraulic Line Routing</td>
                <td className="px-[16px]">Station 1A</td>
                <td className="px-[16px]">S. Chen</td>
                <td className="px-[16px]"><Badge status="Blocked" bg="var(--color-error-dim)" text="var(--color-error)" /></td>
                <td className="px-[16px]">12:00</td>
              </tr>
              <tr className="h-[52px] bg-bg-surface border-b border-border-subtle hover:bg-bg-elevated transition-colors">
                <td className="px-[16px] font-mono text-[13px]">WO-27654</td>
                <td className="px-[16px]">P-787-0934</td>
                <td className="px-[16px]">Composite Panel Bond</td>
                <td className="px-[16px]">Station 9B</td>
                <td className="px-[16px]">M. Torres</td>
                <td className="px-[16px]"><Badge status="In Progress" bg="var(--sky-100)" text="var(--sky-600)" /></td>
                <td className="px-[16px]">16:30</td>
              </tr>
              <tr className="h-[52px] bg-bg-base hover:bg-bg-elevated transition-colors">
                <td className="px-[16px] font-mono text-[13px]">WO-27341</td>
                <td className="px-[16px]">P-737-4891</td>
                <td className="px-[16px]">Landing Gear Bay Cover</td>
                <td className="px-[16px]">Station 3D</td>
                <td className="px-[16px]">A. Patel</td>
                <td className="px-[16px]"><Badge status="Req. Sign-off" bg="var(--color-warning-dim)" text="var(--color-warning)" /></td>
                <td className="px-[16px]">11:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

function SpecBox({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden">
      <div className="bg-bg-elevated px-4 py-2 border-b border-border-subtle">
        <span className="type-label-xs text-text-secondary">{title}</span>
      </div>
      <div className="p-8 bg-bg-base relative">
        {children}
      </div>
    </div>
  );
}

function Badge({ status, bg, text }: { status: string, bg: string, text: string }) {
  return (
    <div 
      className="h-[24px] px-[8px] rounded-full inline-flex items-center font-sans font-medium text-[12px] whitespace-nowrap"
      style={{ backgroundColor: bg, color: text }}
    >
      {status}
    </div>
  );
}
