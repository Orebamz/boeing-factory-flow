import React from 'react';

export const TokensSection = () => {
  return (
    <div className="space-y-24">
      {/* SECTION 2 — COLOR TOKENS */}
      <section id="color-tokens" className="space-y-8">
        <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
          <h2 className="type-heading-md">01 Color Tokens</h2>
          <span className="type-label-xs text-text-secondary">Semantic Palette</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="type-label-sm text-text-secondary">Background</h3>
            <ColorSwatch name="bg-base" hex="#0A0C0F" className="bg-bg-base border border-border-subtle" />
            <ColorSwatch name="bg-surface" hex="#12151A" className="bg-bg-surface" />
            <ColorSwatch name="bg-elevated" hex="#1C2028" className="bg-bg-elevated" />
            <ColorSwatch name="bg-overlay" hex="#252B35" className="bg-bg-overlay" />
          </div>

          <div className="space-y-4">
            <h3 className="type-label-sm text-text-secondary">Border</h3>
            <ColorSwatch name="border-subtle" hex="#2A3040" className="bg-border-subtle" />
            <ColorSwatch name="border-default" hex="#3D4757" className="bg-border-default" />
            <ColorSwatch name="border-strong" hex="#556070" className="bg-border-strong" />
          </div>

          <div className="space-y-4">
            <h3 className="type-label-sm text-text-secondary">Text</h3>
            <ColorSwatch name="text-primary" hex="#F0F4F8" className="bg-text-primary" textDark />
            <ColorSwatch name="text-secondary" hex="#8C97A8" className="bg-text-secondary" />
            <ColorSwatch name="text-disabled" hex="#4A5568" className="bg-text-disabled" />
          </div>

          <div className="space-y-4">
            <h3 className="type-label-sm text-text-secondary">Sky Scale (Primary)</h3>
            <div className="text-xs text-text-secondary mb-2">Usage: Text, labels, interactive elements, info states. Contrast on dark: 5.2:1 (Passes AA)</div>
            <ColorSwatch name="sky-500 (Base)" hex="#009BDF" className="bg-sky-500" textDark />
            <ColorSwatch name="sky-300" hex="#005D86" className="bg-sky-300" textDark />
            <ColorSwatch name="sky-100" hex="#001F2D" className="bg-sky-100" />
          </div>

          <div className="space-y-4">
            <h3 className="type-label-sm text-text-secondary">Navy Scale (Secondary)</h3>
            <div className="text-xs text-text-secondary mb-2">Usage: Button fills, borders, active backgrounds. Contrast on dark: Fails (Do not use for text)</div>
            <ColorSwatch name="boeing-500 (Base)" hex="#0033A0" className="bg-boeing-500" textDark />
            <ColorSwatch name="boeing-300" hex="#001F60" className="bg-boeing-300" textDark />
            <ColorSwatch name="boeing-100" hex="#000A20" className="bg-boeing-100" />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="type-label-sm text-text-secondary">Status (Full / Dim)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <StatusSwatch name="Success" hex="#22C55E" dimHex="#14532D" bgClass="bg-success" dimClass="bg-success-dim" />
            <StatusSwatch name="Warning" hex="#F59E0B" dimHex="#451A03" bgClass="bg-warning" dimClass="bg-warning-dim" />
            <StatusSwatch name="Error" hex="#EF4444" dimHex="#450A0A" bgClass="bg-error" dimClass="bg-error-dim" />
            <StatusSwatch name="Info" hex="#009BDF" dimHex="#001F2D" bgClass="bg-info" dimClass="bg-info-dim" />
            <StatusSwatch name="Caution" hex="#F97316" dimHex="#431407" bgClass="bg-caution" dimClass="bg-caution-dim" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — TYPOGRAPHY TOKENS */}
      <section id="typography" className="space-y-8">
        <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
          <h2 className="type-heading-md">02 Typography</h2>
          <span className="type-label-xs text-text-secondary">IBM Plex Mono / IBM Plex Sans</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-4 type-label-xs text-text-secondary w-1/4">Token Name</th>
                <th className="py-4 type-label-xs text-text-secondary w-1/4">Specs</th>
                <th className="py-4 type-label-xs text-text-secondary w-1/2">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              <TypeRow name="Display" specs="Mono 40px / 400" example={<span className="type-display">FactoryFlow 01</span>} />
              <TypeRow name="Heading/LG" specs="Sans 32px / 700" example={<span className="type-heading-lg">Production Line A</span>} />
              <TypeRow name="Heading/MD" specs="Sans 24px / 600" example={<span className="type-heading-md">Station Overview</span>} />
              <TypeRow name="Heading/SM" specs="Sans 20px / 600" example={<span className="type-heading-sm">Maintenance Required</span>} />
              <TypeRow name="Body/MD" specs="Sans 16px / 400" example={<span className="type-body-md">The hydraulic pump requires immediate servicing before the next shift begins.</span>} />
              <TypeRow name="Body/SM" specs="Sans 14px / 400" example={<span className="type-body-sm">Last updated by T. Miller at 14:00</span>} />
              <TypeRow name="Label/SM" specs="Mono 12px / 500" example={<span className="type-label-sm">ID: 884-29X</span>} />
              <TypeRow name="Label/XS" specs="Mono 11px / 500" example={<span className="type-label-xs">STATUS: ONLINE</span>} />
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4 — SPACING, RADIUS & SHADOWS */}
      <section id="spacing-radius" className="space-y-8">
        <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
          <h2 className="type-heading-md">03 Spacing & Radius</h2>
          <span className="type-label-xs text-text-secondary">Spatial System</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="type-label-sm text-text-secondary">Spacing Scale</h3>
            <div className="flex flex-wrap gap-4 items-end">
              {[2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((size) => (
                <div key={size} className="group relative">
                  <div className="bg-secondary" style={{ width: size, height: size }}></div>
                  <span className="type-label-xs text-text-secondary mt-2 block">{size}px</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="type-label-sm text-text-secondary">Border Radius</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-secondary rounded-sm flex items-center justify-center type-label-xs">sm</div>
                <span className="type-body-sm text-text-secondary">radius-sm — 4px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-secondary rounded-md flex items-center justify-center type-label-xs">md</div>
                <span className="type-body-sm text-text-secondary">radius-md — 6px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-secondary rounded-lg flex items-center justify-center type-label-xs">lg</div>
                <span className="type-body-sm text-text-secondary">radius-lg — 10px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-secondary rounded-xl flex items-center justify-center type-label-xs">xl</div>
                <span className="type-body-sm text-text-secondary">radius-xl — 16px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shadows" className="space-y-8">
        <div className="flex items-baseline justify-between border-b border-border-subtle pb-4">
          <h2 className="type-heading-md">04 Shadows</h2>
          <span className="type-label-xs text-text-secondary">Depth System</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-elevated shadow-sm p-6 rounded-md border border-border-subtle">
            <span className="type-label-xs text-text-secondary block mb-2">shadow-sm</span>
            <span className="type-body-sm text-text-primary">0 1px 3px rgba(0,0,0,0.4)</span>
          </div>
          <div className="bg-bg-elevated shadow-md p-6 rounded-md border border-border-subtle">
            <span className="type-label-xs text-text-secondary block mb-2">shadow-md</span>
            <span className="type-body-sm text-text-primary">0 4px 12px rgba(0,0,0,0.5)</span>
          </div>
          <div className="bg-bg-elevated shadow-lg p-6 rounded-md border border-border-subtle">
            <span className="type-label-xs text-text-secondary block mb-2">shadow-lg</span>
            <span className="type-body-sm text-text-primary">0 8px 24px rgba(0,0,0,0.6)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

function ColorSwatch({ name, hex, className, textDark = false }: { name: string, hex: string, className: string, textDark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 rounded-md shadow-sm ${className}`}></div>
      <div>
        <div className="type-label-sm text-text-primary">{name}</div>
        <div className="type-label-xs text-text-secondary font-mono">{hex}</div>
      </div>
    </div>
  );
}

function StatusSwatch({ name, hex, dimHex, bgClass, dimClass }: { name: string, hex: string, dimHex: string, bgClass: string, dimClass: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-16 rounded-md flex items-end p-2 ${bgClass}`}>
        <span className="type-label-xs text-bg-base font-bold">{hex}</span>
      </div>
      <div className={`h-8 rounded-md flex items-end p-2 ${dimClass}`}>
        <span className="type-label-xs text-text-secondary">{dimHex}</span>
      </div>
      <span className="type-label-sm block pt-1">{name}</span>
    </div>
  );
}

function TypeRow({ name, specs, example }: { name: string, specs: string, example: React.ReactNode }) {
  return (
    <tr>
      <td className="py-6 align-top">
        <span className="type-label-sm text-primary block mb-1">{name}</span>
      </td>
      <td className="py-6 align-top">
        <span className="type-label-xs text-text-secondary font-mono">{specs}</span>
      </td>
      <td className="py-6 align-top">
        {example}
      </td>
    </tr>
  );
}
