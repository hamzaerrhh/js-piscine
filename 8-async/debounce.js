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
