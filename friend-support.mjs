
import http from 'node:http';
import { readFile,readdir } from 'node:fs/promises';
import path from 'node:path';

const PORT = 5000;

function send(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = http.createServer(
    async (req, res) => {
  try {
    if (req.method !== 'GET') {
      return send(res, 404, { error: 'guest not found' });
    }

    const guestName = req.url.slice(1); 
    if (!guestName) {
      return send(res, 404, { error: 'guest not found' });
    }

    const filePath = `guests/${guestName}.json`

    try {
      const content = await readFile(filePath, 'utf-8');
      const data = JSON.parse(content);

      return send(res, 200, data);

    } catch (err) {
      if (err.code === 'ENOENT') {

        return send(res, 404, { error: 'guest not found' });
      }

      return send(res, 500, { error: 'server failed' });
    }

  } catch (err) {
    return send(res, 500, { error: 'server failed' });
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});