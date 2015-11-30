var EventEmitter2 = require('eventemitter2').EventEmitter2;
var emitter = new EventEmitter2({});

/*var emitter = new EventEmitter2({
  wildcard: true,
  delimiter: '::',
  newListener: false,
  maxListeners: 20
});*/

emitter.on('search', function(value1) {
  console.log('fff');
  console.log(value1);
});

emitter.on('*', function(value1) {
  console.log('fff');
  console.log(value1);
});
emitter.emit('search', 'ff');
emitter.on('*', function(value1) {
  console.log('fff');
  console.log(value1);
});
