let boxDimt;

const SIZE = 50;
const R = SIZE / 2;

export const createCircle = () => {
  document.addEventListener("click", (e) => {
    const c = document.createElement("div");
    c.className = "circle";
    c.style.left = `${e.clientX - R}px`;
    c.style.top = `${e.clientY - R}px`;
    c.style.background = "white";
    c.dataset.trapped = "0";
    document.body.appendChild(c);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    const list = document.querySelectorAll(".circle");
    if (!list.length || !boxDimt) return;

    const c = list[list.length - 1];

    const b = {
      l: boxDimt.left + 1,
      r: boxDimt.right - 1,
      t: boxDimt.top + 1,
      b: boxDimt.bottom - 1,
    };

    let x = e.clientX - R;
    let y = e.clientY - R;

    // 🔥 USE ACTUAL POSITION AFTER MOVE LOGIC
    if (c.dataset.trapped === "1") {
      x = Math.max(b.l, Math.min(x, b.r - SIZE));
      y = Math.max(b.t, Math.min(y, b.b - SIZE));
    }

    c.style.left = `${x}px`;
    c.style.top = `${y}px`;

    // read real updated position
    const rect = c.getBoundingClientRect();

    const inside =
      rect.left >= b.l &&
      rect.right <= b.r &&
      rect.top >= b.t &&
      rect.bottom <= b.b;

    if (inside || c.dataset.trapped === "1") {
      c.style.background = "var(--purple)";
      c.dataset.trapped = "1";
    }
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