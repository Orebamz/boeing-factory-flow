import React from 'react';
import { Sidebar } from './components/docs/Sidebar';
import { TokensSection } from './components/docs/TokensSection';
import { CoreComponentsSection } from './components/docs/CoreComponentsSection';
import { ExtendedComponentsSection } from './components/docs/ExtendedComponentsSection';
import { UsageGuidelinesSection } from './components/docs/UsageGuidelinesSection';
import { Logo } from './components/docs/Logo';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans flex selection:bg-secondary selection:text-white">
      <Sidebar />
      <main className="ml-[260px] w-full">
        <div className="max-w-[960px] p-[48px] space-y-24">
          
          {/* SECTION 1 — COVER & OVERVIEW */}
          <section id="overview" className="space-y-8 border-b border-border-default pb-16 pt-4">
            <div className="flex items-center gap-6">
              <Logo size={64} />
              <div className="space-y-2">
                <h1 className="type-display text-primary">FactoryFlow</h1>
                <h2 className="type-heading-lg text-text-secondary">Boeing Digital Design Language / Design System v1.0</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-bg-surface border border-border-subtle rounded-lg">
                <h3 className="type-label-xs text-text-secondary mb-2">Context</h3>
                <p className="type-body-sm">Industrial-utilitarian MES for factory floor technicians. Precision-first, high contrast, aerospace-grade.</p>
              </div>
              <div className="p-6 bg-bg-surface border border-border-subtle rounded-lg">
                <h3 className="type-label-xs text-text-secondary mb-2">Component Count</h3>
                <p className="type-display text-success">150+</p>
                <p className="type-body-sm text-text-secondary">Ready for production</p>
              </div>
              <div className="p-6 bg-bg-surface border border-border-subtle rounded-lg">
                <h3 className="type-label-xs text-text-secondary mb-2">Key Outcomes</h3>
                <p className="type-body-sm"><span className="text-success">43%</span> reduction in data entry errors</p>
                <p className="type-body-sm"><span className="text-success">91%</span> form completion rate</p>
              </div>
            </div>
          </section>

          <TokensSection />
          <CoreComponentsSection />
          <ExtendedComponentsSection />
          <UsageGuidelinesSection />

        </div>
      </main>
    </div>
  );
}
