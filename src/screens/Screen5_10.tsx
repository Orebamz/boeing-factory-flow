import React from 'react';
import { KeyRound, LayoutGrid, ListChecks, Wrench, Edit3, CheckCircle2, ArrowRight } from 'lucide-react';

export const Screen5_10 = () => {
  return (
    <div className="w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col shrink-0">
      
      {/* Header Section */}
      <div className="p-16 pb-8">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">07 — WORKFLOW DIAGRAM</h2>
        <h1 className="font-sans font-bold text-[40px] text-text-primary mb-2">End-to-End Task Journey</h1>
        <p className="font-sans text-[16px] text-text-secondary">Primary technician workflow — Login to Task Completion · Morning Shift</p>
        <div className="w-[80px] h-[2px] bg-secondary mt-4"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-16 relative flex flex-col justify-center">
        
        {/* Main Workflow Row */}
        <div className="flex items-center justify-between relative z-10">
          
          <PhaseCard 
            num="01" 
            title="Authentication" 
            icon={<KeyRound className="w-6 h-6 text-primary" />}
            steps={['Badge scan or PIN entry', 'Plant + shift selection', 'Offline mode detection']}
          />
          <Arrow />
          
          <PhaseCard 
            num="02" 
            title="Shift Overview" 
            icon={<LayoutGrid className="w-6 h-6 text-primary" />}
            steps={['View shift progress', 'Review action required alerts', 'See priority task queue', 'Check sync status']}
          />
          <Arrow />
          
          <PhaseCard 
            num="03" 
            title="Task Selection" 
            icon={<ListChecks className="w-6 h-6 text-primary" />}
            steps={['Filter and sort task list', 'Review task priority', 'Scan work order barcode', 'Open task detail']}
          />
          <Arrow />
          
          <div className="relative">
            <PhaseCard 
              num="04" 
              title="Task Execution" 
              icon={<Wrench className="w-6 h-6 text-primary" />}
              steps={['Review required materials', 'Complete sequential steps', 'Capture photos per step', 'Enter measurements']}
              highlight={true}
            />
          </div>
          <Arrow />
          
          <div className="relative">
            <PhaseCard 
              num="05" 
              title="Data Entry" 
              icon={<Edit3 className="w-6 h-6 text-primary" />}
              steps={['Smart defaults auto-populate', 'Progressive disclosure active', 'Inline validation on blur', 'Spec reference visible']}
            />
            {/* Callout */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="inline-flex min-h-[24px] h-auto py-0.5 px-3 bg-success-dim/20 rounded-full items-center font-sans text-[12px] font-medium text-success border border-success/30">
                ↑ 67% → 91% completion rate
              </div>
            </div>
          </div>
          <Arrow />
          
          <PhaseCard 
            num="06" 
            title="Sign-off & Sync" 
            icon={<CheckCircle2 className="w-6 h-6 text-success" />}
            steps={['Review submission summary', 'Technician sign-off', 'Auto-sync to server', 'Next task assignment']}
          />

        </div>

        {/* Parallel Flows */}
        <div className="mt-20 relative">
          {/* Vertical connecting lines */}
          <div className="absolute left-[65%] top-[-40px] w-px h-[40px] border-l-2 border-dashed border-border-default"></div>
          <div className="absolute left-[82%] top-[-40px] w-px h-[40px] border-l-2 border-dashed border-border-default"></div>

          <div className="flex gap-12 justify-center">
            
            {/* Exception Path */}
            <div className="flex flex-col">
              <h4 className="font-sans text-[12px] font-semibold text-error mb-3">Exception Path — Quality Defect</h4>
              <div className="flex items-center gap-2">
                <MiniCard text="Defect Found" type="error" />
                <ArrowRight className="w-4 h-4 text-error" />
                <MiniCard text="Defect Logged + Photo" type="error" />
                <ArrowRight className="w-4 h-4 text-error" />
                <MiniCard text="Auto-Escalation to QA Lead" type="error" />
                <ArrowRight className="w-4 h-4 text-error" />
                <MiniCard text="Await Resolution" type="error" />
              </div>
            </div>

            {/* Offline Path */}
            <div className="flex flex-col">
              <h4 className="font-sans text-[12px] font-semibold text-warning mb-3">Offline Path — No Network</h4>
              <div className="flex items-center gap-2">
                <MiniCard text="Network Lost" type="warning" />
                <ArrowRight className="w-4 h-4 text-warning" />
                <MiniCard text="Work Queued Locally" type="warning" />
                <ArrowRight className="w-4 h-4 text-warning" />
                <MiniCard text="Auto-Sync on Reconnect" type="warning" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Redesign Impact Strip */}
      <div className="w-full bg-bg-elevated border-t border-border-subtle p-6 px-16 flex items-center justify-between rounded-b-xl">
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">43% fewer errors</p>
          <p className="font-sans text-[13px] text-text-secondary">Inline validation + smart defaults in Phase 05</p>
        </div>
        <div className="w-px h-10 bg-border-subtle"></div>
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">62% faster completion</p>
          <p className="font-sans text-[13px] text-text-secondary">Sequential steps + auto-population in Phase 04–05</p>
        </div>
        <div className="w-px h-10 bg-border-subtle"></div>
        <div className="flex-1 text-center px-4">
          <p className="font-sans text-[14px] text-text-primary font-medium">Zero data loss</p>
          <p className="font-sans text-[13px] text-text-secondary">Offline-first architecture in all phases</p>
        </div>
      </div>

    </div>
  );
};

function PhaseCard({ num, title, icon, steps, highlight = false }: { num: string, title: string, icon: React.ReactNode, steps: string[], highlight?: boolean }) {
  return (
    <div className={`bg-bg-surface border ${highlight ? 'border-l-4 border-l-secondary border-y-border-subtle border-r-border-subtle shadow-lg scale-105' : 'border-border-subtle'} rounded-xl p-5 min-w-[180px] flex-1 max-w-[200px] flex flex-col`}>
      <div className="flex justify-between items-start mb-3">
        <span className="font-mono font-bold text-[11px] text-primary">{num}</span>
        {icon}
      </div>
      <h3 className="font-sans font-semibold text-[16px] text-[#f0f4f8] mb-3">{title}</h3>
      <ul className="space-y-1.5 mt-auto">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-1.5">
            <span className="text-text-secondary text-[11px] leading-tight mt-0.5">•</span>
            <span className="font-sans text-[11px] text-text-secondary leading-tight">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex-1 flex items-center justify-center px-2">
      <div className="w-full h-[2px] bg-secondary relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-secondary"></div>
      </div>
    </div>
  );
}

function MiniCard({ text, type }: { text: string, type: 'error' | 'warning' }) {
  const colors = {
    error: 'bg-error-dim/20 border-error/50 text-text-primary',
    warning: 'bg-warning-dim/20 border-warning/50 text-text-primary'
  };
  return (
    <div className={`px-3 py-2 rounded-md border ${colors[type]} font-sans text-[12px] whitespace-nowrap`}>
      {text}
    </div>
  );
}
