const cutFirst=(str)=>{
    return str.slice(2)

}
const cutLast=(str)=>{
    return str.slice(0,-2)

}
const cutFirstLast=(str)=>{
    return str.slice(2,-2)

}
const keepFirst=(str)=>{
    return str.slice(0,2)

}
const keepLast=(str)=>{
 return str.slice(-2)


}
const keepFirstLast=(str)=>{
    return keepFirst(str)+keepLast(str)

}

// console.log(cutFirst("hello world"))
// console.log(cutLast("hello world"))
// console.log(cutFirstLast("hello world"))
// console.log(keepFirst("hello world"))
// console.log(keepLast("hello world"))
// console.log(keepFirstLast("hello world"))