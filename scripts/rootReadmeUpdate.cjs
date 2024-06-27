const fs = require('fs');
const path = require('path');

const packageToUpdate = process.argv[2];

if (!packageToUpdate) {
  console.error('⚠️ Please provide a package name as an argument.');
  process.exit(1);
}

const readmePath = path.join(__dirname, '../README.md');
const packageJsonPath = path.join(__dirname, `../packages/${packageToUpdate}/package.json`);

if (!fs.existsSync(packageJsonPath)) {
  console.error(`⚠️ Package ${packageToUpdate} does not exist.`);
  process.exit(1);
}

let readmeContent = fs.readFileSync(readmePath, 'utf8');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

const regex = new RegExp(`(\\| \`@junhobaik/${packageToUpdate}\`\\s+\\| )(\\d+\\.\\d+\\.\\d+)`, 'g');
readmeContent = readmeContent.replace(regex, `$1${version}`);

fs.writeFileSync(readmePath, readmeContent);

console.log(`📄 README.md has been updated with the latest version of @junhobaik/${packageToUpdate}.`);
