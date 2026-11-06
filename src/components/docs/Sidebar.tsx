import React from 'react';
import { Logo } from './Logo';

export const Sidebar = () => {
  const links = [
    { id: 'overview', label: 'Overview' },
    { id: 'color-tokens', label: '01 Color Tokens' },
    { id: 'typography', label: '02 Typography' },
    { id: 'spacing-radius', label: '03 Spacing & Radius' },
    { id: 'shadows', label: '04 Shadows' },
    { id: 'core-components', label: '05 Core Components', sub: [
      'Buttons', 'Input Fields', 'Dropdowns', 'Validation & Alerts', 'Status Badges'
    ]},
    { id: 'extended-components', label: '06 Extended Components', sub: [
      'Task Cards', 'Data Tables', 'Bottom Navigation', 'Bottom Sheet', 'Sync Indicator', 'Empty States'
    ]},
    { id: 'usage-guidelines', label: '07 Usage Guidelines' }
  ];

  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-[260px] bg-bg-surface border-r border-border-subtle flex flex-col z-50">
      <div className="p-6 border-b border-border-subtle">
        <div className="flex items-center gap-3 mb-2">
          <Logo size={32} />
          <span className="font-mono font-bold text-text-primary tracking-wide">FactoryFlow</span>
        </div>
        <div className="text-[11px] text-text-secondary">Boeing Digital Design Language</div>
      </div>
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="space-y-1">
          {links.map(link => (
            <div key={link.id}>
              <a
                href={`#${link.id}`}
                className="block px-6 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-elevated transition-colors focus:outline-none focus:text-primary focus:border-l-2 focus:border-primary"
              >
                {link.label}
              </a>
              {link.sub && (
                <div className="pl-10 py-1 space-y-2">
                  {link.sub.map(sub => {
                    const subId = sub.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                    return (
                      <a
                        key={sub}
                        href={`#${subId}`}
                        className="block text-xs text-text-disabled hover:text-text-secondary transition-colors py-0.5"
                      >
                        {sub}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="p-6 border-t border-border-subtle">
        <div className="text-xs text-text-secondary mb-1">v1.0.0</div>
        <div className="inline-flex items-center px-2 py-1 rounded bg-success-dim/20 text-success text-[10px] font-bold uppercase tracking-wider">
          150+ Components
        </div>
      </div>
    </div>
  );
};
