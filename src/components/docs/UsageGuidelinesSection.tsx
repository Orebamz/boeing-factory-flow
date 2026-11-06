import React from 'react';

export const UsageGuidelinesSection = () => {
  return (
    <section id="usage-guidelines" className="space-y-8 pt-8 border-t border-border-default">
      <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
        <h2 className="type-heading-md">07 Usage Guidelines</h2>
        <span className="type-label-xs text-text-secondary">Best Practices</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GuidelineCard title="Buttons">
          Primary buttons are for the main action on a screen (e.g., Submit, Save). Use Secondary for cancellations or alternative paths. 
          Touch targets must be at least 56px height for gloved usage. Avoid Ghost buttons for primary workflows in low-light conditions.
        </GuidelineCard>
        
        <GuidelineCard title="Input Fields">
          Always use Smart Defaults where possible to reduce data entry. Inline validation should trigger on blur, not on submit. 
          Error messages must be descriptive and actionable. Use the "Smart-Default" variant to indicate auto-populated values clearly.
        </GuidelineCard>

        <GuidelineCard title="Status Badges">
          Use consistent colors for status across the app. "Syncing" and "Offline" states are critical for factory floor context where connectivity is intermittent.
          Ensure high contrast for text on badges (e.g., dark text on light/dim backgrounds).
        </GuidelineCard>

        <GuidelineCard title="Task Cards">
          Critical tasks must always have the red left-border indicator. The ID should be monospaced for readability.
          Status badges should be visible at a glance. Do not clutter the card with unnecessary metadata; focus on Title, ID, and Status.
        </GuidelineCard>

        <GuidelineCard title="Offline Indicators">
          This component must be persistent in the app header or top of the view. 
          Technicians need to know immediately if their data is being queued locally. 
          Use the "Sync Error" state sparingly and provide a clear retry action.
        </GuidelineCard>

        <GuidelineCard title="Data Tables">
          Use comfortable density for touch devices and compact for desktop stations. 
          Headers must be sortable. Row hover states are essential for tracking across wide tables.
          Status columns should always use Badges.
        </GuidelineCard>
      </div>
    </section>
  );
};

function GuidelineCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="p-6 bg-bg-surface border border-border-subtle rounded-lg">
      <h3 className="type-heading-sm mb-3 text-primary">{title}</h3>
      <p className="type-body-sm text-text-secondary leading-relaxed">
        {children}
      </p>
    </div>
  );
}
