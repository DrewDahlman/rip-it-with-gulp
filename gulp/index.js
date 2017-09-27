let gulp = require('gulp'),
		glob = require('glob'),
		path = require('path'),
		tasks = glob.sync(path.join(__dirname, './tasks/*.js')),
		hub_tasks = [];

// console.log(tasks)
// // Glob and require all tasks
tasks.forEach( (task) => {
	// hub_tasks.push(task.replace(__dirname, '.'));
	require(task);
});

// let hub = require('gulp-hub')(['tasks/*.js']);
// gulp.registry(hub);

// require('gulp-load-tasks')('gulp/tasks');

