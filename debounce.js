const debounce=(fn,wait)=>{
let timeoutId;

return (...args)=>{
clearTimeout(timeoutId)
   timeoutId = setTimeout(() => {
      fn(...args);
    }, wait);
}
}

function opDebounce(fn, wait, { leading = false } = {}) {
  let timeoutId 
let isCalled=false
  return function (...args) {

    const callNow = leading && !isCalled;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      isCalled = false;
    }, wait);

    if (callNow) {
      isCalled = true;
      fn(...args);
    }
  };
}


// function opDebounce(fn, wait, { leading = false } = {}) {
//   let timeoutId = null;
//   let isLeadingCalled = false;

//   return function (...args) {
//     const context = this;

//     const callNow = leading && !isLeadingCalled;

//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       isLeadingCalled = false;
//     }, wait);

//     if (callNow) {
//       isLeadingCalled = true;
//       fn.apply(context, args);
//     }
//   };
// }
// const setIntervalSync = (fn, delay, limit = 0) => new Promise(s => {
//   let run = true
//   let count = 1
//   const start = Date.now()
//   const loop = () => {
//     const tick = Date.now()
//     const elapsed = tick - start
//     if (elapsed > count * delay) {
//       fn()
//       count++
//     }
//     elapsed < limit
//       ? setTimeout(loop)
//       : s()
//   }
//   setTimeout(loop)
// })

// const add = (arr, el) => arr.push(el)

// const run = async (callback, { delay, count }) => {
//   const arr = []
//   await setIntervalSync(() => callback(arr, 1), delay, count * delay + 5)
//   return arr.length
// }

// // console.log(await run(debounce(add, 100), { delay: 50, count: 5 }), 0)


// console.log(await Promise.all([
//       run(opDebounce(add, 40), { delay: 20, count: 5 }),
//       run(opDebounce(add, 40), { delay: 20, count: 2 }),
//     ]),
//     [0, 0])