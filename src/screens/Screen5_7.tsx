import React from 'react';
import { Layers, Component, Box, ToggleLeft, Zap, MonitorPlay } from 'lucide-react';

export const Screen5_7 = () => {
  return (
    <div className="w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col shrink-0 p-16">
      
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">04 — Boeing Digital Design Language</h2>
        <h1 className="font-sans font-bold text-[40px] text-text-primary mb-2">150+ Component System Built for Scale</h1>
        <p className="font-sans text-[16px] text-text-secondary mb-6">Figma · Auto Layout · Variants · Component Properties · Boolean Operations</p>
        <div className="w-[80px] h-[2px] bg-secondary"></div>
      </div>

      {/* Component Taxonomy Visual */}
      <div className="flex-1 flex flex-col mb-12">
        
        {/* Foundations */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-sans text-[14px] font-semibold text-text-primary uppercase tracking-wider">Foundations</h3>
            <span className="font-mono text-[10px] bg-bg-elevated border border-border-subtle px-2 py-0.5 rounded text-text-secondary">Tokens</span>
          </div>
          <div className="flex gap-3">
            <Pill label="Colors" />
            <Pill label="Typography" />
            <Pill label="Spacing" />
            <Pill label="Motion" />
            <Pill label="Icons" />
          </div>
        </div>

        {/* Core Components Grid */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          
          <CategoryCard 
            title="Forms & Inputs" 
            count={32} 
            items={['Button', 'Input', 'Dropdown', 'Checkbox', 'Radio', 'Toggle', 'Slider', 'Date Picker', 'Time Picker', 'Search', 'Textarea', 'File Upload', 'Signature Field', '+ more']} 
          />
          <CategoryCard 
            title="Navigation" 
            count={18} 
            items={['Top Bar', 'Bottom Nav', 'Sidebar', 'Tabs', 'Breadcrumb', 'Pagination', 'Step Indicator', '+ more']} 
          />
          <CategoryCard 
            title="Data Display" 
            count={28} 
            items={['Table', 'Card', 'List', 'Badge', 'Tag', 'Tooltip', 'Avatar', 'Divider', 'Stat Card', '+ more']} 
          />
          <CategoryCard 
            title="Feedback" 
            count={24} 
            items={['Alert', 'Toast', 'Modal', 'Bottom Sheet', 'Loading', 'Progress', 'Empty State', 'Skeleton', '+ more']} 
          />
          <CategoryCard 
            title="Aviation-Specific" 
            count={15} 
            items={['Work Order Card', 'Inspection Checklist', 'Part Number Field', 'Torque Spec Reference', 'Station Selector', 'Barcode Scanner', 'Sign-off Field', '+ more']} 
            highlight={true}
          />
          <CategoryCard 
            title="Layout" 
            count={33} 
            items={['Grid', 'Container', 'Sidebar Layout', 'Split View', 'Scroll Area', 'Sticky Header', '+ more']} 
          />

        </div>
      </div>

      {/* Advanced Figma Techniques Used */}
      <div className="grid grid-cols-6 gap-4 pt-8 border-t border-border-subtle">
        
        <TechniqueCard 
          icon={<Layers className="w-5 h-5 text-primary" />}
          title="Auto Layout"
          desc="All components built with Auto Layout for responsive behavior across breakpoints"
        />
        <TechniqueCard 
          icon={<Component className="w-5 h-5 text-primary" />}
          title="Component Properties"
          desc="Boolean, text, and instance swap properties for maximum flexibility"
        />
        <TechniqueCard 
          icon={<Box className="w-5 h-5 text-primary" />}
          title="Variants"
          desc="Complex variant matrices — up to 5×4×3 per component"
        />
        <TechniqueCard 
          icon={<ToggleLeft className="w-5 h-5 text-primary" />}
          title="Boolean Operations"
          desc="Icon and UI element construction"
        />
        <TechniqueCard 
          icon={<Zap className="w-5 h-5 text-primary" />}
          title="Smart Animate"
          desc="Prototyped complex flows including conditional branching and state management"
        />
        <TechniqueCard 
          icon={<MonitorPlay className="w-5 h-5 text-primary" />}
          title="ProtoPie"
          desc="Advanced interactions — drag-and-drop, real-time data simulation, offline state simulation"
        />

      </div>

    </div>
  );
};

function Pill({ label }: { label: string }) {
  return (
    <div className="min-h-[32px] h-auto py-1 px-4 bg-bg-surface border border-border-subtle rounded-full flex items-center font-sans text-[13px] text-text-primary">
      {label}
    </div>
  );
}

function CategoryCard({ title, count, items, highlight = false }: { title: string, count: number, items: string[], highlight?: boolean }) {
  return (
    <div className={`bg-bg-surface border ${highlight ? 'border-secondary/50 bg-secondary/5' : 'border-border-subtle'} rounded-xl p-6 flex flex-col`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-sans text-[16px] font-semibold text-[#f0f4f8]">{title}</h3>
        <div className={`h-[24px] px-2 rounded-full font-mono text-[11px] font-bold flex items-center ${highlight ? 'bg-secondary text-white' : 'bg-bg-elevated border border-border-default text-text-secondary'}`}>
          {count}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span key={idx} className={`font-sans text-[13px] ${item === '+ more' ? 'text-text-disabled italic' : 'text-text-secondary'}`}>
            {item}{idx < items.length - 1 && item !== '+ more' ? <span className="text-border-default mx-1">•</span> : ''}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechniqueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-lg p-5 flex flex-col">
      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-sans font-semibold text-[14px] text-text-primary mb-2">{title}</h4>
      <p className="font-sans text-[12px] text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
