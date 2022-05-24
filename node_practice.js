//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers,tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  //check one: any pending setTimeout, setInterval, setImmediate?
  //check two: any pending OS tasks (server listening to port)
  //check three: any pending long running operations (fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

//Entire body executes in one 'tick'
while (shouldContinue()) {
  //node looks at pendingTimers and sees if any functions are ready to be called (setTimeout, setInterval)
  //node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  //node pause execution. continue when... (- a new pendingOSTask is done, a new pendingOperation is done, a timer is about to complete )
  //look at pendingTimers. call any setImmediate
  //handle any "close" events
}

//exit back to terminal
