const express = require("express")
const app = express()
const morgan = require("morgan")
const port = 5000

const heroes = require("./routes/heroes")


//utilisation de ma route
app.use("/heroes", heroes)

//accès à req.body
app.use(express.json())

//middleware me permettant d'afficher mes requètes
app.use(morgan('tiny'))


// middleware global
const log = (req, res, next) => {
    console.log("Vous avez reçu une requete")
    next()
  }

// utilisation du middleware log, 
// il va etre appelé a chaque routes
app.use(log)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})