var path = require('path');

process.argv.push('--exclude', 'node_modules', '--config', path.resolve('node_modules', path.basename(__dirname), 'jshintrc'));
process.argv.push(path.resolve(__dirname, '..', '..'));
require('jshint/bin/jshint');
