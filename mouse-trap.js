let boxDimt = null;
const CIRCLE_SIZE = 50;
const BOX_BORDER = 1;

export const createCircle = () => {
  document.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.left = `${event.clientX - CIRCLE_SIZE / 2}px`;
    circle.style.top = `${event.clientY - CIRCLE_SIZE / 2}px`;
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

    const R = 25;

    let x = event.clientX - R;
    let y = event.clientY - R;

    const safeBox = {
      left: boxDimt.left + 1,
      top: boxDimt.top + 1,
      right: boxDimt.right - 1,
      bottom: boxDimt.bottom - 1,
    };

    const circle = {
      left: x,
      top: y,
      right: x + 50,
      bottom: y + 50,
    };

    const fullyInside =
      circle.left >= safeBox.left &&
      circle.right <= safeBox.right &&
      circle.top >= safeBox.top &&
      circle.bottom <= safeBox.bottom;

    if (fullyInside || lastCircle.dataset.trapped === "true") {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
    }

    if (lastCircle.dataset.trapped === "true") {
      x = Math.max(safeBox.left, Math.min(x, safeBox.right - 50));
      y = Math.max(safeBox.top, Math.min(y, safeBox.bottom - 50));
    }

    lastCircle.style.left = `${x}px`;
    lastCircle.style.top = `${y}px`;
  });
};
export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  document.body.appendChild(box);

  const updateBoxDimt = () => {
    boxDimt = box.getBoundingClientRect();
  };

  updateBoxDimt();
  window.addEventListener("resize", updateBoxDimt);

};