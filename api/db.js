require("dotenv").config()
const { Sequelize } = require("sequelize")
const formModel = require("./src/models/Form")

const sequelize = new Sequelize(process.env.SEQUELIZE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})

formModel(sequelize)




console.log(sequelize.models)
module.exports = {
    ...sequelize.models,
    connect: sequelize
}