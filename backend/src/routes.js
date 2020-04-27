const express = require("express");

const MessageController = require("./controllers/MessageController");

const routes = express.Router();

routes.get("/messages", MessageController.index);

routes.post("/messages", MessageController.store);

module.exports = routes;
