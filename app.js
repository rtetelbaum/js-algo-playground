import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import runFrequencyCounterBasic from './algos/frequencyCounters/frequencyCounterBasic.js'
import runAnagramChecker from './algos/frequencyCounters/anagramChecker.js'

const rl = readline.createInterface({ input, output })

const algoOptions = [
  {
    id: "1",
    description: "Frequency Counter Basic: is every integer in one array squared in another array, with matching integer frequency count?",
    callFunction: runFrequencyCounterBasic
  },
  {
    id: "2",
    description: "Anagram Checker: are two strings anagrams of each other?",
    callFunction: runAnagramChecker
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
