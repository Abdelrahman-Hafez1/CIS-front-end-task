x={ a: 1, b: 2 };
const toArray=(obj=Object)=>{
    return Object.keys(obj).map(key=>{
        return [key,obj[key]]  
    })
}
console.log(toArray(x))