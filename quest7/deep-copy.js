const deepCopy=(value)=>{
   const type= Object.prototype.toString.call(value).split(" ")[1].slice(0,-1) 
    if(type==="Object"){
  let copy={}
    for (let [key,val] of Object.entries(value)){
        copy[key]=deepCopy(val)
    }
    return copy   
 }
    
    if(Array.isArray(value)){
        return value.map(deepCopy)
    }
  return value
}
