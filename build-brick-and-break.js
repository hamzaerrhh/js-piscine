export const build = (n) => {
  let count = 1;

  const interval = setInterval(() => {
    if (count > n) {
      clearInterval(interval);
      return;
    }

    const brick = document.createElement('div');

    brick.id = `brick-${count}`;

    // middle column
    if ((count - 1) % 3 === 1) {
      brick.setAttribute("data-foundation", "true");
    }

    document.body.appendChild(brick);

    count++;
  }, 100);
};

export const repair = (...ids) => {
  for (let id of ids) {
    const brick = document.getElementById(id);

    if (!brick) continue;

    if (brick.hasAttribute("data-foundation")) {
      brick.setAttribute("data-repaired", "in progress");
    } else {
      brick.setAttribute("data-repaired", "true");
    }
  }
};

export const destroy = () => {
  const bricks = document.querySelectorAll('div');

  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }
};