const {Router} = require("express")
const formRouter = require("./formRoutes")

const router = Router()

router.use("/", formRouter)

module.exports = router