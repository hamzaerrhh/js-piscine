export const compose = () => {
  document.addEventListener("keydown", (event) => {

    if (event.key === "Backspace") {
      const notes = document.querySelectorAll(".note");

      if (notes.length > 0) {
        notes[notes.length - 1].remove();
      }

      return;
    }

    if (event.key === "Escape") {
      document.body.innerHTML = ''
      return;
    }

    if (event.key >= "a" && event.key <= "z") {

      const note = document.createElement("div");

      note.classList.add("note");
      note.textContent = event.key;

      const color = generateColor(event.key)
        "#" +
        event.key.charCodeAt(0).toString(16).repeat(3).slice(0, 6);

      note.style.backgroundColor = color;

      document.body.appendChild(note);
    }
  });
};

const generateColor = (letter) => {
  const code = letter.charCodeAt(0);

  const r = (code * 3) % 256;
  const g = (code * 7) % 256;
  const b = (code * 11) % 256;

  return `rgb(${r}, ${g}, ${b})`;
};