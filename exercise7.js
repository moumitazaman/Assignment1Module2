const address= {
        street: "123 Main St",
       // city: "NY",
        country: "USA"
     }
const getAddressCity =(obj) =>{
  return obj?.city ?? "Unknown"
 
}
const result =getAddressCity(address)
console.log(result)