module.exports = function () {
  var args = Array.prototype.slice.apply(arguments);
  var msg = args.shift();
  args.unshift('%s ' + msg, (new Date()).toISOString());
  console.log.apply(console, args);
};
