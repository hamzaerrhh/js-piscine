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
    const lastCircle = document.querySelector(".circle:last-child"); 
    if (!lastCircle) return;

    const box = document.querySelector(".box");
    if (!box) return;

    const size = 50;
    const radius = size / 2;

    let x = event.clientX;
    let y = event.clientY;

    const boxBound = box.getBoundingClientRect();

    // detect full inside
    const isInside =
      x > boxBound.left + radius &&
      x < boxBound.right - radius &&
      y > boxBound.top + radius &&
      y < boxBound.bottom - radius;

    if (isInside) {
      lastCircle.dataset.trapped = "true";
      lastCircle.style.background = "var(--purple)";
    }

    if (lastCircle.dataset.trapped === "true") {
      const clampedX = Math.min(
        Math.max(x, boxBound.left + radius),
        boxBound.right - radius
      );

      const clampedY = Math.min(
        Math.max(y, boxBound.top + radius),
        boxBound.bottom - radius
      );

      lastCircle.style.left = `${clampedX - radius}px`;
      lastCircle.style.top = `${clampedY - radius}px`;

      return;
    }

    // normal movement
    lastCircle.style.left = `${x - radius}px`;
    lastCircle.style.top = `${y - radius}px`;
  });
};
export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  document.body.append(box);


};