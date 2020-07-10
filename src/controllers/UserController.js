const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ Error: "Error Index User" });
    }
  },

  async store(req, res) {
    try {
      const { name, email } = req.body;

      const user = await User.create({ name, email });

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ Error: "Error Store User" });
    }
  },
};
