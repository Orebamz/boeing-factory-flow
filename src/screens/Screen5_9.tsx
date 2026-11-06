import React from 'react';

export const Screen5_9 = () => {
  return (
    <div className="w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col shrink-0 p-16">
      
      {/* Header Section */}
      <div>
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.12em] mb-2 font-semibold">06 — USER PERSONAS</h2>
        <h1 className="font-sans font-bold text-[40px] text-text-primary mb-2">Designing for Two Distinct Roles</h1>
        <p className="font-sans text-[16px] text-text-secondary">Derived from 60+ contextual inquiries across Denver Plant 2 · August–October 2018</p>
        <div className="w-[80px] h-[2px] bg-secondary mt-4"></div>
      </div>

      {/* Persona Cards */}
      <div className="flex gap-8 mt-12 flex-1">
        
        {/* Persona 1 - The Field Technician */}
        <div className="flex-1 bg-bg-surface border border-border-subtle rounded-2xl p-8 flex flex-col">
          
          {/* Top Section */}
          <div className="border-b border-border-subtle pb-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-bg-elevated border-2 border-secondary flex items-center justify-center font-mono font-bold text-[20px] text-primary">
              JM
            </div>
            <h3 className="font-sans font-bold text-[22px] text-text-primary mt-3">Jamie M.</h3>
            <div className="mt-2 inline-flex min-h-[28px] h-auto py-1 px-3 bg-sky-100 rounded-full items-center font-mono text-[11px] text-primary">
              Assembly Technician
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Experience</div>
                <div className="font-sans text-[13px] text-text-primary">4 Years on Factory Floor</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Location</div>
                <div className="font-sans text-[13px] text-text-primary">Station 4B — Wing Assembly</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Shift</div>
                <div className="font-sans text-[13px] text-text-primary">Morning · 06:00–14:00</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Device</div>
                <div className="font-sans text-[13px] text-text-primary">Mobile + Occasional Tablet</div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div>
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-3">Goals</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Complete assigned tasks accurately and on time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Avoid quality issues that slow the production line</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Spend less time on paperwork, more time on actual work</span>
              </li>
            </ul>
          </div>

          {/* Pain Points Section */}
          <div className="mt-5">
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-3">Pain Points</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Constant data re-entry for information the system should already know</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Errors only discovered after submitting a full form — too late to fix easily</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Touch targets too small to use reliably wearing safety gloves</span>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="mt-5 border-l-3 border-secondary pl-4 py-1">
            <p className="font-sans italic text-[15px] text-text-secondary">"I just need the system to get out of my way and let me do my job."</p>
          </div>

          {/* Tools Row */}
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Mobile Device</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Safety Gloves</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Barcode Scanner</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Paper Backup</span>
            </div>
          </div>

        </div>

        {/* Persona 2 - The Shift Supervisor */}
        <div className="flex-1 bg-bg-surface border border-border-subtle rounded-2xl p-8 flex flex-col">
          
          {/* Top Section */}
          <div className="border-b border-border-subtle pb-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-bg-elevated border-2 border-warning flex items-center justify-center font-mono font-bold text-[20px] text-warning">
              RC
            </div>
            <h3 className="font-sans font-bold text-[22px] text-text-primary mt-3">Robin C.</h3>
            <div className="mt-2 inline-flex min-h-[28px] h-auto py-1 px-3 bg-[#451A03] rounded-full items-center font-mono text-[11px] text-warning">
              QA Shift Supervisor
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Experience</div>
                <div className="font-sans text-[13px] text-text-primary">11 Years in Manufacturing QA</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Location</div>
                <div className="font-sans text-[13px] text-text-primary">Floor-Wide · Denver Plant 2</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Shift</div>
                <div className="font-sans text-[13px] text-text-primary">Morning · 06:00–14:00</div>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase text-text-secondary">Device</div>
                <div className="font-sans text-[13px] text-text-primary">Desktop Primary + Floor Tablet</div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div>
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-3">Goals</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Keep the shift on schedule and hit daily targets</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Catch quality issues before they escalate to production stops</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Have real-time visibility into every technician and station</span>
              </li>
            </ul>
          </div>

          {/* Pain Points Section */}
          <div className="mt-5">
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-3">Pain Points</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">No live view of what each technician is actually doing at any given moment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Blocked tasks and escalations discovered too late — after the line has already slowed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0"></div>
                <span className="font-sans text-[14px] text-text-primary">Manual escalation process is slow and relies on technicians remembering to flag issues</span>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="mt-5 border-l-3 border-warning pl-4 py-1">
            <p className="font-sans italic text-[15px] text-text-secondary">"By the time I find out there's a problem, it's already a bigger problem."</p>
          </div>

          {/* Tools Row */}
          <div className="mt-auto pt-4 border-t border-border-subtle">
            <h4 className="font-sans text-[11px] uppercase text-text-secondary tracking-wider mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Desktop Dashboard</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Floor Tablet</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Radio Communication</span>
              <span className="inline-flex h-[26px] px-2.5 bg-bg-elevated border border-border-subtle rounded-full items-center font-sans text-[12px] text-text-secondary">Paper Sign-off Sheets</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Insight Strip */}
      <div className="w-full border-t border-border-subtle pt-8 mt-12 grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-sans font-semibold text-[16px] text-text-primary mb-2">Why Two Personas Mattered</h3>
          <p className="font-sans text-[14px] text-text-secondary leading-relaxed">
            Previous system used a single interface for both roles. Technicians were overwhelmed by supervisor-level data. Supervisors couldn't find operational controls buried in technician task views. Separating these mental models was the foundation of the information architecture redesign.
          </p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[16px] text-text-primary mb-2">Design Implications</h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
              <span className="font-sans text-[14px] text-text-secondary">Role-based dashboard views — technician vs supervisor</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
              <span className="font-sans text-[14px] text-text-secondary">Technician UI: task-focused, minimal cognitive load</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
              <span className="font-sans text-[14px] text-text-secondary">Supervisor UI: data-dense, exception-driven</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
              <span className="font-sans text-[14px] text-text-secondary">Shared components, different information hierarchy</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};
