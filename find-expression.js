const findExpression = (n) => {
  let sol = "1";
  if (n % 2 != 0) {
    return 0;
  }
  let exp = 1;

  while (n != exp) {
    if (n - exp == 4) {
      sol += " " + add4;
      return sol;
    }
    sol += " " + mul2;
    exp *= 2;
  }
  return -1;
};
