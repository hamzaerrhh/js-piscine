import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
  const style = document.createElement("style");

  let css = "";

  for (let col of colors) {
    css += `
      .${col} {
        background: ${col};
      }
    `;
  }

  style.textContent = css;

  document.head.appendChild(style);
};
export const generateColdShades=()=>{

      for (let col of colors) {
         const elem=document.createElement("div")
         elem.classList.add(col)
         elem.textContent=`${col}`
         document.body.appendChild(elem)
      }

}
export const choseShade = (shade) => {
  const divs = document.querySelectorAll('div');

  for (let elem of divs) {
    elem.className = '';

    elem.classList.add(shade);
  }
};