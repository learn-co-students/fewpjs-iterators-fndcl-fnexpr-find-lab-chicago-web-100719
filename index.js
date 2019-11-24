const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let res = record.find(record => record.result === 'W')


  return res ? res.year : undefined
}