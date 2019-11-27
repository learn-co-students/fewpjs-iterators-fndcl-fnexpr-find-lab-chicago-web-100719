const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(winArr){
  const foundWin = winArr.find(winObj => winObj.result === "W" )
  return foundWin ? foundWin.year : undefined
}
