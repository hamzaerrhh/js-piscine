
const fold=(arr,f,acc)=>{
    let sol = acc
    for (let val of arr){
        sol=f(sol,val) 
    }

return sol
}

const foldRight=(arr,f,acc)=>{
    let sol = acc
    for (let i=arr.length -1;i>=0;i--){
        sol=f(sol,arr[i]) 
    }

return sol
}
const reduce=(arr,f,acc=arr[0])=>{
    if(arr.length<1){
        return "error"
    }
    let sol = acc
      for (let i=1;i<arr.length;i++){
        sol=f(sol,arr[i]) 
    }
    return sol

}
const reduceRight=(arr,f,acc=arr[arr.length-1])=>{
    if(arr.length<1){
        return "error"
    }
    let sol = acc
      for (let i=arr.length-2;i>=0;i--){
        sol=f(sol,arr[i]) 
    }
    return sol

}
