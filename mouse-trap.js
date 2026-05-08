let lastCircle = null;
let box = null;

export function createCircle(e) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.position = "absolute";
  circle.style.width = "20px";
  circle.style.height = "20px";
  circle.style.borderRadius = "50%";
  circle.style.background = "white";

  circle.style.left = (e.clientX - 10) + "px";
  circle.style.top = (e.clientY - 10) + "px";

  document.body.appendChild(circle);

  lastCircle = circle;
}

export function moveCircle(e) {
  if (!lastCircle) return;

  const boxRect = box ? box.getBoundingClientRect() : null;

  let x = e.clientX - 10;
  let y = e.clientY - 10;

  // If box exists and circle is trapped, keep it inside
  if (boxRect && lastCircle.dataset.trapped === "true") {
    if (x < boxRect.left) x = boxRect.left;
    if (y < boxRect.top) y = boxRect.top;
    if (x > boxRect.right - 20) x = boxRect.right - 20;
    if (y > boxRect.bottom - 20) y = boxRect.bottom - 20;
  }

  lastCircle.style.left = x + "px";
  lastCircle.style.top = y + "px";

  // check if fully inside box
  if (boxRect) {
    const circleRect = lastCircle.getBoundingClientRect();

    const inside =
      circleRect.left >= boxRect.left &&
      circleRect.right <= boxRect.right &&
      circleRect.top >= boxRect.top &&
      circleRect.bottom <= boxRect.bottom;

    if (inside) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
    }
  }
}

export function setBox() {
  box = document.createElement("div");
  box.classList.add("box");

  box.style.position = "absolute";
  box.style.width = "200px";
  box.style.height = "200px";

  box.style.left = "50%";
  box.style.top = "50%";
  box.style.transform = "translate(-50%, -50%)";

  box.style.border = "2px solid black";

  document.body.appendChild(box);
}

addEventListener("click", createCircle);
addEventListener("mousemove", moveCircle);