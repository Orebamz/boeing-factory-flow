import React, { useRef, useState, useEffect } from 'react';

export function ResponsiveFrame({ children, width = 1280, height = 800 }: { children: React.ReactNode, width?: number, height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      const parentWidth = parent ? parent.getBoundingClientRect().width : window.innerWidth;
      const viewMax = window.innerWidth - 32;
      const effectiveWidth = Math.min(parentWidth > 0 ? parentWidth : viewMax, viewMax);
      if (effectiveWidth > 0) {
        setScale(Math.min(1, effectiveWidth / width));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current?.parentElement) {
      observer.observe(containerRef.current.parentElement);
    }
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [width]);

  return (
    <div ref={containerRef} className="w-full max-w-full flex justify-center overflow-x-auto pb-2">
      <div
        className="relative overflow-hidden rounded-xl border border-border-subtle shadow-2xl bg-bg-base shrink-0"
        style={{
          width: `${Math.round(width * scale)}px`,
          height: `${Math.round(height * scale)}px`,
          maxWidth: '100%',
        }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
