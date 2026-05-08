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

    let x = event.clientX - CIRCLE_SIZE / 2;
    let y = event.clientY - CIRCLE_SIZE / 2;

    // circle boundaries
    const circleDimt = {
      left: x,
      top: y,
      right: x + CIRCLE_SIZE,
      bottom: y + CIRCLE_SIZE,
    };

    const safeBox = {
      left: boxDimt.left + BOX_BORDER,
      top: boxDimt.top + BOX_BORDER,
      right: boxDimt.right - BOX_BORDER,
      bottom: boxDimt.bottom - BOX_BORDER,
    };

    const isFullyInside =
      circleDimt.left >= safeBox.left &&
      circleDimt.right <= safeBox.right &&
      circleDimt.top >= safeBox.top &&
      circleDimt.bottom <= safeBox.bottom;

    // trap logic
    if (isFullyInside) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
    }

    if (lastCircle.dataset.trapped === "true") {
      x = Math.max(safeBox.left, Math.min(x, safeBox.right - CIRCLE_SIZE));
      y = Math.max(safeBox.top, Math.min(y, safeBox.bottom - CIRCLE_SIZE));
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