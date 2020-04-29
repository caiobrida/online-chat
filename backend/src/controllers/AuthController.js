const bcrypt = require("bcrypt");

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = user.generateAuthToken();
    return res.json({ token });
  },
};
