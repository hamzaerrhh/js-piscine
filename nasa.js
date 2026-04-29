const nasa = (n) => {
  let sol = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      sol += "NA";
    }
    if (i % 5 == 0) {
      sol += "SA";
    }
    if (i % 5 != 0 && i % 3 != 0) {
      sol += i;
    }

    if (i != n) {
      sol += " ";
    }
  }
  return sol;
};

console.log(nasa(15));
