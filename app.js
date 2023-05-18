import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import runFrequencyCounterBasic from './algos/frequencyCounters/frequencyCounterBasic.js'

const rl = readline.createInterface({ input, output })

const algoOptions = [
  {
    id: "1",
    description: "Frequency Counter Basic: accepts two arrays and returns true if every integer value in the first array has its corresponding value squared in the second array, and the frequency of values in each array must be the same.",
    callFunction: runFrequencyCounterBasic
  },
  {
    id: "2",
    description: "Frequency Counter Basic",
    callFunction: runFrequencyCounterBasic
  },
]

console.log("\n")
console.log("Algo Options: ")
algoOptions.map(o => console.log(`${o.id}: ${o.description}`))
console.log("\n")

const algoOptionAnswer = await rl.question("Which algo would you like to play with? ")

if (algoOptions[algoOptionAnswer - 1]) {
  algoOptions[algoOptionAnswer - 1].callFunction(rl)
} else {
  console.log("No such option.")
  rl.close()
}
