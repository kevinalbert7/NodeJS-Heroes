const express = require("express")
const app = express()
const cors = require('cors')
const port = 5000

const heroes = require("./routes/heroes")

// app.use(express.json())
// app.use(morgan('tiny'))

app.use("/heroes", heroes)
// app.use("/heroes/:slug", powers)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})