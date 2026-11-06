import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace large stat numbers text color
  // "60+", "200+", "43%", "62%", "91%", "5,000+", "150+", "8", "12"
  content = content.replace(/text-accent-primary( leading-none mb-4">43%)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-4">62%)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-4">91%)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-4">5,000\+)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-2">60\+)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-2">200\+)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-2">8)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none mb-2">12)/g, 'text-white$1');
  content = content.replace(/text-accent-primary( leading-none">8)/g, 'text-white$1');

  // Section label text
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">01 — Research & Discovery)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">02 — Before & After)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">03 — Outcomes & Impact)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">04 — Boeing Digital Design Language)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.12em\] mb-2 font-semibold">06 — USER PERSONAS)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">07 — WORKFLOW DIAGRAM)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( tracking-\[0\.1em\] mb-2 font-semibold">08 — EMPATHY MAP)/g, 'text-primary$1');

  // Link text
  content = content.replace(/text-accent-primary( font-medium flex items-center gap-1">View Task)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( font-medium">View All)/g, 'text-primary$1');
  content = content.replace(/text-accent-primary( font-medium hover:underline">Enter WO# manually)/g, 'text-primary$1');

  // Auto-filled / Auto-assigned badges
  content = content.replace(/bg-accent-dim text-accent-primary( font-mono font-medium text-\[11px\] flex items-center">Auto-filled)/g, 'bg-sky-100 text-sky-600$1');
  content = content.replace(/bg-accent-dim text-accent-primary( font-sans font-medium text-\[11px\] flex items-center">Auto-assigned)/g, 'bg-sky-100 text-sky-600$1');

  // Other text-accent-primary replacements to text-primary
  // Be careful with this, let's just do a blanket replacement for text-accent-primary to text-primary
  // Wait, the rule says:
  // "Replace ALL existing blue/accent variables at root level"
  // "Sky scale (#009BDF base) = PRIMARY scale (Text, Labels, Interactive, Info)"
  // "Navy scale (#0033A0 base) = SECONDARY/STRUCTURAL scale (Button fills, borders, active backgrounds)"
  // So text-accent-primary -> text-primary
  // bg-accent-primary -> bg-secondary
  // border-accent-primary -> border-secondary
  // hover:bg-accent-hover -> hover:bg-secondary-hover
  // active:bg-accent-dim -> active:bg-secondary-pressed
  // bg-accent-dim -> bg-sky-100 (for badges) or bg-secondary/10 (for backgrounds)
  
  content = content.replace(/text-accent-primary/g, 'text-primary');
  content = content.replace(/bg-accent-primary/g, 'bg-secondary');
  content = content.replace(/border-accent-primary/g, 'border-secondary');
  content = content.replace(/hover:bg-accent-hover/g, 'hover:bg-secondary-hover');
  content = content.replace(/fill-accent-primary/g, 'fill-primary');
  content = content.replace(/ring-accent-primary/g, 'ring-secondary');
  content = content.replace(/shadow-accent-primary/g, 'shadow-secondary');

  // For bg-accent-dim, let's replace it with bg-sky-100
  content = content.replace(/bg-accent-dim/g, 'bg-sky-100');
  content = content.replace(/border-accent-dim/g, 'border-sky-300');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
