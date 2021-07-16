const express  = require("express")
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

// formato que o formulario de dentro da modal tem que passar a informacao
route.post('/romm/:romm/:question/:action', QuestionController.index)
route.post('/romm/create-romm/', RoomController.create)

module.exports = route