


const newPromise = () => {
  return  new Promise((res, rej)=> {
        setTimeout(()=> {
            res( 3 + 2 )
        } ,100)
    })
}

const testFn = async () => {
    try {
    const newVar =  await newPromise()
    const res  = newVar
    console.log("new var", newVar)
    } catch (error) {
        
    }
} 
let data = []
const pageStart = 0
const pageEnd = 2

const testFn2 = () => {
   const data = [
  { name: "Ibas", age: 100 },
  {
    name: "doe",
    age: 36
  }
];
const data1 = [...data].sort((a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1));
const data2 = [...data].sort((a,b)=>(a.name < b.name ? -1 : 1))
console.log(data2)
console.log(data1)
}
console.log(testFn())
console.log(testFn2())