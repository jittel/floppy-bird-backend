const { Chicken, User } = require('../models')

module.exports = {
    getChickens(req,res) {
        Chicken.findAll()
            .then((chickens) => res.json(chickens))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleChicken(req, res) {
        Chicken.findByPk(req.params.id, {
            include:[User]
        })
            .then((chicken) =>
                !chicken
                    ? res.status(404).json({ message: 'No chicken with that ID' })
                    : res.json(chicken)
            )
            .catch((err) => res.status(500).json(err));
    }
}