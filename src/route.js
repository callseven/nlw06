const express  = require("express")

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
// route.get('/sobre-jakeliny-gracielly', (req, res) => res.render("sobre"))

module.exports = route