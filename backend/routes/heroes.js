const express = require("express")
const app = express() 


const heroes = require("../heroes")

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

  module.exports = app
  

