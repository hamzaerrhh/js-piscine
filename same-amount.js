const sameAmount = (str, reg1, reg2) => {
  reg1 = addGlobalFlag(reg1);
  reg2 = addGlobalFlag(reg2);
  const match1 = str.match(reg1);
  const match2 = str.match(reg2);

  let len1 = match1 ? match1.length : undefined;
  let len2 = match2 ? match2.length : undefined;

  return len1 == len2;
};

function addGlobalFlag(reg) {
  if (reg.flags.includes("g")) return reg;
  return new RegExp(reg.source, reg.flags + "g");
}
