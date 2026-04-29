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
const split = (str, sep) => {
  if (sep === undefined) return [str];

  if (sep === "") return str.split(""); 

  let sol = [];
  let elem = "";
  const lenSep = sep.length;

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + lenSep) === sep) {
      sol.push(elem);
      elem = "";
      i += lenSep - 1;
    } else {
      elem += str[i];
    }
  }

  sol.push(elem);
  return sol;
};
