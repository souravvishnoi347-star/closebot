// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'settings');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /bg-slate-900\/40/g, to: 'bg-white shadow-sm' },
  { from: /bg-slate-900\/60/g, to: 'bg-slate-50' },
  { from: /bg-slate-900/g, to: 'bg-white shadow-sm' },
  { from: /bg-slate-800/g, to: 'bg-slate-50' },
  { from: /border-slate-800/g, to: 'border-slate-200' },
  { from: /border-slate-700/g, to: 'border-slate-200' },
  { from: /text-slate-300/g, to: 'text-slate-600' },
  { from: /text-slate-400/g, to: 'text-slate-500' },
  { from: /text-white/g, to: 'text-slate-900' },
  { from: /placeholder:text-slate-500/g, to: 'placeholder:text-slate-400' },
  { from: /ring-offset-slate-900/g, to: 'ring-offset-white' },
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

// Also fix pipelines component
const pipelinesDir = path.join(__dirname, 'src', 'components', 'pipelines');
const pipelinesFiles = fs.readdirSync(pipelinesDir).filter(f => f.endsWith('.tsx'));
pipelinesFiles.forEach(file => {
  const filePath = path.join(pipelinesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated pipelines/${file}`);
  }
});
