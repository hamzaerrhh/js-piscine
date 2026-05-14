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



function opThrottle(func, timer, option = {trailing:false,leading:false}) {
  let timeout;
  let trailing=option.trailing;
  let leading=option.leading;

  return (...args) => {
    if (!trailing && !leading) {
      return;
    }

    if (!timeout) {
      if (leading) {
        func(...args);
      }
      timeout = setTimeout(() =>
         {
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