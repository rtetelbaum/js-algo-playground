const frequencyCounterBasic = require('./algos/frequencyCounters/frequencyCounterBasic')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(
  "Algo Options: ",
  "\n",
  "1: frequencyCounterBasic"
)

readline.question("Which algo would you like to play with? ", readlineAnswer => {
  const algoChoice = readlineAnswer

  switch (algoChoice) {
    case "1":
      console.log(algoChoice)
      break
    default:
      console.log("No such option.")
  }

  readline.close()
})

readline.question("Enter values for array 1 of 2 seperated by commas: ", readlineAnswer => {
  const array1 = readlineAnswer.split(',')
  console.log(array1)
  readline.close()
})
