import React from 'react';

export const Screen5_6 = () => {
  return (
    <div className="w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col shrink-0 p-16">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">03 — Outcomes & Impact</h2>
        <h1 className="font-sans font-bold text-[40px] text-text-primary mb-2">Measurable Results in Production</h1>
        <p className="font-sans text-[16px] text-text-secondary mb-6">Metrics measured post-launch across Denver Plant 2 · 2020</p>
        <div className="w-[80px] h-[2px] bg-secondary"></div>
      </div>

      {/* Hero Metrics (4 Cards) */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        
        <div className="bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col">
          <div className="font-mono font-bold text-[72px] text-[#f0f4f8] leading-none mb-4">43%</div>
          <h3 className="font-sans text-[16px] font-semibold text-text-primary mb-2">Reduction in data entry errors</h3>
          <p className="font-sans text-[13px] text-text-secondary mb-6 leading-relaxed">
            Measured across 5,000+ form submissions post-launch
          </p>
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <p className="font-mono text-[12px] text-text-secondary">Before: 18.3 errors per 100 submissions → After: 10.4 errors per 100</p>
          </div>
        </div>

        <div className="bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col">
          <div className="font-mono font-bold text-[72px] text-[#f0f4f8] leading-none mb-4">62%</div>
          <h3 className="font-sans text-[16px] font-semibold text-text-primary mb-2">Faster task completion</h3>
          <p className="font-sans text-[13px] text-text-secondary mb-6 leading-relaxed">
            Average time-on-task reduced from 67 min to 26 min
          </p>
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <p className="font-mono text-[12px] text-text-secondary">Measured via time-stamped task logs</p>
          </div>
        </div>

        <div className="bg-bg-surface border border-success/30 rounded-xl p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-success"></div>
          <div className="font-mono font-bold text-[72px] text-[#f0f4f8] leading-none mb-4">91%</div>
          <h3 className="font-sans text-[16px] font-semibold text-text-primary mb-2">Form completion rate</h3>
          <p className="font-sans text-[13px] text-text-secondary mb-6 leading-relaxed">
            Up from 67% in legacy system — 24pp improvement
          </p>
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <p className="font-mono text-[12px] text-text-secondary">Attributed to smart defaults + inline validation</p>
          </div>
        </div>

        <div className="bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col">
          <div className="font-mono font-bold text-[72px] text-[#f0f4f8] leading-none mb-4">5,000+</div>
          <h3 className="font-sans text-[16px] font-semibold text-text-primary mb-2">Concurrent users supported</h3>
          <p className="font-sans text-[13px] text-text-secondary mb-6 leading-relaxed">
            Across desktop, tablet, and mobile devices
          </p>
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <p className="font-mono text-[12px] text-text-secondary">Zero performance degradation at peak load</p>
          </div>
        </div>

      </div>

      {/* Secondary Metrics Strip */}
      <div className="flex justify-between items-center bg-bg-elevated border border-border-subtle rounded-xl px-12 py-6 mb-12">
        <div className="flex flex-col items-center">
          <span className="font-mono font-bold text-[24px] text-text-primary mb-1">150+</span>
          <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider font-medium">Components in design system</span>
        </div>
        <div className="w-[1px] h-[40px] bg-border-subtle"></div>
        <div className="flex flex-col items-center">
          <span className="font-mono font-bold text-[24px] text-text-primary mb-1">12</span>
          <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider font-medium">Platforms analyzed</span>
        </div>
        <div className="w-[1px] h-[40px] bg-border-subtle"></div>
        <div className="flex flex-col items-center">
          <span className="font-mono font-bold text-[24px] text-text-primary mb-1">200+</span>
          <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider font-medium">Usability issues documented</span>
        </div>
        <div className="w-[1px] h-[40px] bg-border-subtle"></div>
        <div className="flex flex-col items-center">
          <span className="font-mono font-bold text-[24px] text-text-primary mb-1">60+</span>
          <span className="font-sans text-[13px] text-text-secondary uppercase tracking-wider font-medium">Workers interviewed</span>
        </div>
      </div>

      {/* Design System Impact */}
      <div className="grid grid-cols-2 gap-12 flex-1">
        
        {/* Left Column */}
        <div>
          <h3 className="font-sans text-[18px] font-semibold text-text-primary mb-4">Boeing Digital Design Language — Scale</h3>
          <p className="font-sans text-[14px] text-text-secondary leading-relaxed mb-8">
            150+ components built in Figma using Auto Layout, Component Properties, Variants, and Boolean operations. Scalable across multiple Boeing product lines.
          </p>
          
          <div className="space-y-4">
            <Bar label="Forms & Inputs" count={32} max={35} />
            <Bar label="Layout & Structure" count={33} max={35} />
            <Bar label="Data Display" count={28} max={35} />
            <Bar label="Feedback & Status" count={24} max={35} />
            <Bar label="Navigation" count={18} max={35} />
            <Bar label="Aviation-specific" count={15} max={35} />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-sans text-[18px] font-semibold text-text-primary mb-4">Technical Collaboration</h3>
          
          <ul className="space-y-6 mt-8">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15px] text-text-primary mb-1">CSS-in-JS specs provided to dev team</h4>
                <p className="font-sans text-[13px] text-text-secondary">Exact design tokens mapped to component props for seamless handoff.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15px] text-text-primary mb-1">Interactive states fully documented</h4>
                <p className="font-sans text-[13px] text-text-secondary">Hover, focus, error, loading, and disabled states defined for all 150+ components.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15px] text-text-primary mb-1">Figma Smart Animate + ProtoPie</h4>
                <p className="font-sans text-[13px] text-text-secondary">High-fidelity prototypes delivered to demonstrate complex flows and animation timing functions.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-success"></div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15px] text-text-primary mb-1">WCAG AA accessibility compliance verified</h4>
                <p className="font-sans text-[13px] text-text-secondary">Color contrast, focus order, and screen reader labels audited and approved.</p>
              </div>
            </li>
          </ul>

        </div>

      </div>

    </div>
  );
};

function Bar({ label, count, max }: { label: string, count: number, max: number }) {
  const percentage = (count / max) * 100;
  
  return (
    <div className="flex items-center gap-4">
      <div className="w-[140px] font-sans text-[13px] text-text-secondary">{label}</div>
      <div className="flex-1 h-[8px] bg-bg-elevated rounded-full overflow-hidden">
        <div className="h-full bg-secondary rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="w-[40px] text-right font-mono text-[13px] font-bold text-text-primary">{count}</div>
    </div>
  );
}
