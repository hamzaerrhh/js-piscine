const pick=(obj,arr)=>{
    let newObj={}
    if (typeof arr == "string") arr=[arr]

    for (let key of Object.keys(obj)){
        if (arr.some(val=>val==key)){
            newObj[key]=obj[key]
        }
    }
    return newObj
}
const omit=(obj,arr)=>{
 let newObj={}
    if (typeof arr == "string") arr=[arr]

    for (let key of Object.keys(obj)){
        if (!arr.some(val=>val==key)){
            newObj[key]=obj[key]
        }
    }
    return newObj
}