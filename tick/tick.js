function makeLoad(){
	for(var i=0; i<100000; i++);
}

function logSomeThing(){
	console.log("something");
}

setInterval(makeLoad,2000);
setInterval(logSomeThing,0);