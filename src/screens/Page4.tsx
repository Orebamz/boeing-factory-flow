import React from 'react';
import { Screen4_1 } from './Screen4_1';
import { Screen4_2 } from './Screen4_2';
import { Screen4_3 } from './Screen4_3';
import { Screen4_4 } from './Screen4_4';
import { Screen4_5 } from './Screen4_5';
import { Screen4_6 } from './Screen4_6';

export default function Page4() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans p-8 md:p-12 overflow-x-auto">
      <div className="bg-bg-elevated border-b border-border-subtle p-6 rounded-xl mb-12 sticky left-8 max-w-[calc(100vw-4rem)] z-10">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 04 Secondary Flows & Supervisor Views</h1>
        <p className="font-sans text-[14px] text-text-secondary">5 Screens + 1 Research Frame · Mobile + Desktop · Supporting Flows</p>
      </div>

      <div className="flex flex-row gap-16 pb-12 items-start min-w-max">
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_1 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · Work Order Scanner · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_2 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · Quality Inspection · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_3 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Supervisor Dashboard · Desktop 1280×800</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_4 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Task Reassignment · Desktop Modal · 1280×800</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_5 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 05 · Defect Escalation · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4_6 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Research · Competitive Analysis · 12 Platform Audit · 1440×900</div>
        </div>
      </div>
    </div>
  );
}
