function sumNumbers(...numbers){
    return numbers.reduce((a,b) => a+b)
  
  }
  const result = sumNumbers(1,2,3,4,5)
  console.log(result)