// Are two strings anagrams of each other?

// O(n)
const sumZero = stringAnswer => {
  const sortedArray = stringAnswer.split(',').map(s => parseInt(s)).sort((a, b) => a - b)

  let leftIntIndex = 0
  let rightIntIndex = sortedArray.length - 1

  while (leftIntIndex < rightIntIndex) {
    let sum = sortedArray[leftIntIndex] + sortedArray[rightIntIndex]

    if (sum === 0) {
      console.log([sortedArray[leftIntIndex], sortedArray[rightIntIndex]])

      return [sortedArray[leftIntIndex], sortedArray[rightIntIndex]]
    } else if (sum > 0) {
      rightIntIndex--
    } else {
      leftIntIndex++
    }
  }

  console.log("No integers in this array sum to 0.")
}

const runSumZero = async rl => {
  const stringAnswer = await rl.question("Enter comma-separated negative and positive integers: ")

  sumZero(stringAnswer)

  rl.close()
}

export default runSumZero