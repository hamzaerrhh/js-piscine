import  { readFile } from "node:fs/promises"
const fileName= process.argv[2]

if(fileName===undefined){

  process.exit()
}


const content= await readFile(fileName, 'utf-8')



const disco = content.trim()
  .split(" ")
  .map((word) => {
    const mid = Math.floor(word.length / 2);
    return word.slice(mid) + word.slice(0, mid);
  })
  .join(" ");

console.log(disco)

    // const filePath = resolve(`./${fileName}`);
    // const contents = await readFile(fileName, { encoding: 'utf8' });
