function getLargestNumber(a,b){
  return a>b ? a:b || b>a ? b :a
}

const result = getLargestNumber(10, 5)
console.log(result)