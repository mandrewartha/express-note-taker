const express = require("express");
const router = express.Router()

const htmlRouter = require("./htmlRouter")
router.use(htmlRouter)

const apiRouter = require("./apiRouter")
router.use(apiRouter)

module.exports = router