import React from 'react';

export const Screen4_6 = () => {
  return (
    <div className="w-full max-w-[1280px] h-fit min-h-[850px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col p-6 md:p-10 lg:p-12">
      
      {/* Frame Header */}
      <div className="mb-8">
        <h1 className="font-sans font-semibold text-[24px] text-text-primary mb-2">Competitive Analysis & Design Audit</h1>
        <p className="font-sans text-[14px] text-text-secondary mb-1">12 Manufacturing Execution System Platforms Evaluated</p>
        <p className="font-mono text-[12px] text-text-secondary">Conducted: 2018–2019 · Senior UX Designer — Boeing MES Project</p>
      </div>

      {/* Evaluation Criteria Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        <LegendPill label="Navigation Complexity" color="bg-sky-100 text-info" />
        <LegendPill label="Form Design" color="bg-[#451A03] text-warning" />
        <LegendPill label="Error Handling" color="bg-[#450A0A] text-error" />
        <LegendPill label="Mobile Optimization" color="bg-[#14532D] text-success" />
        <LegendPill label="Data Density" color="bg-bg-elevated text-text-primary" />
        <LegendPill label="Offline Capability" color="bg-bg-overlay text-text-secondary" />
      </div>

      {/* Platform Audit Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 flex-1">
        <PlatformCard name="Platform A" category="Legacy MES" score={3.2} finding="No mobile support. Forms require sequential page reloads." />
        <PlatformCard name="Platform B" category="Legacy MES" score={2.8} finding="Error messages shown only in page header, not inline." />
        <PlatformCard name="Platform C" category="ERP-integrated" score={4.1} finding="Complex navigation requiring 7+ taps to reach task forms." />
        <PlatformCard name="Platform D" category="Modern MES" score={5.4} finding="Responsive but touch targets too small for factory use." />
        
        <PlatformCard name="Platform E" category="Mobile-first" score={6.2} finding="Good mobile UX but no offline capability." />
        <PlatformCard name="Platform F" category="Legacy MES" score={2.1} finding="No form validation. High transcription error rate." />
        <PlatformCard name="Platform G" category="ERP-integrated" score={4.8} finding="Data tables non-sortable. Limited filtering options." />
        <PlatformCard name="Platform H" category="Modern MES" score={5.9} finding="Good data visualization but poor form completion rates." />
        
        <PlatformCard name="Platform I" category="Mobile-first" score={6.7} finding="Best-in-class mobile but limited desktop data views." />
        <PlatformCard name="Platform J" category="Legacy MES" score={3.5} finding="No progressive disclosure. All form fields shown at once." />
        <PlatformCard name="Platform K" category="ERP-integrated" score={4.3} finding="Smart defaults present but inconsistent implementation." />
        <PlatformCard name="Platform L" category="Modern MES" score={7.1} finding="Closest competitor — used as benchmark for form patterns." />
      </div>

      {/* Findings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border-subtle">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">Common Failures Found</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-error font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">9 of 12 platforms show errors only on submit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-error font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">11 of 12 have no offline capability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-error font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">8 of 12 fail mobile touch target requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-error font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">10 of 12 show no smart defaults or auto-population</span>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">Best Practices Identified</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-success font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Progressive disclosure (Platform L)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Scan-first data entry (Platform I)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Inline validation (Platforms I, L)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold mt-0.5">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Role-based dashboard views (Platform H)</span>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">FactoryFlow Improvements</h3>
          <div className="bg-sky-100/20 border border-secondary rounded-lg p-6">
            <p className="font-sans text-[14px] text-text-primary leading-relaxed">
              Applied 8 best practices identified across 12 platforms.<br/>
              Result: Form completion 67% → 91%.<br/>
              Error rate reduced by 43% in production.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

function LegendPill({ label, color }: { label: string, color: string }) {
  return (
    <div className={`h-[28px] px-3 rounded-md font-sans font-medium text-[12px] flex items-center ${color}`}>
      {label}
    </div>
  );
}

function PlatformCard({ name, category, score, finding }: { name: string, category: string, score: number, finding: string }) {
  // Calculate color based on score (red to green)
  const hue = ((score - 1) / 9) * 120; // 0 is red, 120 is green
  const scoreColor = `hsl(${hue}, 70%, 50%)`;

  return (
    <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 flex flex-col min-h-[160px]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-sans font-semibold text-[16px] text-text-primary">{name}</h3>
        <div className="h-[20px] px-2 rounded-md bg-bg-elevated border border-border-default text-text-secondary font-sans font-medium text-[10px] flex items-center">
          {category}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="font-sans text-[12px] text-text-secondary">UX Score</span>
          <span className="font-mono text-[14px] font-bold" style={{ color: scoreColor }}>{score.toFixed(1)}</span>
        </div>
        <div className="w-full h-[6px] bg-bg-elevated rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${(score / 10) * 100}%`, backgroundColor: scoreColor }}></div>
        </div>
      </div>

      <p className="font-sans text-[12px] text-text-secondary mt-auto leading-tight">{finding}</p>
    </div>
  );
}
