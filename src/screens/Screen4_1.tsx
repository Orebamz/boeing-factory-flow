import React from 'react';
import { X, Flashlight, Keyboard, Check, ChevronRight, Search } from 'lucide-react';

export const Screen4_1 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-bg-base relative overflow-hidden border border-border-subtle rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* Camera Viewfinder Background */}
      <div className="absolute inset-0 bg-[#050505] z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Top Bar (Overlaid) */}
      <div className="absolute top-0 left-0 w-full h-[56px] bg-bg-elevated/80 backdrop-blur-md border-b border-border-subtle flex items-center justify-between px-2 z-20">
        <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
          <X className="w-6 h-6" />
        </button>
        <span className="font-sans text-[16px] font-semibold text-text-primary">Scan Work Order</span>
        <div className="flex items-center">
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <Flashlight className="w-5 h-5" />
          </button>
          <button className="w-[44px] h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary">
            <Keyboard className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scan Target Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none pb-[200px]">
        <div className="relative w-[280px] h-[180px] mb-6">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-[24px] h-[24px] border-t-[3px] border-l-[3px] border-secondary rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-[24px] h-[24px] border-t-[3px] border-r-[3px] border-secondary rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-[24px] h-[24px] border-b-[3px] border-l-[3px] border-secondary rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-[24px] h-[24px] border-b-[3px] border-r-[3px] border-secondary rounded-br-lg"></div>
          
          {/* Animated Scan Line */}
          <div className="absolute left-0 right-0 h-[2px] bg-secondary/60 shadow-[0_0_8px_rgba(0,51,160,0.8)] top-[40%]"></div>
        </div>

        <div className="bg-bg-overlay/60 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-sans text-[13px] text-text-primary">Align barcode within frame</span>
        </div>

        {/* Manual Entry Fallback */}
        <div className="mt-8 text-center pointer-events-auto">
          <span className="font-sans text-[13px] text-text-secondary">Can't scan? </span>
          <button className="font-sans text-[13px] text-primary">Enter manually →</button>
        </div>
      </div>

      {/* Scan Result Bottom Sheet */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-bg-elevated rounded-t-[24px] shadow-[0_-8px_30px_rgba(0,0,0,0.5)] z-30 flex flex-col">
        <div className="w-full flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-[40px] h-[4px] bg-border-default rounded-full"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#14532D] flex items-center justify-center mb-3">
              <Check className="w-6 h-6 text-success" />
            </div>
            <span className="font-sans text-[14px] text-success font-medium">Barcode detected</span>
          </div>

          <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 mb-6">
            <div className="flex justify-between items-start mb-1">
              <span className="font-mono font-bold text-[20px] text-primary">WO-28392</span>
              <div className="h-[20px] px-2 rounded-full bg-[#451A03] text-warning font-sans font-medium text-[11px] flex items-center">High Priority</div>
            </div>
            <h3 className="font-sans font-semibold text-[16px] text-text-primary mb-3">Torque Verification — Wing Rib Assembly</h3>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[13px] text-text-secondary">Station 7A</span>
              <span className="font-sans text-[13px] text-text-secondary">·</span>
              <span className="font-sans text-[13px] text-text-secondary">Due 15:00</span>
              <span className="font-sans text-[13px] text-text-secondary">·</span>
              <span className="font-sans text-[13px] text-text-secondary">K. Thompson</span>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <button className="w-full h-[56px] bg-secondary rounded-md text-white font-sans text-[16px] font-medium hover:bg-secondary-hover transition-colors">
              Open Task
            </button>
            <button className="w-full h-[56px] bg-transparent border border-border-default rounded-md text-text-primary font-sans text-[16px] font-medium hover:bg-bg-surface transition-colors">
              Scan Another
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
