let boxDimt = null;

const CIRCLE_SIZE = 50;
const HALF = CIRCLE_SIZE / 2;
const WALL = 1;

export const createCircle = () => {
  document.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.left = `${event.clientX - HALF}px`;
    circle.style.top = `${event.clientY - HALF}px`;
    circle.style.background = "white";

    circle.dataset.trapped = "false";

    document.body.appendChild(circle);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (event) => {
    const circles = document.querySelectorAll(".circle");
    if (!circles.length || !boxDimt) return;

    const lastCircle = circles[circles.length - 1];

    let x = event.clientX - HALF;
    let y = event.clientY - HALF;

    const circleRect = {
      left: x,
      top: y,
      right: x + CIRCLE_SIZE,
      bottom: y + CIRCLE_SIZE,
    };

    const innerBox = {
      left: boxDimt.left + WALL,
      top: boxDimt.top + WALL,
      right: boxDimt.right - WALL,
      bottom: boxDimt.bottom - WALL,
    };

    const fullyInsideInnerBox =
      circleRect.left >= innerBox.left &&
      circleRect.right <= innerBox.right &&
      circleRect.top >= innerBox.top &&
      circleRect.bottom <= innerBox.bottom;

    // ✅ TRAP CONDITION
    if (fullyInsideInnerBox) {
      lastCircle.dataset.trapped = "true";
      lastCircle.style.background = "var(--purple)";
    }

    // If trapped → hard clamp inside inner box (never touching walls)
    if (lastCircle.dataset.trapped === "true") {
      x = Math.max(innerBox.left, Math.min(x, innerBox.right - CIRCLE_SIZE));
      y = Math.max(innerBox.top, Math.min(y, innerBox.bottom - CIRCLE_SIZE));

      lastCircle.style.left = `${x}px`;
      lastCircle.style.top = `${y}px`;
      return;
    }

    const intersectsBox =
      circleRect.right > boxDimt.left &&
      circleRect.left < boxDimt.right &&
      circleRect.bottom > boxDimt.top &&
      circleRect.top < boxDimt.bottom;

    if (intersectsBox && !fullyInsideInnerBox) {
      const fromLeft = Math.abs(circleRect.right - boxDimt.left);
      const fromRight = Math.abs(circleRect.left - boxDimt.right);
      const fromTop = Math.abs(circleRect.bottom - boxDimt.top);
      const fromBottom = Math.abs(circleRect.top - boxDimt.bottom);

      const min = Math.min(fromLeft, fromRight, fromTop, fromBottom);

      if (min === fromLeft) x = boxDimt.left - CIRCLE_SIZE;
      else if (min === fromRight) x = boxDimt.right;
      else if (min === fromTop) y = boxDimt.top - CIRCLE_SIZE;
      else y = boxDimt.bottom;
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