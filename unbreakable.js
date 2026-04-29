const join = (arr, sep = ",") => {
  let sol = "";
  for (i = 0; i < arr.length; i++) {
    sol += arr[i];
    if (i != arr.length - 1) {
      sol += sep;
    }
  }
  return sol;
};
const split = (arr, sep) => {
  var sol = new Array();
  if (sep == undefined) {
    sol.push(arr);
  } else {
    let elem = "";
    const lenSep = sep.length;

    for (i = 0; i < arr.length - lenSep; i++) {
      if (arr.slice(i, i + lenSep) == sep) {
        if (elem != "") {
          sol.push(elem);
        }
        elem = "";
      } else {
        elem += arr[i];
      }
    }
    if (elem != "") {
      sol.push(elem);
    }
  }

  return sol;
};

// const elements = ["Fire", "Air", "Water"];
// console.log(join(elements, " "));
// //spplit
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(split(str, " "));
