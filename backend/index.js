const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 5000

const heroesRoutes = require('./routes/heroes')

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())

app.use('/heroes', heroesRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})