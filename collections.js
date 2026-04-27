const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

function arrToSet(arr){
    let set =new Set()
    for (let value of arr){
set.add(value)
    }
return set
}
function arrToStr(arr){
   return arr.join('')
}
function setToArr(set){
    let arr = new Array()
    for (let value of set){
        arr.push(value)
    }
    return arr
}
function setToStr(set){
    let s =""
    for (let value of set){
        s+=String(value)
    }
    return s

}
function strToArr(str){
    let arr = new Array()

      for (let value of str){
        arr.push(value)
    }
    return arr
}
function strToSet(str){
      let set = new Set()

      for (let value of str){
        set.add(value)
    }
    return set

}

function mapToObj(map) {
    let obj = {};

    for (let [key, value] of map) {
        obj[key] = value;
    }

    return obj;
}

function objToArr(obj){
        let arr = new Array();

    for (let value of Object.values(obj)) {
        arr.push(value)
    }
    return arr;
}

function objToMap(obj){
    let map = new Map()
     for (let [key,value] of Object.entries(obj)) {
        map.set(key,value)
    }
    return map;
}
function arrToObj(arr){
        let obj = {}
        let i=0
     for (let value of arr) {
        obj[i]=value
        i++
    }
    return obj;
}
function strToObj(str){
        let obj = {}
        let i=0
     for (let value of str) {
        obj[i]=value
        i++
    }
    return obj;
}
// console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
// console.log(arrToStr(arr)) // -> '1213'
// console.log(setToArr(set)) // -> [1, 2, 3]
// console.log(setToStr(set)) // -> '123'
// console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
// console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }

// console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// console.log(objToArr(obj)) // -> [45, 75, 24]
// console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

function superTypeOf(value) {
  const type = Object.prototype.toString
    .call(value)
    .slice(8, -1);

  if (type === "Null") return "null";
  if (type === "Undefined") return "undefined";

  return type;
}




// console.log(superTypeOf(new Map()));      // "Map"
// console.log(superTypeOf(new Set()));      // "Set"
// console.log(superTypeOf({}));             // "Object"
// console.log(superTypeOf("hi"));           // "String"
// console.log(superTypeOf(666));            // "Number"
// console.log(superTypeOf(NaN));            // "Number"
// console.log(superTypeOf([]));             // "Array"
// console.log(superTypeOf(null));           // "null"
// console.log(superTypeOf(undefined));      // "undefined"
// console.log(superTypeOf(function () {})); // "Function"