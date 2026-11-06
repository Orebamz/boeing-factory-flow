import React from 'react';
import { Screen1 } from './screens/Screen1';
import { Screen2 } from './screens/Screen2';
import { Screen3 } from './screens/Screen3';
import { Screen4 } from './screens/Screen4';

export default function Screens() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans p-8 md:p-12 overflow-x-auto">
      <div className="bg-bg-elevated border-b border-border-subtle p-6 rounded-xl mb-12 sticky left-8 max-w-[calc(100vw-4rem)] z-10">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 02 Entry Points & Dashboard</h1>
        <p className="font-sans text-[14px] text-text-secondary">4 Screens · Mobile + Desktop · Authentication / Dashboard / Floor Overview / Work Orders</p>
      </div>

      <div className="flex flex-row gap-16 pb-12 items-start min-w-max">
        <div className="flex flex-col gap-6 shrink-0">
          <Screen1 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · Login & Authentication · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen2 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · Main Dashboard · Mobile 390×844</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen3 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Real-Time Floor Overview · Desktop 1280×800</div>
        </div>
        <div className="flex flex-col gap-6 shrink-0">
          <Screen4 />
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Work Order Management · Desktop 1280×800</div>
        </div>
      </div>
    </div>
  );
}
