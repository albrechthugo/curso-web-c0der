const pares = [2, 4, 8]
const impares = [1, 3, 5]

const nums = pares.concat(impares)
nums.sort((a, b) => a - b )
console.log(nums)
