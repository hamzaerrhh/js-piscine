import { readFile, writeFile } from 'node:fs/promises';
const { Buffer } = require('node:buffer');
const file = process.argv[2];
const action = process.argv[3];
const outputName = process.argv[4];

try {
  const content = await readFile(file);

  if (action === 'encode') {
    const encoded = Buffer.from(content).toString('base64');

    await writeFile(
      outputName || 'cypher.txt',
      encoded
    );

    console.log('File encoded');
  }

  else if (action === 'decode') {
    const decoded = Buffer.from(
      content.toString(),
      'base64'
    ).toString();

    await writeFile(
      outputName || 'clear.txt',
      decoded
    );

  }



} catch (err) {
  console.error(err);
}