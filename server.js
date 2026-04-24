const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8802 });

wss.on("connection", (ws) => {
  console.log("connection established");
  ws.on("close", () => {
    console.log("cleint disconnected");
  });
});
