import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import algoOptions from './algoOptions.js'

const rl = readline.createInterface({ input, output })

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
