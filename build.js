const fs = require('fs');

if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

fs.writeFileSync('build/index.html', 'Hello');
