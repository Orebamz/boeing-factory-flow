import React from 'react';
import { Screen3_1 } from './Screen3_1';
import { Screen3_2 } from './Screen3_2';
import { Screen3_3 } from './Screen3_3';
import { Screen3_4 } from './Screen3_4';
import { Screen3_5 } from './Screen3_5';
import { Screen3_6 } from './Screen3_6';

export default function Page3() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans py-12 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-[1280px] bg-bg-elevated border border-border-subtle p-6 rounded-xl mb-12 shadow-sm">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 03 Core Task Flow</h1>
        <p className="font-sans text-[14px] text-text-secondary">6 Screens · End-to-End Task Journey · 43% Error Reduction / 62% Faster Completion</p>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col gap-16 md:gap-20 items-center pb-24">
        {/* Pair 1: My Tasks (Task List & Task Detail side by side) */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_1 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · My Tasks (Task List)</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_2 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · My Tasks (Task Detail)</div>
            </div>
          </div>
        </div>

        {/* Pair 2: Before & After Form Completion side by side */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_3 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Form Entry — BEFORE (Heuristic Evaluation)</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_4 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Form Entry — AFTER (FactoryFlow Redesign)</div>
            </div>
          </div>
        </div>

        {/* Pair 3: Confirm Submission & Task Submitted Successfully side by side */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_5 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 05 · Confirm Submission</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen3_6 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 06 · Task Submitted Successfully</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
