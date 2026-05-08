let boxDimt = null;

export const createCircle = () => {
  document.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.background = "white";

    circle.dataset.trapped = "false";
    document.body.appendChild(circle);
  });
};

export const moveCircle = () => {

  document.addEventListener("mousemove", (event) => {

    const circles = document.querySelectorAll(".circle");

    if (circles.length === 0 || !boxDimt) return;

    const lastCircle = circles[circles.length - 1];

    let x = event.clientX - 25;
    let y = event.clientY - 25;

    const circleDimt = {
      left: x,
      top: y,
      right: x + 50,
      bottom: y + 50,
    };

    const isInsideBox =
      circleDimt.left >= boxDimt.left &&
      circleDimt.right <= boxDimt.right &&
      circleDimt.top >= boxDimt.top &&
      circleDimt.bottom <= boxDimt.bottom;


    if (isInsideBox) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
    }

    if (lastCircle.dataset.trapped === "true") {
      x = Math.max(boxDimt.left, Math.min(x, boxDimt.right - 50));
      y = Math.max(boxDimt.top, Math.min(y, boxDimt.bottom - 50));
    }

    lastCircle.style.left = `${x}px`;
    lastCircle.style.top = `${y}px`;
  });
};

export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  document.body.appendChild(box);
    boxDimt = box.getBoundingClientRect();


  // const updateBoxDimt = () => {
        boxDimt = box.getBoundingClientRect();

  // };

  // updateBoxDimt();
  // window.addEventListener("resize", updateBoxDimt);

};