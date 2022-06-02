const { Chicken } = require('../models')

module.exports = {
    getChickens(req,res) {
        Chicken.findAll()
            .then((chickens) => res.json(chickens))
            .catch((err) => res.status(500).json(err));
    }
}