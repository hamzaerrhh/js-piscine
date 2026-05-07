const filter=(arr,f)=>{
    let sol=[]
    for (let i=0;i<arr.length;i++){

        if(f(arr[i],i,arr)) {
            sol.push(arr[i])}
    }
return sol
}
const reject=(arr,f)=>{
    let sol=[]
    for (let i=0;i<arr.length;i++){
        if(!f(arr[i],i,arr)) sol.push(arr[i])
    }
return sol
}
const partition=(arr,f)=>{
//  console.log("reject",reject(arr,f))
//   console.log("filter",filter(arr,f))

return [filter(arr,f),reject(arr,f)]
}
