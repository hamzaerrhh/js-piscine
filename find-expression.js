const mul2 = "*2";
const add4 = "+4";

const findExpression = (n) => {
  if (n < 1) return undefined;
  if (n === 1) return undefined;
  // if (n % 2 !== 0) return undefined;

  let sol = "1";
  let exp = 1;

  while (exp !== n) {
    if ((n - exp) % 4 == 0) {
      sol += " " + add4;
      exp += 4;
    } else {
      exp *= 2;
      sol += " " + mul2;
    }

    if (exp > n) return undefined;
  }

  return sol;
};
