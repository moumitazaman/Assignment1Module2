const obj = { name: "John", age: 30, city: "New York" }
const arr = [10, 20, 30, 40]

function destructureExample(obj, arr) {
  const { name, age} = obj
  const [index0, , index2] = arr

  return { name, age }
}

const result = destructureExample(obj, arr)
console.log(result)