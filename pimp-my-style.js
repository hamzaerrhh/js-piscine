import { styles } from "./pimp-my-style.data.js";

let index = 0;
let adding = true;

export const pimp = () => {
  const elem = document.querySelector(".button");

  if (adding) {
    elem.classList.remove("unpimp");
    elem.classList.add(styles[index]);
    index++;

    if (index === styles.length) {
      adding = false;
      elem.classList.add("unpimp");
    }
  }
  else {
    index--;

    elem.classList.remove(styles[index]);

    if (index === 0) {
      adding = true;
      elem.classList.remove("unpimp");
    }
  }
};