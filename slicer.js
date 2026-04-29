
const slice =(str,indx,optIndx)=>{

   const start=normalizeIndex(str,indx)
   const  end = normalizeIndex(str,optIndx,true)
     let isArray =Array.isArray(str)
    //  console.log("s",start,end)
     let result
     isArray ? result=[] :result=""

      for (let i = start; i <= end ; i++) {
        if(isArray){
              result.push(str[i])
        }else{
               result += str[i];

        }
    }

    return result
    
}
const normalizeIndex = (arr, index, fromEnd = false) => {
    const len= arr.length
    
    if (index === undefined) {
        return fromEnd ? len - 1 : 0;
    }

    if (index < 0) {
        index = len + index;
    }


    if (fromEnd) {
        if (index >= len || index <0 ) return len - 1;
        return index;
    }

    if (index < 0) return 0;
    if (index > len) return len;

    return index;
};

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(slice(animals,0,2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(slice(animals,2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(slice(animals,1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(slice(animals,-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(slice(animals,2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(slice(animals,));
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
//-----------------test cases----------------//
// console.log(slice('abcdef', 2))// === 'cdef'
// console.log(slice('abcdef', 0, 2))// === 'ab'
console.log(slice('abcdef', 2)) //=== 'cdef'