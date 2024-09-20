const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i <= 10; i++) {
  const arr = []
  for (let x = 1; x <= i; x++) {
    arr.push(i)
  }
  nestedOne.push(arr)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  const arr = []
  for (let x = 1; x <= i; x++) {
    arr.unshift(x)
  }
  nestedTwo.push(arr)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i <= 10; i++) {
  const arr = []
  for (let y = 1; y <= i; y++) {
    const arrDeeper = []

    for (let z = 1; z <= y; z++) {
      arrDeeper.push(i)
    }

    arr.push(arrDeeper)
  }

  deepOne.push(arr)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) {
  const arr = []

  for (let y = 1; y <= i; y++) {
    const arrDeeper = []

    for (let z = 1; z <= y; z++) {
      arrDeeper.push(z)
    }

    arr.push(arrDeeper)
  }

  deepTwo.push(arr)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 1; i <= 10; i++) {
  const arr = []

  for (let y = 1; y <= i; y++) {
    const arrDeeper = []
    const sumArr = []

    for (let z = 1; z <= y; z++) {
      sumArr.push(z * z)
    }

    let sum = 0
    for (let b = 0; b < sumArr.length; b++) {
      sum += sumArr[b]
    }

    arrDeeper.push(sum / sumArr.length)
    arr.push(arrDeeper)
  }

  deepThree.push(arr)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
