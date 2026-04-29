const RNA = (str) => {
  let sol = "";

  for (let char of str) {
    switch (char) {
      case "G":
        sol += "C";
        break;
      case "C":
        sol += "G";
        break;
      case "T":
        sol += "A";
        break;
      case "A":
        sol += "U";
        break;
      default:
        sol += ""; // or handle invalid input
    }
  }

  return sol;
};
const DNA = (str) => {
  let sol = "";

  for (let char of str) {
    switch (char) {
      case "C":
        sol += "G";
        break;
      case "G":
        sol += "C";
        break;
      case "A":
        sol += "T";
        break;
      case "U":
        sol += "A";
        break;
      default:
        sol += "";
    }
  }

  return sol;
};
