let boxRect = null;

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

    if (circles.length === 0 || !boxRect) return;

    const lastCircle = circles[circles.length - 1];

    let x = event.clientX - 25;
    let y = event.clientY - 25;

    const circleRect = {
      left: x,
      top: y,
      right: x + 50,
      bottom: y + 50,
    };

    const isInsideBox =
      circleRect.left >= boxRect.left &&
      circleRect.right <= boxRect.right &&
      circleRect.top >= boxRect.top &&
      circleRect.bottom <= boxRect.bottom;


    if (isInsideBox) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
    }

    if (lastCircle.dataset.trapped === "true") {
      x = Math.max(boxRect.left, Math.min(x, boxRect.right - 50));
      y = Math.max(boxRect.top, Math.min(y, boxRect.bottom - 50));
    }

    lastCircle.style.left = `${x}px`;
    lastCircle.style.top = `${y}px`;
  });
};

export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");

  document.body.appendChild(box);


  const updateBoxRect = () => {
    boxRect = box.getBoundingClientRect();
  };

  updateBoxRect();
  window.addEventListener("resize", updateBoxRect);

};