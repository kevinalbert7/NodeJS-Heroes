const express = require("express")
const app = express() 

const powers = require("../powers")

app.get("/:slug/powers", (req, res) => {
    const powers = heroes.slug.find(heroe => heroe.slug.power)
    console.log(powers)
    res.json(powers)
  })
  
    module.exports = app