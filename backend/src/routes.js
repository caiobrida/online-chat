const express = require("express");

const MessageController = require("./controllers/MessageController");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");

const routes = express.Router();

routes.get("/messages", MessageController.index);
routes.post("/messages", MessageController.store);
routes.delete("/messages/:messageId", MessageController.destroy);

routes.post("/users", UserController.store);

routes.post("/auth", AuthController.store);

module.exports = routes;
