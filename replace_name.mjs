import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(directoryPath);
let modifiedCount = 0;

for (const file of files) {
  if (file.match(/\.(tsx|ts|js|json|md)$/)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace exact case "Closebot" -> "Chatmagnet AI"
    content = content.replace(/Closebot/g, 'Chatmagnet AI');
    // Replace exact case "closebot" -> "chatmagnet" (for urls, emails, etc)
    content = content.replace(/closebot/g, 'chatmagnet');
    // Replace exact case "CLOSEBOT" -> "CHATMAGNET AI"
    content = content.replace(/CLOSEBOT/g, 'CHATMAGNET AI');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log(`Updated ${file}`);
    }
  }
}

console.log(`Replaced in ${modifiedCount} files.`);
