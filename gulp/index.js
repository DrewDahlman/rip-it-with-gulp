let gulp  = require('gulp'),
		glob  = require('glob'),
		path  = require('path'),
		tasks = glob.sync(path.join(__dirname, './tasks/*.js')),
    args  = process.argv.slice(2);

// Check for production flags
process.env.NODE_ENV = args[1] === "-e" && args[2] === "production" ? 'production' : 'development';

// Glob and require all tasks
tasks.forEach( (task) => {
	require(task);
});
