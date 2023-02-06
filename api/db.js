require("dotenv").config()
const { Sequelize } = require("sequelize")
const formModel = require("./src/models/Form")
const visitedModel = require("./src/models/Visits")
const sequelize = new Sequelize("postgresql://postgres:6vtgHlWDPfsKjOpTTLCx@containers-us-west-189.railway.app:7061/railway", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})

formModel(sequelize);visitedModel(sequelize)




console.log(sequelize.models)
module.exports = {
    ...sequelize.models,
    connect: sequelize
}