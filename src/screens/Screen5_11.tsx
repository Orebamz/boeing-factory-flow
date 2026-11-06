import React from 'react';
import { MessageSquare, Heart, MessageCircle, Wrench } from 'lucide-react';

export const Screen5_11 = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[900px] bg-bg-base relative border border-border-subtle rounded-xl shadow-2xl flex flex-col">
      
      {/* Header Section */}
      <div className="p-6 md:p-10 lg:p-16 pb-6 md:pb-8">
        <h2 className="font-sans text-[11px] uppercase text-primary tracking-[0.1em] mb-2 font-semibold">04 — EMPATHY MAP</h2>
        <h1 className="font-sans font-bold text-[28px] sm:text-[34px] md:text-[40px] text-text-primary mb-2">Inside the Mind of the Factory Floor Technician</h1>
        <p className="font-sans text-[15px] md:text-[16px] text-text-secondary">Jamie M. · Assembly Technician · Synthesized from 60+ contextual inquiry sessions</p>
        <div className="w-[80px] h-[2px] bg-secondary mt-4"></div>
      </div>

      {/* Persona Identifier Row */}
      <div className="flex justify-center mt-4 md:mt-6 px-4">
        <div className="inline-flex items-center gap-4 bg-bg-elevated rounded-2xl px-6 py-4 border border-border-subtle shadow-md">
          <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center font-mono font-bold text-[16px] text-primary shrink-0">
            JM
          </div>
          <div>
            <h3 className="font-sans font-semibold text-[16px] text-text-primary">Jamie M. — Assembly Technician</h3>
            <p className="font-sans text-[13px] text-text-secondary">Station 4B · Morning Shift · 4 Years Experience</p>
          </div>
        </div>
      </div>

      {/* Empathy Map Grid */}
      <div className="flex-1 relative mt-8 border-t-2 border-border-default">
        
        {/* Center Circle - Visible on medium+ screens */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-bg-elevated border-2 border-secondary rounded-full shadow-2xl z-20 flex-col items-center justify-center">
          <span className="font-mono font-bold text-[13px] text-primary">Jamie M.</span>
          <span className="font-sans text-[11px] text-text-secondary text-center mt-1">Assembly<br/>Technician</span>
        </div>

        {/* Quadrants Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          
          {/* Top Left - THINKS */}
          <div className="bg-bg-surface border-r-2 border-b-2 border-border-default relative">
            <div className="bg-bg-elevated border-b border-border-subtle px-8 py-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="font-sans text-[11px] uppercase text-primary tracking-wider font-semibold">THINKS</span>
            </div>
            <div className="p-8 space-y-2">
              <StickyNote text="Why do I have to type in my own badge number — the system knows who I am" type="thinks" />
              <StickyNote text="If I make an error I won't know until I've already submitted everything" type="thinks" />
              <StickyNote text="I don't have time to read all these fields — I need to get back to the line" type="thinks" />
              <StickyNote text="What does this error code mean? There's no explanation" type="thinks" />
              <StickyNote text="I hope the network doesn't drop again mid-form like yesterday" type="thinks" />
            </div>
          </div>

          {/* Top Right - FEELS */}
          <div className="bg-bg-surface border-b-2 border-border-default relative">
            <div className="bg-bg-elevated border-b border-border-subtle px-8 py-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <span className="font-sans text-[11px] uppercase text-primary tracking-wider font-semibold">FEELS</span>
            </div>
            <div className="p-8 space-y-2">
              <StickyNote text="Frustrated when the system slows me down more than the actual work does" type="feels" />
              <StickyNote text="Anxious about making errors that affect quality sign-off" type="feels" />
              <StickyNote text="Relieved when a task goes smoothly without any system issues" type="feels" />
              <StickyNote text="Overwhelmed by the volume of fields on complex work orders" type="feels" />
              <StickyNote text="Unsupported — like the tool wasn't designed for how I actually work" type="feels" />
            </div>
          </div>

          {/* Bottom Left - SAYS */}
          <div className="bg-bg-surface border-r-2 border-border-default relative">
            <div className="bg-bg-elevated border-b border-border-subtle px-8 py-3 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="font-sans text-[11px] uppercase text-primary tracking-wider font-semibold">SAYS</span>
            </div>
            <div className="p-8 space-y-2">
              <StickyNote text="I just need it to be fast — I'm on the clock" type="says" />
              <StickyNote text="Half these fields I fill in the same way every single time" type="says" />
              <StickyNote text="The old system made us do everything twice because of errors" type="says" />
              <StickyNote text="I use paper as a backup because I don't trust the network" type="says" />
              <StickyNote text="My supervisor never knows what's happening until it's too late" type="says" />
            </div>
          </div>

          {/* Bottom Right - DOES */}
          <div className="bg-bg-surface relative">
            <div className="bg-bg-elevated border-b border-border-subtle px-8 py-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="font-sans text-[11px] uppercase text-primary tracking-wider font-semibold">DOES</span>
            </div>
            <div className="p-8 space-y-2">
              <StickyNote text="Takes photos on personal phone as backup before entering data" type="does" />
              <StickyNote text="Writes work order numbers on hand or paper to avoid re-entry errors" type="does" />
              <StickyNote text="Skips optional fields to complete forms faster under time pressure" type="does" />
              <StickyNote text="Asks colleagues to double-check entries before submitting critical inspections" type="does" />
              <StickyNote text="Defaults to paper form when network is unreliable" type="does" />
            </div>
          </div>

        </div>
      </div>

      {/* Design Implications Strip */}
      <div className="w-full bg-bg-elevated border-t border-border-subtle p-6 px-6 md:px-16 rounded-b-xl">
        <h3 className="font-sans text-[12px] uppercase text-text-secondary tracking-wider font-semibold mb-4">How this shaped the FactoryFlow redesign</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          <ImplicationCard 
            title="Auto-population" 
            desc="Smart defaults eliminated 4 manual re-entry fields per form" 
            highlight={true} 
          />
          <ImplicationCard 
            title="Inline validation" 
            desc="Errors surfaced immediately on blur — not after full submission" 
          />
          <ImplicationCard 
            title="Offline-first" 
            desc="Local queuing replaced paper backups — zero data loss on network drop" 
          />
          <ImplicationCard 
            title="Touch optimization" 
            desc="56px minimum targets designed for gloved hands — zero mis-taps" 
          />

        </div>
      </div>

    </div>
  );
};

function StickyNote({ text, type }: { text: string, type: 'thinks' | 'feels' | 'says' | 'does' }) {
  const styles = {
    thinks: 'bg-bg-elevated border-l-3 border-secondary',
    feels: 'bg-warning/10 border-l-3 border-warning',
    says: 'bg-info/10 border-l-3 border-info',
    does: 'bg-success/10 border-l-3 border-success'
  };

  return (
    <div className={`p-3 rounded-md shadow-sm ${styles[type]} w-full`}>
      <p className="font-sans text-[13px] text-text-primary leading-snug">{text}</p>
    </div>
  );
}

function ImplicationCard({ title, desc, highlight = false }: { title: string, desc: string, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-secondary/10 border-l-3 border-secondary' : 'bg-bg-surface border-border-subtle'}`}>
      <h4 className="font-sans font-bold text-[13px] text-text-primary mb-1">{title}</h4>
      <p className="font-sans text-[12px] text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
