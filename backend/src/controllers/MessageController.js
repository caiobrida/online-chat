const Message = require("../models/Message");

module.exports = {
  async index(req, res) {
    const messages = await Message.find().sort([["createdAt"]]);

    return res.json(messages);
  },

  async store(req, res) {
    const { user, message } = req.body;

    const createdMessage = await Message.create({
      user,
      message,
    });

    return res.json(createdMessage);
  },
};
