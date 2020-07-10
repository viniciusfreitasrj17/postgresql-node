const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findByPk(user_id, {
        include: { association: "addresses" },
      });

      if (!user) {
        return res.status(400).json({ Error: "User not found" });
      }

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ Error: "Error Index Address" });
    }
  },

  async store(req, res) {
    try {
      const { user_id } = req.params;
      const { zipcode, street, number } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ Error: "User not found" });
      }

      const address = await Address.create({
        zipcode,
        street,
        number,
        user_id,
      });

      return res.json({ address });
    } catch (err) {
      return res.status(400).json({ Error: "Error Store Address" });
    }
  },
};
