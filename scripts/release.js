const { execSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');

function run(cmd) {
    console.log(`> ${cmd}`);
    execSync(cmd, { cwd: root, stdio: 'inherit' });
}

// 1. Bump patch version
run('npm version patch --no-git-tag-version');

// 2. Read the new version
const pkg = require(path.join(root, 'package.json'));
const version = pkg.version;
console.log(`\nVersion bumped to ${version}\n`);

// 3. Build the library
run('npm run build');

// 4. Publish to npm
run('npm publish ./dist/ui-kit --access public');

// 5. Commit and push
run('git add -A');
run(`git commit -m "release: v${version}"`);
run('git push');

console.log(`\nReleased v${version} successfully!`);
