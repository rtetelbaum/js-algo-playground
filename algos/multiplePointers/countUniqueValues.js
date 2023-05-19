// Are two strings anagrams of each other?

// O(n)
const countUniqueValues = stringAnswer => {
  const sortedArray = stringAnswer.split(',').map(s => parseInt(s)).sort((a, b) => a - b)

  let leftIndex = 0
  let rightIndex = 1

  while (leftIndex < rightIndex && rightIndex <= sortedArray.length - 1) {
    if (sortedArray[leftIndex] === sortedArray[rightIndex]) {
      rightIndex++
    } else {
      leftIndex++
      sortedArray[leftIndex] = sortedArray[rightIndex]
      rightIndex++
    }
  }

  console.log("Count of unique integers: ", stringAnswer.length > 0 ? leftIndex + 1 : leftIndex)

  return stringAnswer.length > 0 ? leftIndex + 1 : leftIndex
}

const runCountUniqueValues = async rl => {
  const stringAnswer = await rl.question("Enter comma-separated integers: ")

  countUniqueValues(stringAnswer)

  rl.close()
}

export default runCountUniqueValues