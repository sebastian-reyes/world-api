const continentModel = require("../../models").continent;
const countrieModel = require("../../models").countrie;

const getContinents = async (req, res) => {
  continentModel
    .findAll({
      order: [["id"]],
      include: [
        {
          model: countrieModel,
          attributes: { exclude: ["continent_id"] },
        },
      ],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: error });
    });
};

const getContinent = async (req, res) => {
  const { id } = req.params;
  continentModel
    .findByPk(id, {
      include: [
        {
          model: countrieModel,
          attributes: { exclude: ["continent_id"] },
        },
      ],
    })
    .then((data) => {
      if (data == null) {
        res.status(400);
        res.json({ message: "Not found in database." });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: error });
    });
};

export const methods = {
  getContinents,
  getContinent,
};
