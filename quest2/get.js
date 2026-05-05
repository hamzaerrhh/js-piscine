const get = (src, path) =>
  path.split(".").reduce((obj, key) => obj?.[key], src);

// const path = "nested.test.val";
// console.log(path.split("."));
// console.log(get(src, path)); // -> 'peekaboo'

str = ["ki", "ddd", "ddddd"].reduce((obj, elem) => obj + elem, "ss");
console.log(str);

[];
