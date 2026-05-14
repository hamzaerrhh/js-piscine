const retry=(count,callback)=>{
    let countRetry=0
    return async (...args)=>{
while(countRetry<=count){
    try{
        countRetry++
         return   await callback(...args)

    }catch(err){
        if(countRetry==count){
            throw err
        }
    }
}
    }
}