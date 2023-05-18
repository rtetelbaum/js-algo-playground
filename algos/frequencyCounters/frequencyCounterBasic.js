// Write a function which accepts two array and returns true if every value in the first 
// array has its corresponding value squared in the second array, and the frequency of values must be the same.

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
  if (array1.length !== array2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let value of array1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
  }

  for (let value of array2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
  }

  return true
}