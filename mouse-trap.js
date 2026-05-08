let boxDimt;

const SIZE = 50;
const R = SIZE / 2;

export const createCircle = () => {
  document.addEventListener("click", (e) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = `${e.clientX - R}px`;
    circle.style.top = `${e.clientY - R}px`;
    circle.style.background = "white";
    circle.dataset.trapped = "0";
    document.body.appendChild(circle);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    const list = document.querySelectorAll(".circle");
    if (!list.length || !boxDimt) return;

    const circle = list[list.length - 1];

    let x = e.clientX - R;
    let y = e.clientY - R;

    const b = {
      l: boxDimt.left + 1,
      r: boxDimt.right - 1,
      t: boxDimt.top + 1,
      b: boxDimt.bottom - 1,
    };

    const inside =
      x >= b.l &&
      x + SIZE <= b.r &&
      y >= b.t &&
      y + SIZE <= b.b;

    if (inside || circle.dataset.trapped === "1") {
      circle.style.background = "var(--purple)";
      circle.dataset.trapped = "1";
    }

    if (circle.dataset.trapped === "1") {
      x = Math.max(b.l, Math.min(x, b.r - SIZE));
      y = Math.max(b.t, Math.min(y, b.b - SIZE));
    }

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
};

export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box") 
  document.body.appendChild(box);

  const update = () => (boxDimt = box.getBoundingClientRect());
  update();
  window.addEventListener("resize", update);
};