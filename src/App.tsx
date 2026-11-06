import React, { useState, useEffect } from 'react';
import DesignSystem from './DesignSystem';
import Screens from './Screens';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import { Logo } from './components/docs/Logo';

type ViewType = 'design-system' | 'screens-p2' | 'screens-p3' | 'screens-p4' | 'screens-p5';

interface NavItem {
  id: ViewType;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'design-system', label: '01 Design System' },
  { id: 'screens-p2', label: '02 Dashboard' },
  { id: 'screens-p3', label: '03 Task Flow' },
  { id: 'screens-p4', label: '04 Secondary Flows' },
  { id: 'screens-p5', label: '05 PWA & Case Study' },
];

function getInitialView(): ViewType {
  if (typeof window === 'undefined') return 'screens-p5';
  const hash = window.location.hash.replace('#', '');
  if (navItems.some(item => item.id === hash)) {
    return hash as ViewType;
  }
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get('view');
  if (viewParam && navItems.some(item => item.id === viewParam)) {
    return viewParam as ViewType;
  }
  return 'screens-p5';
}

export default function App() {
  const [view, setView] = useState<ViewType>(getInitialView);

  useEffect(() => {
    const handlePopState = () => {
      setView(getInitialView());
    };
    window.addEventListener('hashchange', handlePopState);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handlePopState);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const switchView = (newView: ViewType) => {
    setView(newView);
    const newUrl = `${window.location.pathname}?view=${newView}#${newView}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <>
      {/* Fixed Top Nav */}
      <header className="fixed top-0 left-0 right-0 h-16 z-[100] bg-bg-elevated/95 backdrop-blur-md border-b border-border-default px-6 flex items-center justify-between shadow-lg gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <Logo size={28} />
          <div className="flex flex-col">
            <span className="font-mono font-bold text-[14px] text-text-primary tracking-wide leading-tight">FactoryFlow</span>
            <span className="font-sans text-[10px] text-text-secondary leading-tight hidden sm:inline">Boeing MES</span>
          </div>
        </div>

        {/* Center: Nav links */}
        <nav aria-label="Main Navigation" className="flex items-center gap-2 overflow-x-auto py-1">
          {navItems.map((item) => {
            const isActive = view === item.id;
            const targetUrl = `?view=${item.id}#${item.id}`;
            return (
              <a
                key={item.id}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && e.button === 0) {
                    e.preventDefault();
                    switchView(item.id);
                  }
                }}
                className={`px-4 py-2 rounded-lg font-sans text-[13px] font-medium transition-colors shrink-0 ${
                  isActive
                    ? 'bg-secondary text-white shadow-xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right side balance spacer */}
        <div className="w-[120px] shrink-0 hidden md:block"></div>
      </header>

      <main className="pt-16">
        {view === 'design-system' && <DesignSystem />}
        {view === 'screens-p2' && <Screens />}
        {view === 'screens-p3' && <Page3 />}
        {view === 'screens-p4' && <Page4 />}
        {view === 'screens-p5' && <Page5 />}
      </main>
    </>
  );
}
