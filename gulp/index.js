let glob = require('glob'),
    tasks = glob.sync('tasks/*.js');

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
