const express = require("express")
const app = express() 

let heroes = require("../heroes")


app.get("/", (req, res) => {
    res.json(heroes)
  })

app.get("/:slug", (req, res) => {
    const { slug } = req.params
    const eachHeroe = heroes.find(heroe => heroe.slug === slug)
    // console.log(eachHeroe)
    res.json(eachHeroe)
})

app.get("/:slug/powers", (req, res) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  // console.log(powers)
  res.json(heroe.power)
})

app.post("/:slug", (req, res) => {
  
    const existingHeroe = heroes.find(heroe => heroe.slug === req.body.slug)
    console.log("existingHeroe :", existingHeroe)
    
    if (existingHeroe) {
      res.status(409).send("Heroe already exists")
    } else {
      const heroe = {
        id: heroes.length + 1,
        ...req.body
      }

    heroes = [...heroes, heroe]

    res.json(heroe)
    
  }
})


  module.exports = app
  

