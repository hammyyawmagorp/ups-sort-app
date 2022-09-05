require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports = {
    getPD: (req, res) => {
    let { zipcode } = req.query;
    sequelize.query(
    `select color from nassau_ny_sort
    where zip = ('${zipcode}');`)
    .then(dbRes => {res.status(200).send(dbRes[0])})
    .catch(err => console.log(err));
    }
};
