// Calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(stringAnswer, n) {
  const array = stringAnswer.split(',').map(s => parseInt(s))

  if (n > array.length) {
    console.log(`You specified ${n} elements which is longer than the length of the array.`)

    return null
  }

  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < n; i++) {
    maxSum += array[i]
  }

  tempSum = maxSum

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  console.log("Max sum: ", maxSum)

  return maxSum
}

const runMaxSubarraySum = async rl => {
  const integersAnswer = await rl.question("Enter comma-separated integers: ")
  const elementsAnswer = await rl.question("Enter conescutive elements: ")

  maxSubarraySum(integersAnswer, elementsAnswer)

  rl.close()
}

export default runMaxSubarraySum