const { Category, Accessory } = require('../models')

module.exports = {
    getCategories(req,res) {
        Category.findAll()
            .then((categories) => res.json(categories))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single category
    getSingleCategory(req, res) {
        Category.findByPk(req.params.id, {
            include:[Accessory]
        })
            .then((category) =>
                !category
                    ? res.status(404).json({ message: 'No category with that ID' })
                    : res.json(category)
            )
            .catch((err) => res.status(500).json(err));
    }
}