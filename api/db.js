require("dotenv").config()
const { Sequelize } = require("sequelize")
const formModel = require("./src/models/Form")
const visitedModel = require("./src/models/Visits")
const sequelize = new Sequelize("postgresql://postgres:27tH9aSe3en6Jmu6TOBn@containers-us-west-126.railway.app:5796/railway", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})

formModel(sequelize);visitedModel(sequelize)




module.exports = {
    ...sequelize.models,
    connect: sequelize
}