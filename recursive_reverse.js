const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter the array of chars\n`, (array) => {
    array = array.replace(/[\,\"\'\[\]]+/g,"").split("")
    reverse(array, 0, array.length-1)
    console.log(array)
    readline.close()
  })

function reverse(array, start, end) {
    if (start >= end) {
        return
    }
    var temp = array[start]
    array[start] = array[end]
    array[end] = temp
    reverse(array, start+1, end-1)
}