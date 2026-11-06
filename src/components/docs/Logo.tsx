import React from 'react';

export const Logo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L29.8564 10V22L16 30L2.14359 22V10L16 2Z" stroke="var(--sky-500)" strokeWidth="2"/>
    <text x="16" y="21" fontFamily="IBM Plex Mono" fontWeight="bold" fontSize="16" fill="var(--sky-500)" textAnchor="middle">F</text>
  </svg>
);
