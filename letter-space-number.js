const letterSpaceNumber = (str) => {
  return str.match(/\w \d(?!\w)/g) || [];
};

console.log(letterSpaceNumber("It's 20 past 3"));
