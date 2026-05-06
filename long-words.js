const longWords = (arr) => {
  return arr.every(w => w.length >= 5);
};

const oneLongWord = (arr) => {
  return arr.some(w => w.length >= 10);
};

const noLongWords = (arr) => {
  return !arr.some(w => w.length >= 7);
};