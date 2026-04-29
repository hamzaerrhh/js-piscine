const get = (src, path) =>
  path.split(".").reduce((obj, key) => obj?.[key], src);

// const src = {
//   nested: {
//     key: "peekaboo",
//     test: {
//       val: "4444",
//     },
//   },
// };
// const path = "nested.test.val";
// console.log(path.split("."));
// console.log(get(src, path)); // -> 'peekaboo'
