
import runFrequencyCounterBasic from './algos/frequencyCounters/frequencyCounterBasic.js'
import runAnagramChecker from './algos/frequencyCounters/anagramChecker.js'
import runSumZero from './algos/multiplePointers/sumZero.js'
import runCountUniqueValues from './algos/multiplePointers/countUniqueValues.js'
import runMaxSubarraySum from './algos/slidingWindow/maxSubarraySum.js'

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
  {
    id: "3",
    description: "Sum Zero: first two numbers in array that add up to 0.",
    callFunction: runSumZero
  },
  {
    id: "4",
    description: "Count unique values: count the number of unique values in an array.",
    callFunction: runCountUniqueValues
  },
  {
    id: "5",
    description: "Sum Subarray: calculate the maximum sum of n consecutive elements in the array.",
    callFunction: runMaxSubarraySum
  },
]

export default algoOptions