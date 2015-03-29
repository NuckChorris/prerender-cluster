var prerender = require('prerender');
var log = require('./log.js');

var server = prerender({
  port: 3000,
  processNum: 0,
  engine: "jsdom",
  contentReadyDelay: 0,
  initializeTimeout: 25000,
  renderTimeout: 15000,
  maxRequestsPerRenderer: 200,
  exitAfterMaxRequests: true,
  gracefulExit: true,
  maxQueueSize: 50,
  appUrl: "https://hummingbird.me/",
  serveFiles: false,
  serveFilesLog: false,
  filesMatch: /\.(?:css|js|jpg|png|gif|ico|svg|woff|ttf|swf|map)(?:\?|$)/i,
  ignoreAssets: new RegExp([
    'google-analytics.com', 'fonts.googleapis.com', 'platform.twitter.com',
    'connect.facebook.net', 'apis.google.com', 'ajax.cloudflare.com',
    'cdn.segment.io'
  ].join('|').replace('.', '\\.') + '\\.css(?:\\?|$)'),
  logging: {
    level: "debug",
    timestamp: true,
    format: true
  },
  plugins: [
    "removeScriptTags",
    "httpHeaders"
  ]
});
log('Worker[%d] Started!', process.pid);
server.start();
