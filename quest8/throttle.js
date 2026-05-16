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