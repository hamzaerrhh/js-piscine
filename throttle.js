function throttle(func, wait) {
  let ready = true;

  return (...args) => {
    if (!ready) return;

    ready = false;
    func(...args);

    setTimeout(() => {
      ready = true;
    }, wait);
  };
}

function opThrottle(func, wait, { leading = false, trailing = false } = {}) {
  let timeout = null;
  let lastArgs = null;

  return (...args) => {
    lastArgs = args;

    const callNow = leading && !timeout;

    if (callNow) {
      func(...args);
    }

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;

        if (trailing && (!leading || lastArgs)) {
          func(...lastArgs);
        }

        lastArgs = null;
      }, wait);
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