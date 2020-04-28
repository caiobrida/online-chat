const Message = require("../models/Message");

module.exports = {
  async index(req, res) {
    const messages = await Message.find().sort([["createdAt"]]);

    return res.json(messages);
  },

  async store(req, res) {
    const { user, message, createdAt } = req.body;

    await Message.create({
      user,
      message,
      createdAt,
    });
  },
};
