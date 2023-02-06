
const {Router} = require("express")

const { addVisits, getVisits } = require("../controllers/visits")

const router = Router()

router.get("/visits", getVisits)
router.put("/", addVisits)

module.exports = router