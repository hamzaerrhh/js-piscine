const escapeStr="`, \, \\ /, \" and '."
const arr =[4,'2']
const obj={
 str :"1",
 num : 14,
 bool :true,
 undef : undefined

}
const nested={
    arr,
    obj
}
Object.freeze(nested)
Object.freeze(obj)

// console.log(escapeStr)
// console.log(arr)
// console.log(obj)
// console.log(nested)