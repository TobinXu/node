// const EventEmitter = require('events').EventEmitter;
// const event = new EventEmitter();

const { set } = require("express/lib/application")

// // 触发key_event事件
// setTimeout(() => {
//   event.emit('key_event','参数1','参数2');
// }, 1000);

// // 响应key_event事件
// event.on('key_event', function(...args) {
//   console.log('key_event事件触发', args);
// });

// event.on('key_event', function(arg1, arg2) {
//   console.log('key_event事件触发2', arg1, arg2);
// });


// class EventEmitter {
//   constructor() {
//     this.events = {}
//   }

//   on(eventName, callback) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = []
//     }
//     this.events[eventName].push(callback)
//   }

//   emit(eventName, ...args) {
//     const eventCallbacks = this.events[eventName]
//     if (eventCallbacks) {
//       eventCallbacks.forEach(cb => {
//         cb.apply(null, args)
//       })
//     }
//   }

//   off(eventName, callback) {
//     const eventCallbacks = this.events[eventName]
//     if (eventCallbacks) {
//       if (callback) {
//         this.events[eventName] = eventCallbacks.filter(cb => cb !== callback)
//       } else {
//         delete this.events[eventName]
//       }
//     }
//   }
// }


class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  emit(eventName, ...args) {
    const eventCallbacks = this.events[eventName]
    if (eventCallbacks) {
      eventCallbacks.forEach((cb) => {
        cb.apply(null, args)
      })
    }
  }

  off(eventName, callback) {
    const eventCallbacks = this.events[eventName]
    if (eventCallbacks) {
      if (callback) {
        this.events[eventName] = eventCallbacks.filter(cb => cb !== callback)
      } else {
        delete ths.events[eventName]
      }
    }
  }
}

const emitter = new EventEmitter()

const callback = (name, age) => {
  console.log(`event事件触发了：${name} ${age}`)
}

// 添加监听
emitter.on('event', callback)

// 触发事件
emitter.emit('event', '小明', 18)

// 移除监听
setTimeout(() => {
  emitter.off('event', callback)
  console.log('移除event事件的监听')
  emitter.emit('event', '小红', 20)
}, 1000)