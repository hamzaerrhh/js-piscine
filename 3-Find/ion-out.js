const ionOut = (str) => {
  const regex = /\w*tion\w*/g;
  const reg2 = /tion/g;

  const matchs = str.match(regex);

  if (matchs == undefined) {
    return [];
  }

  return matchs.map((s) => s.replace(reg2, "t"));
};

// const data = "attention, direction";

// console.log(ionOut(data));
