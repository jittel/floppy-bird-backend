const { Accessory } = require('../models');

module.exports = {
    //get all accessories
    getAccessories(req, res) {
        Accessory.findAll()
            .then((accessories) => res.json(accessories))
            .catch((err) => res.status(500).json(err))
    },
    //get a single accessory
    getSingleAccessory(req, res) {
        Accessory.findByPk(req.params.id)
            .then((accessory) => res.json(accessory))
            .catch((err) => res.status(500).json(err))
    }
}