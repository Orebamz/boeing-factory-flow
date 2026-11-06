import React from 'react';
import { KeyRound, LayoutGrid, ListChecks, Wrench, Edit3, CheckCircle2, ArrowRight } from 'lucide-react';

export const Screen5_10 = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col">
      
      {/* Header Section */}
      <div className="p-6 md:p-10 lg:p-16 pb-6 md:pb-8">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">05 — WORKFLOW DIAGRAM</h2>
        <h1 className="font-sans font-bold text-[28px] sm:text-[34px] md:text-[40px] text-text-primary mb-2">End-to-End Task Journey</h1>
        <p className="font-sans text-[15px] md:text-[16px] text-text-secondary">Primary technician workflow — Login to Task Completion · Morning Shift</p>
        <div className="w-[80px] h-[2px] bg-secondary mt-4"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 md:p-10 lg:px-16 relative flex flex-col justify-center">
        
        {/* Main Workflow Grid - 3 cards on one line each */}
        <div className="w-full pb-6 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
            <PhaseCard 
              num="01" 
              title="Authentication" 
              icon={<KeyRound className="w-5 h-5 text-primary" />}
              steps={['Badge scan or PIN entry', 'Plant + shift selection', 'Offline mode detection']}
            />
            
            <PhaseCard 
              num="02" 
              title="Shift Overview" 
              icon={<LayoutGrid className="w-5 h-5 text-primary" />}
              steps={['View shift progress', 'Review action required alerts', 'See priority task queue', 'Check sync status']}
            />
            
            <PhaseCard 
              num="03" 
              title="Task Selection" 
              icon={<ListChecks className="w-5 h-5 text-primary" />}
              steps={['Filter and sort task list', 'Review task priority', 'Scan work order barcode', 'Open task detail']}
            />
            
            <PhaseCard 
              num="04" 
              title="Task Execution" 
              icon={<Wrench className="w-5 h-5 text-primary" />}
              steps={['Review required materials', 'Complete sequential steps', 'Capture photos per step', 'Enter measurements']}
              highlight={true}
            />
            
            <PhaseCard 
              num="05" 
              title="Data Entry" 
              icon={<Edit3 className="w-5 h-5 text-primary" />}
              steps={['Smart defaults auto-populate', 'Progressive disclosure active', 'Inline validation on blur', 'Spec reference visible']}
              callout="↑ 67% → 91% completion"
            />
            
            <PhaseCard 
              num="06" 
              title="Sign-off & Sync" 
              icon={<CheckCircle2 className="w-5 h-5 text-success" />}
              steps={['Review submission summary', 'Technician sign-off', 'Auto-sync to server', 'Next task assignment']}
            />

          </div>
        </div>

        {/* Parallel Flows */}
        <div className="mt-8 md:mt-12 mb-8 relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
            
            {/* Exception Path */}
            <div className="flex flex-col">
              <h4 className="font-sans text-[12px] font-semibold text-error mb-3">Exception Path — Quality Defect</h4>
              <div className="flex flex-wrap items-center gap-2">
                <MiniCard text="Defect Found" type="error" />
                <ArrowRight className="w-4 h-4 text-error shrink-0" />
                <MiniCard text="Defect Logged + Photo" type="error" />
                <ArrowRight className="w-4 h-4 text-error shrink-0" />
                <MiniCard text="Auto-Escalation to QA Lead" type="error" />
                <ArrowRight className="w-4 h-4 text-error shrink-0" />
                <MiniCard text="Await Resolution" type="error" />
              </div>
            </div>

            {/* Offline Path */}
            <div className="flex flex-col">
              <h4 className="font-sans text-[12px] font-semibold text-warning mb-3">Offline Path — No Network</h4>
              <div className="flex flex-wrap items-center gap-2">
                <MiniCard text="Network Lost" type="warning" />
                <ArrowRight className="w-4 h-4 text-warning shrink-0" />
                <MiniCard text="Work Queued Locally" type="warning" />
                <ArrowRight className="w-4 h-4 text-warning shrink-0" />
                <MiniCard text="Auto-Sync on Reconnect" type="warning" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Redesign Impact Strip */}
      <div className="w-full bg-bg-elevated border-t border-border-subtle p-6 px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between rounded-b-xl gap-4 sm:gap-0">
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">43% fewer errors</p>
          <p className="font-sans text-[13px] text-text-secondary">Inline validation + smart defaults in Phase 05</p>
        </div>
        <div className="hidden sm:block w-px h-10 bg-border-subtle"></div>
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">62% faster completion</p>
          <p className="font-sans text-[13px] text-text-secondary">Sequential steps + auto-population in Phase 04–05</p>
        </div>
        <div className="hidden sm:block w-px h-10 bg-border-subtle"></div>
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">Zero data loss</p>
          <p className="font-sans text-[13px] text-text-secondary">Offline-first architecture in all phases</p>
        </div>
      </div>

    </div>
  );
};

function PhaseCard({ num, title, icon, steps, highlight = false, callout }: { num: string, title: string, icon: React.ReactNode, steps: string[], highlight?: boolean, callout?: string }) {
  return (
    <div className={`bg-bg-surface border ${highlight ? 'border-secondary shadow-lg shadow-secondary/10 ring-1 ring-secondary/30' : 'border-border-subtle'} rounded-xl p-4 sm:p-5 w-full flex flex-col justify-between transition-all`}>
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-bold text-[12px] text-primary">{num}</span>
            <span className="text-secondary/50 text-[11px]">→</span>
          </div>
          {icon}
        </div>
        <h3 className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#f0f4f8] mb-3">{title}</h3>
        <ul className="space-y-1.5 mb-2">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-secondary text-[11px] leading-tight mt-0.5">•</span>
              <span className="font-sans text-[11px] text-text-secondary leading-tight">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {callout && (
        <div className="mt-3 pt-2.5 border-t border-border-subtle">
          <div className="inline-flex w-full justify-center min-h-[22px] py-0.5 px-2 bg-success-dim/20 rounded-full items-center font-sans text-[11px] font-medium text-success border border-success/30">
            {callout}
          </div>
        </div>
      )}
    </div>
  );
}

function MiniCard({ text, type }: { text: string, type: 'error' | 'warning' }) {
  const colors = {
    error: 'bg-error-dim/20 border-error/50 text-text-primary',
    warning: 'bg-warning-dim/20 border-warning/50 text-text-primary'
  };
  return (
    <div className={`px-3 py-1.5 rounded-md border ${colors[type]} font-sans text-[12px] whitespace-nowrap`}>
      {text}
    </div>
  );
}
