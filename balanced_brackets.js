const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter the brackets\n`, (str) => {
    str = str.replace(/[\ ]+/g,"")
    var stack = []
    var opening = ["[", "(", "{"]
    var closing = ["]", ")", "}"]
    var balanced = true
    for (var char of str) {
        if (opening.includes(char)) {
            stack.push(closing[opening.findIndex(function (bracket) {return bracket == char})])
        } else {
            if (char != stack[stack.length-1]) {
                balanced = false
                break
            }
            stack.pop()
        }
    }
    if (!balanced) {
        console.log("NO")
    } else if (stack.length > 0) {
        console.log("NO")
    } else {
        console.log("YES")
    }
    readline.close()
  })
