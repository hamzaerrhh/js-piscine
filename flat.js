function flat(arr, depth = 1) {
  if (depth < 1) return arr;

  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

const arr1 = [1, 2, [3, 4], [4, [5, 1, 2, [5, 5]]]];
console.log(flat(arr1));
