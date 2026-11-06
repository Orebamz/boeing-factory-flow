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
    <div className="min-h-screen bg-bg-base text-text-primary font-sans p-8 md:p-12 overflow-x-auto">
      <div className="bg-bg-elevated border-b border-border-subtle p-6 rounded-xl mb-12 sticky left-8 max-w-[calc(100vw-4rem)] z-10">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 05 PWA Details & Case Study Assets</h1>
        <p className="font-sans text-[14px] text-text-secondary">3 PWA Screens · 8 Case Study Frames · Portfolio Presentation Layer</p>
      </div>

      <div className="flex flex-row gap-16 pb-12 items-start min-w-max">
        
        {/* PWA Screens */}
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_1 />
          <div className="text-center font-mono text-[13px] text-text-secondary">PWA 01 · Add to Home Screen Prompt · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_2 />
          <div className="text-center font-mono text-[13px] text-text-secondary">PWA 02 · Background Sync Notification · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_3 />
          <div className="text-center font-mono text-[13px] text-text-secondary">PWA 03 · App Update Banner · Mobile 390×844</div>
        </div>

        {/* Case Study Frames */}
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_4 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 01 · Research & Discovery · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_5 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 02 · Before & After · Heuristic Findings → Redesign · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_6 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 03 · Metrics & Outcomes · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_7 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 04 · Design System Scale · Boeing Digital Design Language · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_8 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 05 · Project Cover & Summary · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_9 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 06 · User Personas · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_10 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 07 · End-to-End Workflow Diagram · 1440×900</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen5_11 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Case Study 08 · Empathy Map · Primary Persona · 1440×900</div>
        </div>

      </div>
    </div>
  );
}
