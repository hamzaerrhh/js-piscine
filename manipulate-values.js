const filterValues=(obj,callBack)=>{
    let sol={}
    for(let [key,val] of Object.entries(obj)){
        if(callBack(val)){
            sol[key]=val
        }
    }
    return sol
}
const mapValues=(obj,callBack)=>{
    let sol={}
    for(let [key,val] of Object.entries(obj)){
            sol[key]=  callBack(val)
    }
    return sol
}
const reduceValues=(obj,calback,acc)=>{
    const values=Object.values(obj)
    let sol=acc ? acc : values[0]
    let i=acc ? 0:1

    for ( i;i<values.length;i++){
   sol=calback(values[i],sol)
    }
return sol
    
}
