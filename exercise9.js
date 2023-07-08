function filterEvenNumbers(arr){
  return arr.filter((n) => ((n % 2) == 0) )

}

const result = filterEvenNumbers([1, 2, 3, 4, 5])

console.log(result)