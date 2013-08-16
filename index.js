var path = require('path');

process.argv.push('--exclude', 'node_modules', '--config', path.resolve('node_modules', path.basename(__dirname), 'jshintrc'));
console.log(process.argv);
console.log(require('jshint/bin/jshint'));
