const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const { User, Chicken } = require('./models')

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT} 🚀`));
});
