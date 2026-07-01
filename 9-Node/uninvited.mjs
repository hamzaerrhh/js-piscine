import http from 'node:http';
import { writeFile } from 'node:fs/promises';

const PORT = 5000;

function send(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return send(res, 500, { error: 'server failed' });
  }

  const guestName = req.url.slice(1);

  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      await writeFile(`guests/${guestName}.json`, body);

      let response;

      try {
        response = JSON.parse(body);
      } catch {
        response = body;
      }

      send(res, 201, response);
    } catch (err) {
      send(res, 500, { error: 'server failed' });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});