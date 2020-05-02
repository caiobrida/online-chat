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

    return res.json({ message: "Success" });
  },

  async destroy(req, res) {
    const { messageId } = req.params;

    const message = await Message.findById(messageId);

    if (!message) return res.status(400).json({ message: "Message not found" });

    await message.remove();
    return res.json({ message: "Success" });
  },
};
