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
    if (!circles.length) return;

    const lastCircle = circles[circles.length - 1];
    const box = document.querySelector(".box");
    if (!box) return;

    const size = 50;

    let x = event.clientX;
    let y = event.clientY;

    const boxBound = box.getBoundingClientRect();

    // circle rectangle
    let circleRect = {
      left: x - size / 2,
      right: x + size / 2,
      top: y - size / 2,
      bottom: y + size / 2
    };

    // check full inside
    const isInside =
      circleRect.left > boxBound.left &&
      circleRect.right < boxBound.right &&
      circleRect.top > boxBound.top &&
      circleRect.bottom < boxBound.bottom;

    // once inside → trap it
    if (isInside) {
      lastCircle.dataset.trapped = "true";
      lastCircle.style.background = "var(--purple)";
    }

    // if trapped → clamp movement inside box
    if (lastCircle.dataset.trapped === "true") {
      const clampedX = Math.max(
        boxBound.left + size / 2,
        Math.min(x, boxBound.right - size / 2) - 1
      );

      const clampedY = Math.max(
        boxBound.top + size / 2,
        Math.min(y, boxBound.bottom - size / 2) - 1
      );

      lastCircle.style.left = `${clampedX - size / 2}px`;
      lastCircle.style.top = `${clampedY - size / 2}px`;

      return;
    }

    lastCircle.style.left = `${x - size / 2}px`;
    lastCircle.style.top = `${y - size / 2}px`;
  });
};
export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  document.body.appendChild(box);


};