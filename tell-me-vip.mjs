import  { readFile,readdir,writeFile } from  'node:fs/promises'
import path from 'node:path';

const dirPath=process.argv[2]
try {
  const files = await readdir(dirPath);
  const vips=[]
for (let f of files){
    const pathfile=path.join(dirPath,f)

    
    const content =JSON.parse(
        await  readFile(pathfile,'utf-8')
    )
    if(content.answer=="yes"){
        vips.push(f)
    }

}


  const guests = vips
    .map(file => file.replace(".json",""))
    .map(name => {
      const [firstname, lastname] = name.split('_');
      return `${lastname} ${firstname}`;
    })
    .sort();

let contentFiles=""
  guests.forEach((guest, index) => {
    contentFiles+=`${index+1} .${guest}\n`

  });

  await writeFile("vip.txt", contentFiles.trim());

} catch (err) {
  console.error(err);
}