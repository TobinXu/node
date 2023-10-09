console.log(new Date().getSeconds())
setTimeout(() => {
  console.log(new Date().getSeconds())
  console.log('setTimeout')
}, 1000);

function bomb() {
  this.message = "bomb!"
}

bomb.prototype.explode = function() {
  console.log(this.message)
}

var b = new bomb()

const timeId = setTimeout(b.explode.bind(b), 1000);

clearTimeout(timeId)