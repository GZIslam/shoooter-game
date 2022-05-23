import express from "express";
import http from "http";
import { Server } from "socket.io";
import { dbo } from "./db/conn.js";
import { Auth } from "./routes/auth.js";
import bodyParser from "body-parser";

const PORT = 3070;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.json());

dbo.connectToServer(() => {});

Auth(app, dbo);

app.get('/', (req, res) => {
  res.send("oK")
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});