const slice = (data, start = 0, end = data.length) => {
    const len = data.length;

    if (start < 0) start = len + start;
    if (end < 0) end = len + end;

    if (start < 0) start = 0;
    if (end > len) end = len;

    // result type depends on input
    let result = Array.isArray(data) ? [] : "";

    for (let i = start; i < end; i++) {
        if (Array.isArray(data)) {
            result.push(data[i]);
        } else {
            result += data[i];
        }
    }

    return result;
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
console.log(slice('abcdef', 0, 2))// === 'ab'
console.log(slice('abcdef', 2)) //=== 'cdef'