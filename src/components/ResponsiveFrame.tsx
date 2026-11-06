import React from 'react';

export function ResponsiveFrame({ children, width = 1440, height = 900 }: { children: React.ReactNode, width?: number, height?: number }) {
  return (
    <div className="w-full flex justify-center" style={{ maxWidth: `${width}px`, containerType: 'inline-size' } as React.CSSProperties}>
      <div
        className="relative overflow-hidden rounded-xl border border-border-subtle shadow-2xl bg-bg-base shrink-0"
        style={{
          width: '100%',
          aspectRatio: `${width}/${height}`
        }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(calc(100cqw / ${width}))`
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
