const pyramid = (str, depth) => {
  let result = "";
  const lenStr = str.length;

  for (let i = 0; i < depth; i++) {
    const spaces = " ".repeat((depth - i - 1) * lenStr);
    const stars = str.repeat(2 * i + 1);

    result += spaces + stars;

    if (i !== depth - 1) {
      result += "\n";
    }
  }

  return result;
};
pyramid("**", 3);
