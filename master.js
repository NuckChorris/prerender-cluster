var cluster = require('cluster');
var log = require('./log.js');
var cpus = require('os').cpus().length;

for (var i = 0; i < cpus; i++) {
  cluster.fork();
}

cluster.on('exit', function(worker, code, signal) {
  log('Worker[%d] exited with code %s on %s', worker.process.pid, code, signal);
  cluster.fork();
});

process.on('exit', function(code, signal) {
  log('Master exiting with code %s on %s', worker.process.pid, code, signal);
});
