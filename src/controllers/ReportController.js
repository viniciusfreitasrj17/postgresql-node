const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    /**
     * 1º Encontrar todos usuários que tem e-mail que termina com '@gmail.com'
     * 2º Desses usuários eu quero buscar todos que moram na rua 'Rua: Da Paz'
     * 3º Desses usuários eu quero buscar as tecnologias que começam com React
     */

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com", // 1º
        },
      },
      include: [
        { association: "addresses", where: { street: "Rua: Da Paz" } }, // 2º
        {
          association: "techs",
          required: false, // Exibe os outros usuários, porém não exibe suas tecnologias
          where: { name: { [Op.iLike]: "React%" } },
        }, // 3º
      ],
    });

    return res.json(users);
  },
};
