// Are two strings anagrams of each other?

// O(n)
const anagramChecker = (string1, string2) => {
  if (string1.length !== string2.length) {
    console.log("Strings are of different length.")

    return false
  }

  if (string1.toLowerCase().split('').sort().join('') !== string2.toLowerCase().split('').sort().join('')) {
    console.log("Strings are not anagrams of each other.")

    return false
  }

  console.log("Strings are anagrams of each other.")
  
  return true
}

const runAnagramChecker = async rl => {
  const string1Answer = await rl.question("Enter first string: ")

  const string2Answer = await rl.question("Enter second string: ")

  anagramChecker(string1Answer, string2Answer)

  rl.close()
}

export default runAnagramChecker