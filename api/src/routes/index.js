const {Router} = require("express")
const formRouter = require("./formRoutes")
const visitRoutes = require("./visitsRoutes")

const router = Router()

router.use("/", formRouter)
router.use("/", visitRoutes)

module.exports = router