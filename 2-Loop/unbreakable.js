const join = (arr, sep = ",") => {
  let sol = "";
  for (let i = 0; i < arr.length; i++) {
    sol += arr[i];
    if (i != arr.length - 1) {
      sol += sep;
    }
  }
  return sol;
};
const split = (arr, sep) => {
  var sol = [];
  if (sep === undefined) {
    sol.push(arr);
  } else {
    if (sep == "") {
      for (let i of arr) {
        sol.push(i);
      }
      return sol;
    }

    let elem = "";
    const lenSep = sep.length;

    for (let i = 0; i < arr.length; i++) {
      if (arr.slice(i, i + lenSep) == sep) {
        sol.push(elem);

        elem = "";
        i = i + lenSep - 1;
      } else {
        elem += arr[i];
      }
    }
    sol.push(elem);
  }

  return sol;
};

// const elements = ["Fire", "Air", "Water"];
// console.log(join(elements, " "));
// //spplit
// const str = "The   quick   brown   fox   jumps   over   the   lazy dog.";
console.log(split("rrrr", "rr"));
console.log(split("", "Riad"));
