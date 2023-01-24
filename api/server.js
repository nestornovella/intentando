const express = require("express")
const morgan = require("morgan")
const { connect } = require("./db")
const routes = require("./src/routes/index")
const cors = require("cors")

const server = express()
const PORT = p


server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use("/", routes)


server.listen(process.env.PORT || 3001, connect.sync({force:false}).then(() => console.info("listen in port 3001")))