import React from 'react';
import { Logo } from '../components/docs/Logo';

export const Screen5_8 = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'linear-gradient(to right, #2A3040 1px, transparent 1px), linear-gradient(to bottom, #2A3040 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* Left Half - Content */}
        <div className="w-full lg:w-[60%] p-6 md:p-12 lg:p-20 flex flex-col justify-center">
          
          <div className="mb-12">
            <h2 className="font-sans text-[11px] uppercase text-text-secondary tracking-[0.2em] mb-6 font-semibold">UX/UI Design · The Boeing Company · 2026</h2>
            
            <h1 className="font-mono font-bold text-[36px] sm:text-[48px] lg:text-[64px] text-primary leading-none mb-4 tracking-tight">FactoryFlow</h1>
            <p className="font-sans text-[18px] md:text-[20px] text-text-secondary mb-8">Boeing Manufacturing Execution System</p>
            
            <div className="w-[120px] h-[2px] bg-secondary mb-8"></div>
            
            <p className="font-sans text-[15px] md:text-[16px] text-text-secondary leading-relaxed max-w-[600px] mb-12">
              A ground-up redesign of Boeing's internal manufacturing execution system, serving 5,000+ concurrent users across factory floor mobile, tablet, and desktop environments. Delivered as a 150+ component design system with measurable production impact.
            </p>

            <div className="mb-12">
              <h3 className="font-sans font-semibold text-[14px] text-text-primary mb-2">Senior UX/UI Designer & AI Design Engineer</h3>
              <p className="font-mono text-[12px] text-text-secondary mb-1">2026</p>
              <p className="font-sans text-[12px] text-text-secondary">Client: The Boeing Company</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Pill label="150+ Component System" />
              <Pill label="End-to-End UX Research" />
              <Pill label="Responsive Web Application" />
              <Pill label="PWA / Offline-First" />
            </div>
          </div>

          {/* Bottom Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-border-subtle mt-auto">
            <Metric value="43%" label="Error Reduction" />
            <Metric value="62%" label="Faster Completion" />
            <Metric value="91%" label="Form Completion" />
            <Metric value="5,000+" label="Users" />
          </div>

        </div>

        {/* Right Half - Visuals */}
        <div className="w-full lg:w-[40%] bg-bg-surface/50 border-t lg:border-t-0 lg:border-l border-border-subtle flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 relative overflow-hidden">
          
          {/* Large Logo */}
          <div className="w-[200px] h-[200px] mb-16 relative flex items-center justify-center">
            <Logo size={200} />
          </div>

          {/* Component Grid Thumbnail */}
          <div className="w-full max-w-[400px] bg-bg-elevated border border-border-subtle rounded-xl p-6 shadow-2xl relative z-10">
            <div className="grid grid-cols-4 gap-3 mb-6 opacity-90">
              {/* Row 1: Primary Button, Secondary Button, Input Field, Dropdown */}
              <div className="h-8 bg-secondary rounded-md flex items-center justify-center shadow-sm">
                <div className="w-8 h-1.5 bg-white/80 rounded-full"></div>
              </div>
              <div className="h-8 bg-bg-surface border border-border-default rounded-md flex items-center justify-center shadow-sm hover:bg-bg-elevated">
                <div className="w-8 h-1.5 bg-text-primary/80 rounded-full"></div>
              </div>
              <div className="h-8 bg-bg-surface border border-border-default rounded-md flex items-center px-2 shadow-sm">
                <div className="w-10 h-1.5 bg-text-secondary/50 rounded-full"></div>
              </div>
              <div className="h-8 bg-bg-surface border border-border-default rounded-md flex items-center justify-between px-2 shadow-sm">
                <div className="w-6 h-1.5 bg-text-primary/80 rounded-full"></div>
                <div className="w-2 h-2 border-r-[1.5px] border-b-[1.5px] border-text-secondary/80 transform rotate-45 -translate-y-0.5"></div>
              </div>
              
              {/* Row 2: Progress Bar, Slider */}
              <div className="col-span-2 h-12 bg-bg-elevated border border-border-subtle rounded-md flex flex-col justify-center px-3 gap-2 shadow-sm">
                <div className="w-12 h-1.5 bg-text-secondary/80 rounded-full"></div>
                <div className="w-full h-1.5 bg-bg-surface rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="col-span-2 h-12 bg-bg-elevated border border-border-subtle rounded-md flex flex-col justify-center px-3 gap-2 shadow-sm">
                <div className="w-10 h-1.5 bg-text-secondary/80 rounded-full"></div>
                <div className="w-full h-1 bg-bg-surface rounded-full relative flex items-center">
                  <div className="w-[40%] h-full bg-secondary rounded-full"></div>
                  <div className="absolute left-[40%] w-3 h-3 bg-white border-2 border-secondary rounded-full -translate-x-1.5 shadow-sm"></div>
                </div>
              </div>

              {/* Row 3: Task Card with Status Badge */}
              <div className="col-span-4 h-24 bg-bg-elevated border border-border-subtle rounded-md p-3 flex flex-col justify-between shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-2 bg-text-primary/80 rounded-full mb-2"></div>
                  <div className="h-4 px-1.5 bg-sky-100/30 border border-secondary/20 rounded-full flex items-center">
                    <div className="w-1 h-1 bg-secondary rounded-full mr-1"></div>
                    <div className="w-8 h-1 bg-secondary/80 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="w-3/4 h-1.5 bg-text-secondary/60 rounded-full"></div>
                  <div className="w-1/2 h-1.5 bg-text-secondary/40 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-border-subtle">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-bg-surface border border-border-default"></div>
                    <div className="w-4 h-4 rounded-full bg-bg-surface border border-border-default -ml-2"></div>
                  </div>
                  <div className="w-12 h-1.5 bg-text-secondary/50 rounded-full"></div>
                </div>
              </div>

              {/* Row 4: Status Badges */}
              <div className="h-6 bg-success/10 border border-success/20 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-success rounded-full mr-1.5"></div>
                <div className="w-6 h-1 bg-success/80 rounded-full"></div>
              </div>
              <div className="h-6 bg-warning/10 border border-warning/20 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-warning rounded-full mr-1.5"></div>
                <div className="w-6 h-1 bg-warning/80 rounded-full"></div>
              </div>
              <div className="h-6 bg-error/10 border border-error/20 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-error rounded-full mr-1.5"></div>
                <div className="w-6 h-1 bg-error/80 rounded-full"></div>
              </div>
              <div className="h-6 bg-info/10 border border-info/20 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-info rounded-full mr-1.5"></div>
                <div className="w-6 h-1 bg-info/80 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-sans text-[12px] font-semibold text-text-primary">Boeing Digital Design Language</p>
              <p className="font-mono text-[10px] text-text-secondary">150+ Components</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer Strip */}
      <div className="min-h-[72px] py-4 bg-bg-elevated border-t border-border-subtle px-6 md:px-12 flex items-center justify-between relative z-20 rounded-b-xl">
        <span className="font-sans text-[13px] text-text-secondary">FactoryFlow MES — Full Case Study</span>
        
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <div className="w-2 h-2 rounded-full border border-text-secondary"></div>
          <div className="w-2 h-2 rounded-full border border-text-secondary"></div>
          <div className="w-2 h-2 rounded-full border border-text-secondary"></div>
          <div className="w-2 h-2 rounded-full border border-text-secondary"></div>
        </div>

        <span className="font-sans text-[13px] text-text-secondary"></span>
      </div>

    </div>
  );
};

function Pill({ label }: { label: string }) {
  return (
    <div className="min-h-[32px] h-auto py-1 px-4 bg-bg-elevated border border-border-default rounded-full flex items-center font-sans text-[13px] font-medium text-text-primary">
      {label}
    </div>
  );
}

function Metric({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="font-mono font-bold text-[32px] text-[#f0f4f8] leading-none mb-1">{value}</div>
      <div className="font-sans text-[13px] text-text-secondary font-medium">{label}</div>
    </div>
  );
}
