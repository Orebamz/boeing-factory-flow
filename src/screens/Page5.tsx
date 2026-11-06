import React from 'react';
import { Screen5_1 } from './Screen5_1';
import { Screen5_2 } from './Screen5_2';
import { Screen5_3 } from './Screen5_3';
import { Screen5_4 } from './Screen5_4';
import { Screen5_5 } from './Screen5_5';
import { Screen5_6 } from './Screen5_6';
import { Screen5_7 } from './Screen5_7';
import { Screen5_8 } from './Screen5_8';
import { Screen5_9 } from './Screen5_9';
import { Screen5_10 } from './Screen5_10';
import { Screen5_11 } from './Screen5_11';

export default function Page5() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans py-12 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      {/* Top Header Card */}
      <div className="w-full max-w-[1440px] bg-bg-elevated border border-border-subtle p-6 rounded-xl mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <h1 className="font-mono text-[24px] font-bold text-text-primary mb-1">FactoryFlow MES — 05 Case Study & PWA Mobile</h1>
          <p className="font-sans text-[14px] text-text-secondary">8 Case Study Frames · 3 Mobile PWA Screens · Portfolio Presentation Layer</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <a 
            href="#case-studies" 
            className="px-3.5 py-1.5 rounded-full text-[12px] font-mono font-medium bg-bg-surface hover:bg-bg-base border border-border-default text-text-secondary hover:text-text-primary transition-colors"
          >
            Case Study Frames (8)
          </a>
          <a 
            href="#pwa-experience" 
            className="px-3.5 py-1.5 rounded-full text-[12px] font-mono font-medium bg-bg-surface hover:bg-bg-base border border-border-default text-text-secondary hover:text-text-primary transition-colors"
          >
            PWA Mobile (3)
          </a>
        </div>
      </div>

      {/* Main Vertical Content Flow */}
      <div className="w-full max-w-[1440px] flex flex-col gap-24 items-center pb-24">
        
        {/* Section 1: Case Study Frames */}
        <section id="case-studies" className="w-full flex flex-col items-center gap-20">
          <div className="w-full flex items-center justify-between pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <span className="h-6 px-2.5 rounded-full bg-secondary text-white text-[11px] font-mono font-bold flex items-center">01</span>
              <h2 className="font-sans font-semibold text-[20px] text-text-primary">End-to-End Case Study Presentation</h2>
            </div>
            <span className="font-mono text-[12px] text-text-secondary hidden sm:inline">8 Full Case Study Frames</span>
          </div>

          {/* 01. Project Cover & Summary */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_8 />
            <div className="text-center font-mono text-[13px] text-text-secondary">01 · Project Cover & Summary</div>
          </div>

          {/* 02. Research & Discovery */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_4 />
            <div className="text-center font-mono text-[13px] text-text-secondary">02 · Research & Discovery</div>
          </div>

          {/* 03. USER PERSONAS */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_9 />
            <div className="text-center font-mono text-[13px] text-text-secondary">03 · User Personas</div>
          </div>

          {/* 04. EMPATHY MAP */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_11 />
            <div className="text-center font-mono text-[13px] text-text-secondary">04 · Empathy Map · Primary Persona</div>
          </div>

          {/* 05. WORKFLOW DIAGRAM */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_10 />
            <div className="text-center font-mono text-[13px] text-text-secondary">05 · End-to-End Workflow Diagram</div>
          </div>

          {/* 06. Boeing Digital Design Language */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_7 />
            <div className="text-center font-mono text-[13px] text-text-secondary">06 · Boeing Digital Design Language · 150+ Component System</div>
          </div>

          {/* 07. Before & After */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_5 />
            <div className="text-center font-mono text-[13px] text-text-secondary">07 · Before & After · Heuristic Findings → Redesign</div>
          </div>

          {/* 08. Outcomes & Impact */}
          <div className="w-full flex flex-col items-center gap-4 pb-4">
            <Screen5_6 />
            <div className="text-center font-mono text-[13px] text-text-secondary">08 · Outcomes & Impact · Measurable Results</div>
          </div>
        </section>

        {/* Section 2: PWA Screens (Moved to last) */}
        <section id="pwa-experience" className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between pb-4 mb-10 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <span className="h-6 px-2.5 rounded-full bg-sky-100 text-primary text-[11px] font-mono font-bold flex items-center">02</span>
              <h2 className="font-sans font-semibold text-[20px] text-text-primary">Progressive Web App (PWA) Mobile Experience</h2>
            </div>
            <span className="font-mono text-[12px] text-text-secondary hidden sm:inline">3 Mobile Experiences</span>
          </div>

          <div className="flex flex-row flex-wrap gap-6 lg:gap-8 items-start justify-center w-full">
            <PhoneWrapper label="PWA 01 · Add to Home Screen Prompt">
              <Screen5_1 />
            </PhoneWrapper>
            <PhoneWrapper label="PWA 02 · Background Sync Notification">
              <Screen5_2 />
            </PhoneWrapper>
            <PhoneWrapper label="PWA 03 · App Update Banner">
              <Screen5_3 />
            </PhoneWrapper>
          </div>
        </section>

      </div>
    </div>
  );
}

function PhoneWrapper({ children, label }: { children: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 shrink-0">
      <div className="w-[328px] h-[709px] relative shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 origin-top scale-[0.84]">
          {children}
        </div>
      </div>
      <div className="text-center font-mono text-[13px] text-text-secondary max-w-[310px]">
        {label}
      </div>
    </div>
  );
}
