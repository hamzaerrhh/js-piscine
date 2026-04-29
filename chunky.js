const chunk = (arr, n) => {
  let chunks = [];
  let chun = [];
  let nbr = 0;
  for (let val of arr) {
    if (nbr % n == 0 && nbr != 0) {
      console.log("push", chun);
      chunks.push(chun);
      chun = [];
      nbr = 0;
    }
    nbr++;
    chun.push(val);
  }

  if (chunk != []) {
    chunks.push(chun);
  }
  return chunks;
};

// const elements = [4, 5, 9, 8, 7, 1, 2, 3, 6, 9, 5];
// console.log(chunk(elements, 2));
