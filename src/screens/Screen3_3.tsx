import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Screen3_3 = () => {
  return (
    <div className="w-[390px] h-[844px] bg-white relative overflow-hidden border border-gray-300 rounded-[40px] shadow-2xl flex flex-col shrink-0">
      {/* BEFORE Banner */}
      <div className="bg-[#FEF2F2] border-b border-[#FCA5A5] p-3 flex items-center justify-center gap-2 shrink-0">
        <AlertTriangle className="w-5 h-5 text-[#DC2626]" />
        <span className="font-sans text-[13px] text-[#DC2626] font-bold">⚠ BEFORE — Existing System (Heuristic Evaluation)</span>
      </div>

      {/* Top Bar */}
      <div className="h-[56px] bg-[#F3F4F6] border-b border-[#D1D5DB] flex items-center justify-center shrink-0 relative">
        <span className="font-sans text-[16px] font-bold text-[#111827]">Data Entry Form</span>
        {/* Callout 1 */}
        <div className="absolute -right-4 top-2 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform translate-x-full">
          1. No task context visible
          <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-[100px] bg-white">
        <form className="space-y-6">
          
          {/* Field 1 */}
          <div className="relative">
            <label className="block font-sans text-[14px] text-[#374151] mb-1">Work Order Number *</label>
            <input type="text" className="w-full h-[40px] border border-[#9CA3AF] rounded px-3 font-sans text-[14px] text-[#111827]" />
            {/* Callout 2 */}
            <div className="absolute -left-4 top-8 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform -translate-x-full">
              2. No guidance on expected format
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Field 2 */}
          <div className="relative">
            <label className="block font-sans text-[14px] text-[#374151] mb-1">Technician ID *</label>
            <input type="text" className="w-full h-[40px] border border-[#9CA3AF] rounded px-3 font-sans text-[14px] text-[#111827]" />
            {/* Callout 3 */}
            <div className="absolute -right-4 top-8 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform translate-x-full">
              3. Manual entry of known data
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Field 3 */}
          <div className="relative">
            <label className="block font-sans text-[14px] text-[#374151] mb-1">Station Code *</label>
            <input type="text" className="w-full h-[40px] border border-[#9CA3AF] rounded px-3 font-sans text-[14px] text-[#111827]" />
            {/* Callout 4 */}
            <div className="absolute -left-4 top-8 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform -translate-x-full">
              4. No validation of valid stations
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Field 4 */}
          <div className="relative">
            <label className="block font-sans text-[14px] text-[#374151] mb-1">Part Number *</label>
            <input type="text" className="w-full h-[40px] border border-[#9CA3AF] rounded px-3 font-sans text-[14px] text-[#111827]" />
            {/* Callout 5 */}
            <div className="absolute -right-4 top-8 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform translate-x-full">
              5. Prone to transcription errors
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Field 5 */}
          <div className="relative">
            <label className="block font-sans text-[14px] text-[#374151] mb-1">Measurement Reading (Nm) *</label>
            <input type="text" className="w-full h-[40px] border border-[#9CA3AF] rounded px-3 font-sans text-[14px] text-[#111827]" />
            {/* Callout 6 */}
            <div className="absolute -left-4 top-8 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform -translate-x-full">
              6. No contextual spec reference
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          {/* Fields 6-10 Cramped */}
          <div className="space-y-2 relative border border-dashed border-[#DC2626] p-2">
            <div>
              <label className="block font-sans text-[12px] text-[#374151]">Field 6</label>
              <input type="text" className="w-full h-[32px] border border-[#9CA3AF] rounded px-2 font-sans text-[12px] text-[#111827]" />
            </div>
            <div>
              <label className="block font-sans text-[12px] text-[#374151]">Field 7</label>
              <input type="text" className="w-full h-[32px] border border-[#9CA3AF] rounded px-2 font-sans text-[12px] text-[#111827]" />
            </div>
            <div>
              <label className="block font-sans text-[12px] text-[#374151]">Field 8</label>
              <input type="text" className="w-full h-[32px] border border-[#9CA3AF] rounded px-2 font-sans text-[12px] text-[#111827]" />
            </div>
            <div>
              <label className="block font-sans text-[12px] text-[#374151]">Field 9</label>
              <input type="text" className="w-full h-[32px] border border-[#9CA3AF] rounded px-2 font-sans text-[12px] text-[#111827]" />
            </div>
            <div>
              <label className="block font-sans text-[12px] text-[#374151]">Field 10</label>
              <input type="text" className="w-full h-[32px] border border-[#9CA3AF] rounded px-2 font-sans text-[12px] text-[#111827]" />
            </div>
            {/* Callout 7 */}
            <div className="absolute -right-4 top-1/2 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform translate-x-full -translate-y-1/2">
              7. All fields presented equally — no hierarchy
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="pt-4 relative">
            <button type="button" className="w-full h-[44px] bg-[#E5E7EB] border border-[#9CA3AF] rounded text-[#374151] font-sans font-bold text-[16px]">
              Submit
            </button>
            {/* Callout 8 */}
            <div className="absolute -left-4 top-10 bg-[#DC2626] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-50 transform -translate-x-full">
              8. Errors only shown on submit — too late
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#DC2626] transform -translate-y-1/2 rotate-45"></div>
            </div>
          </div>

          <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded p-3 mt-4">
            <p className="font-sans text-[12px] text-[#DC2626] mb-1">Error: Work Order Number is required</p>
            <p className="font-sans text-[12px] text-[#DC2626] mb-1">Error: Invalid Station Code</p>
            <p className="font-sans text-[12px] text-[#DC2626] mb-1">Error: Part Number format invalid</p>
            <p className="font-sans text-[12px] text-[#DC2626]">Error: Measurement out of range</p>
          </div>

        </form>
      </div>

      {/* Completion Stat */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white px-4 py-2 rounded-full font-sans font-bold text-[14px] shadow-lg whitespace-nowrap z-50">
        Form Completion Rate: 67%
      </div>
    </div>
  );
};
