const { Router } = require("express")
const { getForm, postForm, deletForm } = require("../controllers/form")

const router = Router()

router.get("/", getForm)
router.post("/", postForm)
router.delete("/", deletForm)



module.exports = router