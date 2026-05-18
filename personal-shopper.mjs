import { readFile, writeFile, rm } from "node:fs/promises";

const [, , file, cmd, a3, a4] = process.argv;
const help = `Commands:
- create: create the file (.json)
- delete: delete the file
- add: add an element (optionally quantity)
- rm: remove or decrement an element
- ls: show list
- help: show this help`;

const readJSON = async () => {
  try {
    return JSON.parse(await readFile(file, "utf-8"));
  } catch {
    return {};
  }
};

const save = (data) =>
  writeFile(file, JSON.stringify(data));

const num = (v) => {
  const n = Number(v);
  return isNaN(n) ? NaN : n;
};

if (!cmd || cmd === "help") {
  console.log(help);
  process.exit(0);
}

if (cmd === "create") {
  await save({});
  process.exit(0);
}

if (cmd === "delete") {
  await rm(file).catch(() => {});
  process.exit(0);
}

const list = await readJSON();

if (cmd === "ls") {
  const keys = Object.entries(list);

  if (!keys.length) console.log("Empty list.");
  else keys.forEach(([k, v]) => console.log(`- ${k} (${v})`));

  process.exit(0);
}


if (cmd === "add") {
  if (!a3) {
    console.error("No elem specified.");
    process.exit(0);
  }

  let n = num(a4);
  if (isNaN(n)) n = 1;

  if (n < 0) {
    const v = Math.abs(n);
    list[a3] = (list[a3] || 0) - v;
    if (list[a3] <= 0) delete list[a3];
  } else {
    list[a3] = (list[a3] || 0) + n;
  }

  await save(list);
  process.exit(0);
}

if (cmd === "rm") {
  if (!a3) {
    console.error("No elem specified.");
    process.exit(0);
  }

  if (a4 === undefined) {
    delete list[a3];
    await save(list);
    process.exit(0);
  }

  const n = num(a4);

  if (isNaN(n)) {
    console.error("Unexpected request: nothing has been removed.");
    process.exit(0);
  }

  if (n < 0) {
    list[a3] = (list[a3] || 0) + Math.abs(n);
  } else {
    list[a3] = (list[a3] || 0) - n;
    if (list[a3] <= 0) delete list[a3];
  }

  await save(list);
  process.exit(0);
}

console.log(help);