import React from 'react';
import { Loader2, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

export const CoreComponentsSection = () => {
  return (
    <section id="core-components" className="space-y-16 pt-8">
      <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
        <h2 className="type-heading-md">05 Core Components</h2>
        <span className="type-label-xs text-text-secondary">Interactive Elements</span>
      </div>

      {/* BUTTONS */}
      <div id="buttons" className="space-y-8">
        <div className="space-y-2">
          <h3 className="type-heading-sm text-primary">Buttons</h3>
          <p className="type-body-sm text-text-secondary">
            Font: IBM Plex Sans SemiBold 600, 14px, letter-spacing 0.02em. Border radius: radius-md (6px). Minimum touch target: 56px (Large).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <SpecBox title="Primary (bg-secondary, text-white)">
            <div className="flex flex-wrap items-end gap-12">
              <AnnotatedButton label="LARGE" sizeClass="h-[56px] px-[24px]" height="56px" pad="24px" />
              <AnnotatedButton label="MEDIUM" sizeClass="h-[48px] px-[20px]" height="48px" pad="20px" />
              <AnnotatedButton label="SMALL" sizeClass="h-[40px] px-[16px]" height="40px" pad="16px" />
            </div>
          </SpecBox>

          <SpecBox title="States & Variants">
            <div className="flex flex-wrap gap-8">
              <div className="space-y-2">
                <span className="type-label-xs text-text-secondary block">Secondary</span>
                <button className="h-[48px] px-[20px] rounded-md border border-border-default text-text-primary font-sans font-semibold text-[14px] tracking-[0.02em] hover:border-border-strong transition-colors">
                  Secondary
                </button>
              </div>
              <div className="space-y-2">
                <span className="type-label-xs text-text-secondary block">Destructive</span>
                <button className="h-[48px] px-[20px] rounded-md bg-error text-white font-sans font-semibold text-[14px] tracking-[0.02em]">
                  Destructive
                </button>
              </div>
              <div className="space-y-2">
                <span className="type-label-xs text-text-secondary block">Ghost</span>
                <button className="h-[48px] px-[20px] rounded-md bg-transparent text-text-primary font-sans font-semibold text-[14px] tracking-[0.02em] hover:bg-bg-elevated transition-colors">
                  Ghost
                </button>
              </div>
              <div className="space-y-2">
                <span className="type-label-xs text-text-secondary block">Disabled (opacity: 0.4)</span>
                <button className="h-[48px] px-[20px] rounded-md bg-secondary text-white font-sans font-semibold text-[14px] tracking-[0.02em] opacity-40 cursor-not-allowed uppercase">
                  Disabled
                </button>
              </div>
              <div className="space-y-2">
                <span className="type-label-xs text-text-secondary block">Loading</span>
                <button className="h-[48px] px-[20px] rounded-md bg-secondary text-white font-sans font-semibold text-[14px] tracking-[0.02em] flex items-center justify-center min-w-[100px]">
                  <Loader2 className="h-4 w-4 animate-[spin_800ms_linear_infinite]" />
                </button>
              </div>
            </div>
          </SpecBox>
        </div>
      </div>

      {/* INPUT FIELDS */}
      <div id="input-fields" className="space-y-8 pt-8 border-t border-border-subtle">
        <div className="space-y-2">
          <h3 className="type-heading-sm text-primary">Input Fields</h3>
          <p className="type-body-sm text-text-secondary">
            Height: 56px. Background: bg-surface (#12151A). Border: 1px solid border-default (#3D4757), radius-md (6px). Padding: 0 16px.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SpecBox title="Default State">
            <div className="w-full relative">
              <label className="block font-sans font-medium text-[14px] text-text-secondary mb-[6px]">Label (text-secondary — #8C97A8)</label>
              <input 
                type="text" 
                placeholder="Placeholder (text-disabled — #4A5568)" 
                className="w-full h-[56px] bg-bg-surface border border-border-default rounded-md px-[16px] font-sans text-[16px] text-text-primary focus:outline-none"
              />
              <p className="mt-[4px] text-[12px] text-text-secondary">Helper text (text-secondary — #8C97A8)</p>
              
              {/* Annotations */}
              <div className="absolute -left-12 top-[30px] bottom-[24px] border-l border-error flex items-center -translate-x-full pr-1">
                <span className="text-[10px] text-error font-mono">H: 56px</span>
              </div>
            </div>
          </SpecBox>

          <SpecBox title="Focused State">
            <div className="w-full">
              <label className="block font-sans font-medium text-[14px] text-text-secondary mb-[6px]">Label</label>
              <input 
                type="text" 
                defaultValue="Typing..." 
                className="w-full h-[56px] bg-bg-surface border-[3px] border-secondary rounded-md px-[16px] font-sans text-[16px] text-text-primary focus:outline-none shadow-[0_0_0_3px_rgba(0,51,160,0.15)]"
              />
              <p className="mt-[4px] text-[12px] text-primary font-mono">border: 3px secondary, shadow: 3px secondary/15</p>
            </div>
          </SpecBox>

          <SpecBox title="Error State">
            <div className="w-full relative">
              <label className="block font-sans font-medium text-[14px] text-text-secondary mb-[6px]">Label</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Invalid input" 
                  className="w-full h-[56px] bg-bg-surface border-2 border-error rounded-md px-[16px] pr-[40px] font-sans text-[16px] text-text-primary focus:outline-none shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
                />
                <AlertCircle className="absolute right-[16px] top-1/2 -translate-y-1/2 text-error h-[16px] w-[16px]" />
              </div>
              <p className="mt-[4px] text-[12px] text-error flex items-center gap-1">
                <AlertCircle className="h-[12px] w-[12px]" /> Error message (error — #EF4444)
              </p>
            </div>
          </SpecBox>

          <SpecBox title="Smart Default State">
            <div className="w-full relative">
              <label className="block font-sans font-medium text-[14px] text-text-secondary mb-[6px]">Work Order ID</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="WO-28471" 
                  className="w-full h-[56px] bg-bg-surface border border-border-default rounded-md px-[16px] font-sans text-[16px] text-text-primary focus:outline-none"
                  readOnly
                />
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 bg-sky-100 text-sky-600 font-mono text-[11px] px-[8px] py-[4px] rounded-[4px]">
                  AUTO-FILLED
                </div>
              </div>
              <p className="mt-[4px] text-[12px] text-sky-600 font-mono bg-sky-100/50 inline-block px-2 py-1 rounded">
                Smart defaults reduce cognitive load — pre-populates from work order context
              </p>
            </div>
          </SpecBox>
        </div>
      </div>

      {/* STATUS BADGES */}
      <div id="status-badges" className="space-y-8 pt-8 border-t border-border-subtle">
        <div className="space-y-2">
          <h3 className="type-heading-sm text-primary">Status Badges</h3>
          <p className="type-body-sm text-text-secondary">
            Small: height 24px, padding 0 8px, radius-full 9999px. Large: height 32px, padding 0 12px, radius-full. Font: IBM Plex Sans Medium 500.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SpecBox title="Small (24px) & Large (32px)">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <BadgeSpec status="Pending" bg="var(--color-bg-overlay)" text="var(--color-text-secondary)" size="sm" />
                <BadgeSpec status="In Progress" bg="var(--sky-100)" text="var(--sky-600)" size="sm" />
                <BadgeSpec status="Complete" bg="var(--color-success-dim)" text="var(--color-success)" size="sm" />
                <BadgeSpec status="Blocked" bg="var(--color-error-dim)" text="var(--color-error)" size="sm" />
                <BadgeSpec status="Requires Sign-off" bg="var(--color-warning-dim)" text="var(--color-warning)" size="sm" />
                <BadgeSpec status="Syncing" bg="var(--sky-100)" text="var(--sky-600)" size="sm" animate />
                <BadgeSpec status="Offline" bg="var(--color-warning-dim)" text="var(--color-caution)" size="sm" />
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <BadgeSpec status="Complete" bg="var(--color-success-dim)" text="var(--color-success)" size="lg" />
                <BadgeSpec status="Blocked" bg="var(--color-error-dim)" text="var(--color-error)" size="lg" />
              </div>
            </div>
          </SpecBox>
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

function BadgeSpec({ status, bg, text, size, animate }: { status: string, bg: string, text: string, size: 'sm' | 'lg', animate?: boolean }) {
  const h = size === 'sm' ? 'h-[24px]' : 'h-[32px]';
  const px = size === 'sm' ? 'px-[8px]' : 'px-[12px]';
  const textSz = size === 'sm' ? 'text-[12px]' : 'text-[13px]';
  const iconSz = size === 'sm' ? 'h-[12px] w-[12px]' : 'h-[14px] w-[14px]';

  return (
    <div className="relative">
      <div 
        className={`${h} ${px} rounded-full inline-flex items-center font-sans font-medium ${textSz} whitespace-nowrap`}
        style={{ backgroundColor: bg, color: text }}
      >
        {animate && (
          <div className={`rounded-full bg-current mr-[4px] ${iconSz} ${animate ? 'animate-pulse' : ''}`} />
        )}
        {status}
      </div>
    </div>
  );
}

function AnnotatedButton({ label, sizeClass, height, pad }: { label: string, sizeClass: string, height: string, pad: string }) {
  return (
    <div className="relative">
      <button className={`bg-secondary text-white font-sans font-semibold text-[14px] tracking-[0.02em] rounded-md uppercase ${sizeClass}`}>
        {label}
      </button>
      {/* Height annotation */}
      <div className="absolute -left-4 top-0 bottom-0 border-l border-error flex items-center -translate-x-full pr-1">
        <span className="text-[10px] text-error font-mono">H: {height}</span>
      </div>
      {/* Padding annotation */}
      <div className="absolute left-0 right-0 -bottom-4 border-b border-error flex justify-center translate-y-full pb-1">
        <span className="text-[10px] text-error font-mono">PX: {pad}</span>
      </div>
    </div>
  );
}
