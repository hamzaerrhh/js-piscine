const escapeStr="`, \, \\ /, \" and '."
const arr =[4,'2']
const obj={
 str :"1",
 num : 14,
 bool :true,
 undef : undefined

}
const nested={
    arr:[4,undefined,'2'],
    obj:{
         str :"1",
        num : 14,
     bool :true,
        
    }
}
Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
Object.freeze(obj)
Object.freeze(arr);
// console.log(escapeStr)
// console.log(arr)
// console.log(obj)
// console.log(nested)