const express = require("express")
const morgan = require("morgan")
const { connect } = require("./db")
const routes = require("./src/routes/index")
const cors = require("cors")

const server = express()
const PORT = process.env.PORT


server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use("/", routes)


server.listen(process.env.PORT || 3001,() => console.info("listen in port 3001"))