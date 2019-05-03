const express = require('express'); 
const helmet= require("helmet");
const morgan = require("morgan");
const actionRouter = require("./data/routers/actions");
const projectRouter = require("./data/routers/projects");

const server = express();

server.use(express.json(), helmet(), morgan('dev'))
server.use("/api/actions",actionRouter);
server.use("/api/projects", projectRouter);

server.get('/', (req, res, next) => {
    res.send(`
      <h2>Hello World</h2>
      <p>This is my Sprint Challenge for Web Api's</p>
      `);
  });

module.exports = server;