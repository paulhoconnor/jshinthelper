var path = require('path');

process.argv.push('--exclude', 'node_modules', '--config', path.resolve('node_modules', path.basename(__dirname), 'jshintrc'));

if (process.argv.indexOf('.') === -1) {
    // push directory if jshint isn't run with '.'
    process.argv.push(path.resolve(__dirname, '..', '..'));
}

require('jshint/bin/jshint');
