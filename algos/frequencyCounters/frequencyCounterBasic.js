// Write a function which accepts two arrays and returns true if every integer value in the first 
// array has its corresponding value squared in the second array, and the frequency of values in each array must be the same.

// // Inefficient O(n**2)
// const frequencyCounterBasic = (array1, array2) => {
//   let conditionsMet = false

//   array1.forEach(i => {
//     const squared = i ** 2

//     if (array2.includes(squared)) {
//       conditionsMet = true

//       array2.splice(array2.IndexOf(squared), 1)
//     } else {
//       conditionsMet = false
//     }
//   })

//   return conditionsMet
// }

// Effecient O(n)
const frequencyCounterBasic = (array1, array2) => {
  if (array1.length !== array2.length) {
    console.log("Arrays are of different length.")
    
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let value of array1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
  }

  for (let value of array2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log(`${key} not in second array.`)
      
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log(`Frequencies of ${key} do not match.`)  
      
      return false
    }
  }

  console.log("Every value in the first array has its corresponding value squared in the second array, and the frequency of values is the same.")
  return true
}

const runFrequencyCounterBasic = async rl => {
  const array1Answer = await rl.question("Enter integer values for array 1 of 2 seperated by commas: ")
  
  const array2Answer = await rl.question("Enter integer values for array 2 of 2 seperated by commas: ")

  frequencyCounterBasic(array1Answer.split(","), array2Answer.split(","))
}

export default runFrequencyCounterBasic