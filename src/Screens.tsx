import React from 'react';
import { Screen1 } from './screens/Screen1';
import { Screen2 } from './screens/Screen2';
import { Screen3 } from './screens/Screen3';
import { Screen4 } from './screens/Screen4';
import { ResponsiveFrame } from './components/ResponsiveFrame';

export default function Screens() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans py-12 px-4 md:px-8 flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-[1280px] bg-bg-elevated border border-border-subtle p-6 rounded-xl mb-12 shadow-sm">
        <h1 className="font-mono text-[24px] font-bold text-text-primary mb-2">FactoryFlow MES — 02 Entry Points & Dashboard</h1>
        <p className="font-sans text-[14px] text-text-secondary">4 Screens · Authentication / Dashboard / Floor Overview / Work Orders</p>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col gap-16 md:gap-20 items-center pb-24">
        {/* Pair: Scan Badge & Home Dashboard (Side by Side) */}
        <div className="w-full flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap justify-center items-start gap-6 sm:gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen1 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 01 · Login & Authentication (Scan Badge)</div>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <Screen2 />
              <div className="text-center font-mono text-[13px] text-text-secondary">Screen 02 · Main Dashboard (Technician Home)</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4">
          <ResponsiveFrame width={1280} height={800}>
            <Screen3 />
          </ResponsiveFrame>
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 03 · Real-Time Floor Overview</div>
        </div>
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4">
          <ResponsiveFrame width={1280} height={800}>
            <Screen4 />
          </ResponsiveFrame>
          <div className="text-center font-mono text-[13px] text-text-secondary">Screen 04 · Work Order Management</div>
        </div>
      </div>
    </div>
  );
}
