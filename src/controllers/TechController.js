const Tech = require("../models/Tech");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findByPk(user_id, {
        include: {
          association: "techs",
          attributes: ["name"],
          through: { attributes: [] },
        },
      });

      return res.json(user.techs);
    } catch (err) {
      return res.status(400).json({ Error: "Error Index Tech" });
    }
  },

  async store(req, res) {
    try {
      const { user_id } = req.params;
      const { name } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ Error: "User not found" });
      }

      const [tech] = await Tech.findOrCreate({
        where: { name },
      });

      await user.addTech(tech);

      return res.json({ tech });
    } catch (err) {
      return res.status(400).json({ Error: "Error Store Tech" });
    }
  },

  async destroy(req, res) {
    try {
      const { user_id } = req.params;
      const { name } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ Error: "User not found" });
      }

      const tech = await Tech.findOne({
        where: { name },
      });

      await user.removeTech(tech);

      return res.send();
    } catch (err) {
      return res.status(400).json({ Error: "Error Destroy Tech" });
    }
  },
};
