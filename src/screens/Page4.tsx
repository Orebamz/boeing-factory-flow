import React from 'react';
import { Screen4_1 } from './Screen4_1';
import { Screen4_2 } from './Screen4_2';
import { Screen4_3 } from './Screen4_3';
import { Screen4_4 } from './Screen4_4';
import { Screen4_5 } from './Screen4_5';
import { Screen4_6 } from './Screen4_6';
import { ResponsiveFrame } from '../components/ResponsiveFrame';

export default function Page4() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans py-12 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-[1280px] bg-bg-elevated border border-border-subtle p-6 rounded-xl mb-12 shadow-sm">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 04 Secondary Flows & Supervisor Views</h1>
        <p className="font-sans text-[14px] text-text-secondary">5 Screens + 1 Research Frame · Supporting Flows</p>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col gap-16 md:gap-20 items-center pb-24">
        {/* Pair 1: Scan Work Order & Quality Inspection (Side by Side) */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen4_1 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · Work Order Scanner</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen4_2 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · Quality Inspection</div>
            </div>
          </div>
        </div>

        {/* Screen 03: Supervisor Dashboard (Responsive to fit viewport width) */}
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4">
          <ResponsiveFrame width={1280} height={800}>
            <Screen4_3 />
          </ResponsiveFrame>
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Supervisor Dashboard</div>
        </div>

        {/* Pair 2: Defect Escalation & Task Reassignment (Side by Side) */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen4_5 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Defect Escalation</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen4_4 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 05 · Task Reassignment</div>
            </div>
          </div>
        </div>

        {/* Research: Competitive Analysis & Design Audit */}
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4">
          <Screen4_6 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Research · Competitive Analysis · 12 Platform Audit</div>
        </div>
      </div>
    </div>
  );
}
