import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";

const PORT = 5000;

const allowedUsers = new Set([
  "Caleb_Squires",
  "Tyrique_Dalton",
  "Rahima_Young",
]);

const PASSWORD = "abracadabra";

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(body));
}

function unauthorized(res) {
  res.writeHead(401, {
    "Content-Type": "application/json",
  });
  res.end("Authorization Required");
}

function checkAuthorization(auth) {
  if (!auth) return false;

  const [type, encoded] = auth.split(" ");
  if (type !== "Basic" || !encoded) return false;

  let decoded = "";

  try {
    decoded = Buffer.from(encoded, "base64").toString("utf-8");
  } catch {
    return false;
  }

  if (!decoded.includes(":")) return false;

  const [user, pass] = decoded.split(":");

  return (
    allowedUsers.has(user) &&
    pass === "abracadabra"
  );
}

function getBody(req) {
  try {
    return JSON.parse(req.headers.body || "{}");
  } catch {
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405);
    return res.end();
  }

  const auth = req.headers.authorization;

  if (!checkAuthorization(auth)) {
    return unauthorized(res); 
  }

  let body = getBody(req);
  if (!body) return send(res, 400, { error: "Invalid JSON" });


  const guestName = req.url.slice(1);

  await mkdir("guests", { recursive: true });

  await writeFile(
    `guests/${guestName}.json`,
    JSON.stringify(body, null, 2)
  );

  return send(res, 200, body);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});