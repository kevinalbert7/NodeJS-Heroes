const express = require("express")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = 5000

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


let heroes = require('./heroes.json')

const heroes = require("./routes/heroes")


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})