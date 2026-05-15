const all =async (obj)=>{
    let result={}
    for (let [key,value] of Object.entries(obj)){
        result[key] = await value
    }
    return result
}