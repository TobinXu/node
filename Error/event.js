const Event_Emitter = require('events').EventEmitter;
const ee = new Event_Emitter();
ee.on('error', function(err) {
    console.log('Error:', err.message);
});
ee.emit('error', new Error('this is a error'));