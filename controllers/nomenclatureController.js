const { Sklad, Nomenclature } = require("../models/models");

class NomenclatureController {
  async getAll(req, res) {
    const nomens = await Nomenclature.findAll();
    return res.json(nomens);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const nomen = await Nomenclature.findOne({ where: { id } });
    if (nomen) {
      return res.json(nomen);
    } else {
      return res.json({ message: "Not found " + id });
    }
  }

  async create(req, res) {
    const {
      tradeNameList,
      internationalNonProprietaryName,
      esklpTechnicalTask,
      emissionType,
      concentration,
      concentrationUnit,
      primaryPackageVolume,
      primaryPackageVolumeUnit,
      unitForOrder,
      vitalFederal,
      vitalRegional,
      hasAnalogues,
      primaryPackageMaxDoze,
      codeJECFA,
      esklpConcentrationUnit,
    } = req.body;
    const nomen = await Nomenclature.create({
      tradeNameList,
      internationalNonProprietaryName,
      esklpTechnicalTask,
      emissionType,
      concentration,
      concentrationUnit,
      primaryPackageVolume,
      primaryPackageVolumeUnit,
      unitForOrder,
      vitalFederal,
      vitalRegional,
      hasAnalogues,
      primaryPackageMaxDoze,
      codeJECFA,
      esklpConcentrationUnit,
    });

    return res.json(nomen);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      tradeNameList,
      internationalNonProprietaryName,
      esklpTechnicalTask,
      emissionType,
      concentration,
      concentrationUnit,
      primaryPackageVolume,
      primaryPackageVolumeUnit,
      unitForOrder,
      vitalFederal,
      vitalRegional,
      hasAnalogues,
      primaryPackageMaxDoze,
      codeJECFA,
      esklpConcentrationUnit,
    } = req.body;
    const nomen = await Nomenclature.update(
      {
        tradeNameList,
        internationalNonProprietaryName,
        esklpTechnicalTask,
        emissionType,
        concentration,
        concentrationUnit,
        primaryPackageVolume,
        primaryPackageVolumeUnit,
        unitForOrder,
        vitalFederal,
        vitalRegional,
        hasAnalogues,
        primaryPackageMaxDoze,
        codeJECFA,
        esklpConcentrationUnit,
      },
      { where: { id } }
    );

    return res.json(nomen);
  }
  async delete(req, res) {
    const { id } = req.params;
    const nomen = await Nomenclature.destroy({ where: { id } });

    return res.json(nomen);
  }
}

module.exports = new NomenclatureController();
