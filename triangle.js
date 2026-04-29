const triangle = (str, nbr) => {
  let sol = "";
  const lenStr = str.length;

  for (i = 0; i <= nbr; i++) {
    for (let len = 0; len < i; len++) {
      sol += str;
    }
    if (i != nbr) {
      sol += "\n";
    }
  }
  return sol;
};
// console.log(triangle("*", 5));
