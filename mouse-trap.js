
let boxDimt;

const SIZE = 50;
const R = SIZE / 2;

const getBox = () => ({
  l: boxDimt.left + 1,
  r: boxDimt.right - 1,
  t: boxDimt.top + 1,
  b: boxDimt.bottom - 1,
});

const isInside = (x, y, b) =>
  x >= b.l &&
  x + SIZE <= b.r &&
  y >= b.t &&
  y + SIZE <= b.b;

export const createCircle = () => {
  document.addEventListener("click", (e) => {
    const c = document.createElement("div");
    c.className = "circle";

    let x = e.clientX - R;
    let y = e.clientY - R;

    c.dataset.trapped = "0";
    c.style.background = "white";

    if (boxDimt) {
      const inside = isInside(x, y, getBox());
      if (inside) {
        c.dataset.trapped = "1";
        c.style.background = "var(--purple)";
      }
    }

    c.style.left = `${x}px`;
    c.style.top = `${y}px`;

    document.body.appendChild(c);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    const list = document.querySelectorAll(".circle");
    if (!list.length || !boxDimt) return;

    const c = list[list.length - 1];

    const b = getBox();

    let x = e.clientX - R;
    let y = e.clientY - R;

    const inside = isInside(x, y, b);

    if (inside || c.dataset.trapped === "1") {
      c.style.background = "var(--purple)";
      c.dataset.trapped = "1";
    }

    if (c.dataset.trapped === "1") {
      x = Math.max(b.l, Math.min(x, b.r - SIZE));
      y = Math.max(b.t, Math.min(y, b.b - SIZE));
    }

    c.style.left = `${x}px`;
    c.style.top = `${y}px`;
  });
};



export const setBox = () => {
  const box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);

  const update = () => (boxDimt = box.getBoundingClientRect());
  update();
  window.addEventListener("resize", update);
};