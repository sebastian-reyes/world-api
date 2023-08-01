const continentModel = require("../../models").continent;
const countrieModel = require("../../models").countrie;

const getContinents = async (req, res) => {
  continentModel
    .findAll({
      order:[['id']],
      include: [{ model: countrieModel }],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500)
      res.json({ error: error });
    });
};

export const methods = {
  getContinents,
};
