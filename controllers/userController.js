const { User, Chicken, Accessory } = require('../models')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.findAll()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findByPk(req.params.id, {
            include: [Chicken, Accessory]
        })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {res.status(500).json(err)
            console.log(err)
            });
    },
    async createUser(req, res) {
        console.log(req.body)
        try {
            const newUser = await User.create(req.body)
            const newChicken = await Chicken.create({
                chicken_name: req.body.chicken_name,
                UserId: newUser.id
            })
            const token = jwt.sign({
                userId: newUser.id
            }, process.env.JWT_SECRET, {
                expiresIn: "6h"
            })
            return res.json({
                user: newUser,
                chicken: newChicken,
                token: token
            })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    //updates egg count
    updateEgg(req, res) {
        console.log(req.body)
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(foundUser => {
            res.json(foundUser)
        })
    },
    //log in to user
    login(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            },
            include: [Chicken]
        }).then(foundUser => {
            if (!foundUser) {
                return res.status(401).json({ msg: "invalid login credentials" })
            }
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                const token = jwt.sign({
                    userId: foundUser.id
                }, process.env.JWT_SECRET, {
                    expiresIn: "6h"
                })
                return res.json({
                    user: foundUser,
                    token: token
                })
            }
            return res.status(401).json({ msg: "invalid login credentials" })
        })
    },
    // Delete a user and associated apps
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Application.deleteMany({ _id: { $in: user.applications } })
            )
            .then(() => res.json({ message: 'User and associated apps deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    verifyToken(req, res) {
        res.json({ userId: req.user })
    },

    addAccessory(req, res) {
        User.findByPk(req.params.id)
        .then((user) =>{
            if (!user) {
                console.log('user not found')
                return null
            }
            return Accessory.findOne({where: {id:req.body.accessoryId}}).then((accessory) => {
                if(!accessory) {
                    console.log('accessory not found')
                return null
                }
                user.addAccessory(accessory)
                console.log(`added accessory ${accessory.id} to User ${user.id}`)
                return res.json({message: 'accessory added'})
            })

        })
            .catch((err) => {
                console.log(err)
            })
    }
}