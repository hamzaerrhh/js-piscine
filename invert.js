const invert=(obj)=>{
 const inverted={}
 for (let [key,val] of Object.entries(obj)){
    inverted[val]=key
 }
 return inverted
}