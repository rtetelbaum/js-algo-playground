// Write a function which accepts two array and returns true if every value in the first 
// array has its corresponding value squared in the second array, and the frequency of values must be the same.

export const frequencyCounterBasic = (array1, array2) => {
  let conditionsMet = false

  array1.forEach(i => {
    const squared = i * i
    
    if (array2.includes(squared)) {
      conditionsMet = true

      array2.splice(array2.IndexOf(squared), 1)
    }
  })

  return conditionsMet
}