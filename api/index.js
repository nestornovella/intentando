const express = require("express")
const morgan = require("morgan")
const { connect } = require("./db")
const routes = require("./src/routes/index")
const corsOrigin = require("cors")

const server = express()
const PORT = process.env.PORT || 3001


server.use(express.json())
server.use(morgan('dev'))
server.use(corsOrigin())

server.use("/", routes)


server.listen(PORT, connect.sync({force:false}).then(console.log(`listen in port ${PORT}`)))