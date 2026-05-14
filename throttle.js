
function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    }
  };
}

function opThrottle(fn, delay,{trailing=false , leading=false}) {
  let lastTime = 0;
  let isCalled=false

  return function (...args) {
    const now = Date.now();

   if(!isCalled && leading){
      let isCalled=true
      fn(...args)
   }

    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    } else if (trailing){
      fn(...args);
    }

  };
}


// const add = (arr, el) =>  arr?.push(el)

// const run = (callback, callLimit, nbr) =>
//   new Promise((r) => {
//     let arr = []
//     let inter = setInterval(() => callback(arr, 1), callLimit)
//     setTimeout(() => {
//       clearInterval(inter)
//       r(arr.length)
//     }, callLimit * nbr)
//   })

// console.log((opThrottle(add, 26, { trailing: true }), 16, 4), 1)
// //   console.log(await run(throttle(add, 26), 16, 4), 2)