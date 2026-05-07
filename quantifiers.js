const every=(arr,f)=>{
    for (let val of arr){
        if(!f(val)) return false
    }
    return true
}
const some=(arr,f)=>{
    for (let val of arr){
        if(f(val)) return true
    }
    return false
}

const none=(arr,f)=>{
    return !some(arr,f)
}