const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.match(/Chatmagnet|chatmagnet|CHATMAGNET/i)) {
    content = content
      .replace(/Chatmagnet AI/g, 'Voltchat AI')
      .replace(/Chatmagnet/g, 'Voltchat')
      .replace(/chatmagnet/g, 'voltchat')
      .replace(/CHATMAGNET/g, 'VOLTCHAT');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md') || fullPath.endsWith('.json') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(path.join(__dirname, 'src'));
replaceInFile(path.join(__dirname, 'package.json'));
replaceInFile(path.join(__dirname, 'package-lock.json'));
replaceInFile(path.join(__dirname, 'README.md'));
