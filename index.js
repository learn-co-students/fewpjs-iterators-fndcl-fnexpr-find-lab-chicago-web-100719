const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objectArray) {
  let win
  win = objectArray.find( object => object.result === 'W' )
  debugger;
  if (win) {
    return win.year;
  } else {
    return win;
  }
    
    
}