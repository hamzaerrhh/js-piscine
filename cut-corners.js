const round = (num) => {
  let isNeg = false;
  if (num < 0) {
    isNeg = true;
  }

  let sol;
  if (isNeg) {
    return -getInt(-num + 0.5);
  } else {
    return getInt(num + 0.5);
  }
};

const floor = (num) => {
  let isNeg = false;
  if (num < 0) {
    isNeg = true;
  }
  if (getInt(num) == num) {
    return num;
  }
  let sol;
  if (isNeg) {
    return (sol = -getInt(-num + 1));
  } else {
    return (sol = getInt(num));
  }
};
const trunc = (num) => {
  let sol;
  if (num < 0) {
    return (sol = -getInt(-num));
  } else {
    return (sol = getInt(num));
  }
};

const ceil = (num) => {
  let isNeg = false;
  if (num < 0) {
    isNeg = true;
  }
  let sol;
  if (getInt(num) == num) {
    return num;
  }
  if (isNeg) {
    return -getInt(-num);
  } else {
    return getInt(num + 1);
  }
};

const getInt = (x) => {
  let n = 0;
  let step = 1;

  while (n + step * 10 <= x) {
    step *= 10;
  }

  while (step >= 1) {
    while (n + step <= x) {
      n += step;
    }
    step /= 10;
  }

  return n;
};
