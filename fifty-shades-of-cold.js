import { colors } from "./fifty-shades-of-cold.data.js";

const generateClasses = () => {
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
const generateColdShades=()=>{

      for (let col of colors) {
        const elem=document.createElement("div")
        elem.classList.add(col)
        elem.textContent=`${col}`
          document.body.append(elem)

  }

}
const choseShade=()=>{
    const divs=document.querySelectorAll('div')
    

}