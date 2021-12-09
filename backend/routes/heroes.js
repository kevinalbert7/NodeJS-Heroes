const express = require("express")
const app = express()

let heroes = require("../heroes.json")

app.get("/heroes", (req, res) => {
    res.json(heroes)
  })
  
//   app.post("/", (req, res) => {
//     const superHeroe = {
//       id: superHeroes[superHeroes.length - 1].id + 1,
//       ...req.body
//     }
  
//     superHeroes = [ ...superHeroes, superHeroe ]
    
//     res.json(animal)
//   })

  module.exports = app
  