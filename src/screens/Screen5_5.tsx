import React from 'react';

export const Screen5_5 = () => {
  return (
    <div className="w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col shrink-0 p-16">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">02 — Before & After</h2>
        <h1 className="font-sans font-bold text-[40px] text-text-primary mb-2">From 200+ Usability Issues to Measurable Improvement</h1>
        <p className="font-sans text-[16px] text-text-secondary mb-6">Heuristic Evaluation Findings → Design Solutions</p>
        <div className="w-[80px] h-[2px] bg-secondary"></div>
      </div>

      {/* Top 10 Findings Table */}
      <div className="mb-12">
        <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">Top 10 Severity-Rated Usability Issues</h3>
        <div className="bg-bg-surface border border-border-subtle rounded-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-[80px_200px_1fr_120px_1fr] gap-4 p-4 bg-bg-elevated border-b border-border-subtle font-sans text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
            <div>Issue #</div>
            <div>Heuristic Violated</div>
            <div>Finding</div>
            <div>Severity</div>
            <div>Solution Applied</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border-subtle">
            
            <TableRow 
              id="#001" 
              heuristic="Error Prevention" 
              finding="No inline validation — errors shown only on submit" 
              severity="Critical" 
              solution="Field-level validation firing onBlur" 
            />
            <TableRow 
              id="#002" 
              heuristic="Recognition not Recall" 
              finding="No smart defaults — all fields manual entry" 
              severity="Critical" 
              solution="Auto-populate from work order context" 
            />
            <TableRow 
              id="#003" 
              heuristic="Flexibility & Efficiency" 
              finding="No recent values surfaced in dropdowns" 
              severity="Major" 
              solution="Recently used section in all dropdowns" 
            />
            <TableRow 
              id="#004" 
              heuristic="Match Real World" 
              finding="Form field labels use system codes not plain language" 
              severity="Major" 
              solution="Plain language labels with system code secondary" 
            />
            <TableRow 
              id="#005" 
              heuristic="User Control" 
              finding="No save draft — losing data if interrupted" 
              severity="Critical" 
              solution="Auto-save every 30 seconds + draft recovery" 
            />
            <TableRow 
              id="#006" 
              heuristic="Visibility of Status" 
              finding="No form completion progress indicator" 
              severity="Major" 
              solution="Progress bar showing % complete" 
            />
            <TableRow 
              id="#007" 
              heuristic="Aesthetic & Minimalist" 
              finding="All form fields shown regardless of relevance" 
              severity="Major" 
              solution="Progressive disclosure — show fields contextually" 
            />
            <TableRow 
              id="#008" 
              heuristic="Consistency" 
              finding="Error message styles inconsistent across forms" 
              severity="Minor" 
              solution="Unified inline validation component" 
            />
            <TableRow 
              id="#009" 
              heuristic="Help & Documentation" 
              finding="No contextual help or spec reference during entry" 
              severity="Major" 
              solution="Inline spec reference pills (e.g. torque ranges)" 
            />
            <TableRow 
              id="#010" 
              heuristic="Accessibility" 
              finding="Touch targets 28–32px — below minimum" 
              severity="Critical" 
              solution="Minimum 56px all interactive elements" 
            />

          </div>
        </div>
      </div>

      {/* Side by Side Comparison */}
      <div className="grid grid-cols-2 gap-12 flex-1">
        
        {/* Before */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-sans font-bold text-[24px] text-error">Before</h3>
            <div className="min-h-[28px] h-auto py-1 px-3 bg-error/10 border border-error/20 rounded-full flex items-center text-error font-sans font-semibold text-[13px]">
              67% form completion rate
            </div>
          </div>
          
          <div className="flex-1 bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Wireframe Sketch - Before */}
            <div className="w-[300px] bg-bg-base border border-border-default rounded-md p-4 space-y-4 opacity-50">
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-8 bg-border-subtle rounded"></div>
              <div className="w-full h-10 bg-border-default rounded mt-8"></div>
              <div className="w-full h-16 bg-error/20 border border-error/30 rounded mt-2"></div>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-sans font-bold text-[24px] text-success">After</h3>
            <div className="min-h-[28px] h-auto py-1 px-3 bg-success/10 border border-success/20 rounded-full flex items-center text-success font-sans font-semibold text-[13px]">
              91% form completion rate
            </div>
            <span className="font-sans text-[14px] text-success font-medium ml-2">↑ 24 percentage point improvement</span>
          </div>
          
          <div className="flex-1 bg-bg-surface border border-border-subtle rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Wireframe Sketch - After */}
            <div className="w-[300px] bg-bg-elevated border border-border-default rounded-xl p-4 shadow-2xl">
              
              <div className="w-full h-2 bg-border-subtle rounded-full mb-6 overflow-hidden">
                <div className="w-[60%] h-full bg-success"></div>
              </div>

              <div className="space-y-6">
                
                {/* Group 1 */}
                <div className="space-y-3">
                  <div className="w-1/2 h-4 bg-border-subtle rounded"></div>
                  <div className="w-full h-12 bg-bg-surface border border-success/50 rounded-lg flex items-center px-3 justify-between">
                    <div className="w-1/3 h-4 bg-text-primary/20 rounded"></div>
                    <div className="w-4 h-4 rounded-full bg-success"></div>
                  </div>
                </div>

                {/* Group 2 */}
                <div className="space-y-3">
                  <div className="w-1/2 h-4 bg-border-subtle rounded"></div>
                  <div className="w-full h-12 bg-bg-surface border border-border-default rounded-lg flex items-center px-3">
                    <div className="w-1/3 h-4 bg-text-primary/20 rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-secondary/20 rounded-full"></div>
                    <div className="h-6 w-16 bg-secondary/20 rounded-full"></div>
                  </div>
                </div>

                <div className="w-full h-12 bg-secondary rounded-lg mt-8"></div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

function TableRow({ id, heuristic, finding, severity, solution }: { id: string, heuristic: string, finding: string, severity: 'Critical' | 'Major' | 'Minor', solution: string }) {
  
  const severityColors = {
    'Critical': 'bg-error/10 text-error border-error/20',
    'Major': 'bg-warning/10 text-warning border-warning/20',
    'Minor': 'bg-info/10 text-info border-info/20'
  };

  return (
    <div className="grid grid-cols-[80px_200px_1fr_120px_1fr] gap-4 p-4 items-center hover:bg-bg-elevated/50 transition-colors">
      <div className="font-mono text-[13px] text-text-secondary">{id}</div>
      <div className="font-sans text-[13px] text-text-primary font-medium">{heuristic}</div>
      <div className="font-sans text-[13px] text-text-secondary leading-snug">{finding}</div>
      <div>
        <span className={`inline-flex h-[24px] px-2.5 rounded-full font-sans text-[11px] font-bold items-center border ${severityColors[severity]}`}>
          {severity}
        </span>
      </div>
      <div className="font-sans text-[13px] text-text-primary leading-snug">{solution}</div>
    </div>
  );
}
