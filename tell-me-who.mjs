import { readdir } from 'node:fs/promises';

const dirPath = process.argv[2];

try {
  const files = await readdir(dirPath);

  const guests = files
    .map(file => file.replace(".json",""))
    .map(name => {
      const [firstname, lastname] = name.split('_');
      return `${lastname} ${firstname}`;
    })
    .sort();

  guests.forEach((guest, index) => {
    console.log(`${index + 1}. ${guest}`);
  });

} catch (err) {
  console.error(err);
}