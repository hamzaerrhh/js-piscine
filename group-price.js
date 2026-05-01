
const regexPric = /(\$|USD)[\d]+\.?[\d]+/g;
const regP1 = /(?:\$|USD)(\d+)/;
const regP2 = /(?:\.)(\d+)/;

const groupPrice = (str) => {
  const matchs = str.match(regexPric);
  if (!matchs) {
    return [];
  }
  let solution = [];

  matchs.map((x) => {
    let price = [];
    price.push(x);
    price.push(x.match(regP1)[1]);
    price.push(x.match(regP2)[1]);
    solution.push(price);
  });
  return solution;
};

console.log(groupPrice("product one its $9.98 and the second one its $10.20"));
