function flat(arr, depth = 1) {
  if (depth < 1) return arr;

  const res = [];

  for (let a of arr) {
    if (Array.isArray(a)) {
      res.push(...flat(a, depth - 1));
    } else {
      res.push(a);
    }
  }
  return res;
}



