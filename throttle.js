function throttle(func, timer) {
  let flage = true;
  return (...args) => {
    if (flage) {
      func(...args);
      flage = false;
    }
    setTimeout(() => {
      flage = true;
    }, timer);
  };
}

function opThrottle(func, timer, {leading=false,trailing=false}) {
  let timeout;
  return (...args) => {

    if (!trailing && !leading) {
      return;
    }

    if (!timeout) {

      if (leading) {
        func(...args);
      }
      timeout = setTimeout(() => {
        timeout = false;
        if (!leading) {
          func(...args);
        }
      }, timer);
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