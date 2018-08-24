const fs = require('fs');
const path = require('path');

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
}

const packagePath = path.join(__dirname, 'package.json');
const packageJSON = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

console.log('📝 Extending package.json...');

// Inject config in package.json
const scripts = require('./scripts.json');
const extension = require('./extension.json');
const updatedPackageJSON = Object.assign({}, packageJSON, scripts, extension);
fs.writeFileSync(packagePath, JSON.stringify(updatedPackageJSON, null, 2));

// Remove files
deleteFile('LICENSE');
deleteFile('README.md');
deleteFile('devDependencies.json');
deleteFile('extension.json');
deleteFile('scripts.json');
deleteFile('rn-cli.config.js');
deleteFile('App.js');

console.log(`✅ Finished.`);
