const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(
  "Algo Options: ",
  "\n",
  "1: frequencyCounterBasic"
)

var algoChoice

readline.question(`Which algo would you like to play with? `, readlineAnswer => {
  algoChoice = readlineAnswer

  readline.close()
})

switch (algoChoice) {
  case 1:
    console.log("You chose 1")
    break
  default:
    console.log("No such option.")
}