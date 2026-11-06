import React from 'react';
import { Screen3_1 } from './Screen3_1';
import { Screen3_2 } from './Screen3_2';
import { Screen3_3 } from './Screen3_3';
import { Screen3_4 } from './Screen3_4';
import { Screen3_5 } from './Screen3_5';
import { Screen3_6 } from './Screen3_6';

export default function Page3() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans p-8 md:p-12 overflow-x-auto">
      <div className="bg-bg-elevated border-b border-border-subtle p-6 rounded-xl mb-12 sticky left-8 max-w-[calc(100vw-4rem)] z-10">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 03 Core Task Flow</h1>
        <p className="font-sans text-[14px] text-text-secondary">6 Screens · Mobile 390×844 · End-to-End Task Journey · 43% Error Reduction / 62% Faster Completion</p>
      </div>

      <div className="flex flex-row gap-16 pb-12 items-start min-w-max">
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_1 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · Task List · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_2 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · Task Detail · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_3 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Form Entry — BEFORE · Existing System · 67% Completion Rate</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_4 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Form Entry — AFTER · Redesigned · 91% Completion Rate</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_5 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 05 · Task Completion & Confirmation · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3_6 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 06 · Task Handoff & Next Assignment · Mobile 390×844</div>
        </div>
      </div>
    </div>
  );
}
