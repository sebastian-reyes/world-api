const continentModel = require("../../models").continent;
const countrieModel = require("../../models").countrie;

const getCountries = async (req, res) => {
  countrieModel
    .findAll({
      order: [["id"]],
      include: [
        {
          model: continentModel,
          attributes: { exclude: ["countries"] },
        },
      ],
      attributes: { exclude: ["continent_id"] },
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: error });
    });
};

const getCountrie = async (req, res) => {
  const { id } = req.params;
  countrieModel
    .findByPk(id, {
      include: [
        {
          model: continentModel,
          attributes: { exclude: ["countries"] },
        },
      ],
      attributes: { exclude: ["continent_id"] },
    })
    .then((data) => {
      if (data == null) {
        res.status(400);
        res.json({message: 'Not found in database.'})
      }else{
        res.json(data);
      }
    })
    .catch((error) => {
      res.status(500);
      res.json({ error: error });
    });
};

export const methods = {
  getCountries,
  getCountrie,
};
