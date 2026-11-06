import React from 'react';

export const Screen5_4 = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col p-6 md:p-10 lg:p-16">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">02 — Research & Discovery</h2>
        <h1 className="font-sans font-bold text-[32px] md:text-[40px] text-text-primary mb-2">Understanding the Factory Floor</h1>
        <p className="font-sans text-[15px] md:text-[16px] text-text-secondary mb-6">60+ Contextual Inquiries · 2 Personas · Empathy Mapping · Workflow Analysis</p>
        <div className="w-[80px] h-[2px] bg-secondary"></div>
      </div>

      {/* Research Methods (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col">
          <div className="font-mono font-bold text-[48px] text-[#f0f4f8] leading-none mb-2">60+</div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-1">Factory floor workers interviewed</h3>
          <p className="font-sans text-[12px] text-text-secondary mb-4">Denver Plant 2 · August–October 2018</p>
          <p className="font-sans text-[13px] text-text-secondary mt-auto leading-relaxed">
            Observed technicians in their natural work environment — on the factory floor, during active shifts, with real production pressure
          </p>
        </div>

        <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col">
          <div className="font-mono font-bold text-[48px] text-[#f0f4f8] leading-none mb-2">200+</div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-1">Usability issues documented</h3>
          <p className="font-sans text-[12px] text-text-secondary mb-4">Evaluated 12 existing MES screens</p>
          <p className="font-sans text-[13px] text-text-secondary mt-auto leading-relaxed">
            Severity-rated using Nielsen's heuristics, prioritized by frequency × impact score
          </p>
        </div>

        <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col">
          <div className="font-mono font-bold text-[48px] text-[#f0f4f8] leading-none mb-2">8</div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-1">Core workflows mapped</h3>
          <p className="font-sans text-[12px] text-text-secondary mb-4">End-to-end journey documentation</p>
          <p className="font-sans text-[13px] text-text-secondary mt-auto leading-relaxed">
            Task analysis, decision trees, and failure mode mapping across all technician roles
          </p>
        </div>

        <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 flex flex-col">
          <div className="font-mono font-bold text-[48px] text-[#f0f4f8] leading-none mb-2">12</div>
          <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-1">Platforms analyzed</h3>
          <p className="font-sans text-[12px] text-text-secondary mb-4">Industry benchmark analysis</p>
          <p className="font-sans text-[13px] text-text-secondary mt-auto leading-relaxed">
            Comparative UX audit across 12 MES platforms, scoring 6 criteria per platform
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        
        {/* Key Findings */}
        <div>
          <h3 className="font-sans text-[11px] uppercase text-text-secondary tracking-[0.05em] font-semibold mb-4">Key Research Findings</h3>
          <div className="space-y-4">
            
            <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-error rounded-r-lg p-4">
              <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-1">Form design was the #1 source of errors</h4>
              <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                Technicians reported spending 30% of task time on data re-entry due to unclear forms and late error feedback
              </p>
            </div>

            <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-warning rounded-r-lg p-4">
              <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-1">Touch targets were universally too small</h4>
              <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                Factory workers wearing gloves reported mis-taps on nearly every interactive element in existing systems
              </p>
            </div>

            <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-warning rounded-r-lg p-4">
              <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-1">Offline capability was non-negotiable</h4>
              <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                Network connectivity on the factory floor was intermittent. Technicians had developed workarounds using paper forms
              </p>
            </div>

            <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-info rounded-r-lg p-4">
              <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-1">Role-based views were missing</h4>
              <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                Technicians and supervisors used identical interfaces, creating information overload for both roles
              </p>
            </div>

          </div>
        </div>

        {/* Personas */}
        <div>
          <h3 className="font-sans text-[11px] uppercase text-text-secondary tracking-[0.05em] font-semibold mb-4">Personas</h3>
          <div className="flex flex-col sm:flex-row gap-4 h-full">
            
            {/* Persona 1 */}
            <div className="flex-1 bg-bg-surface border border-border-subtle rounded-xl p-5 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center font-sans font-semibold text-[16px] text-text-primary">
                  JM
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[16px] text-text-primary">Jamie M.</h4>
                  <p className="font-sans text-[12px] text-text-secondary">Assembly Technician</p>
                </div>
              </div>
              <div className="font-sans text-[12px] text-text-secondary mb-4 flex gap-4">
                <span>Exp: 4 years</span>
                <span>Loc: Station 4B</span>
              </div>
              
              <div className="mb-4">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Goals</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">Complete tasks accurately and quickly. Avoid QA issues that slow the line.</p>
              </div>
              
              <div className="mb-4">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Pain Points</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">Constant data re-entry. Can't see task context while filling forms. Errors found only after submission.</p>
              </div>

              <div className="mt-auto">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Tools</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">Mobile device, sometimes tablet, occasionally desktop at station</p>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="flex-1 bg-bg-surface border border-border-subtle rounded-xl p-5 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center font-sans font-semibold text-[16px] text-text-primary">
                  RC
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[16px] text-text-primary">Robin C.</h4>
                  <p className="font-sans text-[12px] text-text-secondary">QA Supervisor</p>
                </div>
              </div>
              <div className="font-sans text-[12px] text-text-secondary mb-4 flex gap-4">
                <span>Exp: 11 years</span>
                <span>Loc: Floor oversight</span>
              </div>
              
              <div className="mb-4">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Goals</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">Keep shift on schedule. Catch quality issues before they escalate. Support technician team.</p>
              </div>
              
              <div className="mb-4">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Pain Points</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">No real-time visibility into team progress. Blocked tasks discovered too late. Escalation process is manual and slow.</p>
              </div>

              <div className="mt-auto">
                <h5 className="font-sans text-[11px] uppercase text-text-secondary font-semibold mb-1">Tools</h5>
                <p className="font-sans text-[13px] text-text-primary leading-relaxed">Desktop primary, tablet on floor</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
