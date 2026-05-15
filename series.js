const series=async (arr)=>{
 let result=[]
    for (let value of arr){
        let res = await value()
        result.push(res)
    }
    return result
}




// console.log(await series([() => 1, () => true]), [1, true])