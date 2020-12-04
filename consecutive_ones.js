const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter the binary array\n`, (array) => {
    array = array.replace(/[\,]+/g,"")
    var sliceArray = array.split("0")
    sliceArray.sort(function(a, b) {
        return b.length - a.length
    })
    console.log(sliceArray[0].length)
    readline.close()
  })

