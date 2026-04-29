const reverse = (arr) => {
  const isArr = Array.isArray(arr);

  let reversed = isArr ? [] : "";
  for (let i = arr.length - 1; i >= 0; i--) {
    isArr ? reversed.push(arr[i]) : (reversed += arr[i]);
  }
  return reversed;
};
