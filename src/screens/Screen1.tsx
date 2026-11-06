import React from 'react';
import { ChevronDown, Scan, CloudOff, Delete } from 'lucide-react';
import { Logo } from '../components/docs/Logo';

export const Screen1 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      <div className="h-[40%] relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#3D4757 1px, transparent 1px), linear-gradient(90deg, #3D4757 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 flex flex-col items-center">
          <Logo size={64} />
          <h1 className="font-mono text-[24px] text-text-primary mt-4 tracking-wide font-bold">FactoryFlow</h1>
          <p className="text-[12px] text-text-secondary mt-2 font-sans">Boeing Manufacturing Execution System</p>
        </div>
      </div>
      <div className="px-6 flex flex-col flex-1">
        <div className="flex gap-3 mb-8">
          <div className="flex-1 h-[44px] bg-bg-elevated border border-border-subtle rounded-lg flex items-center justify-between px-4">
            <span className="text-[13px] text-text-primary font-sans">Denver Plant 2</span>
            <ChevronDown className="w-4 h-4 text-text-secondary" />
          </div>
          <div className="flex-1 h-[44px] bg-bg-elevated border border-border-subtle rounded-lg flex items-center justify-between px-4">
            <span className="text-[13px] text-text-primary font-sans">Morning Shift</span>
            <ChevronDown className="w-4 h-4 text-text-secondary" />
          </div>
        </div>
        <div className="bg-bg-surface border border-border-default rounded-lg p-6 flex flex-col items-center relative overflow-hidden mb-6">
          <div className="w-16 h-16 rounded-full bg-sky-100/30 flex items-center justify-center mb-4 relative">
            <Scan className="w-8 h-8 text-primary" />
            <div className="absolute left-0 w-full h-0.5 bg-secondary shadow-secondary-focus animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
          <h2 className="text-[16px] font-semibold text-text-primary font-sans mb-1">Scan your badge</h2>
          <p className="text-[14px] text-text-secondary font-sans">Hold badge to reader</p>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border-subtle"></div>
          <span className="text-[12px] text-text-secondary font-sans">or enter PIN</span>
          <div className="flex-1 h-px bg-border-subtle"></div>
        </div>
        <div className="flex flex-col items-center mb-auto">
          <div className="flex gap-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-4 h-4 rounded-full border-2 border-border-default"></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-[260px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button key={num} className="h-[56px] bg-bg-elevated rounded-md flex items-center justify-center font-mono text-[20px] font-bold text-text-primary active:bg-border-subtle">{num}</button>
            ))}
            <div></div>
            <button className="h-[56px] bg-bg-elevated rounded-md flex items-center justify-center font-mono text-[20px] font-bold text-text-primary active:bg-border-subtle">0</button>
            <button className="h-[56px] bg-bg-elevated rounded-md flex items-center justify-center text-text-secondary active:bg-border-subtle"><Delete className="w-6 h-6" /></button>
          </div>
        </div>
        <div className="text-center pb-8 pt-4">
          <a href="#" className="text-[12px] text-text-secondary font-sans hover:text-text-primary">Having trouble? Contact IT Support</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#451A03] border-t border-[#78350F] p-3 flex items-center justify-center gap-2">
        <CloudOff className="w-4 h-4 text-warning" />
        <span className="text-[12px] text-warning font-sans font-medium">Offline Mode — Limited functionality available</span>
      </div>
    </div>
  );
};
