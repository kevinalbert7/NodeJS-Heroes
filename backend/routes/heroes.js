const express = require("express")
const app = express() 

let heroes = require("../heroes")

// const existingHeroe = (req, res, next) => {
//   const { slug } = req.params
//   const heroe = heroes.find(heroe => heroe.slug === slug)

//   if (heroe) {
//     res.status(409).send("Heroe already exists")
//   } else {
//     next()
//   }
// }


app.get("/", (req, res) => {
    res.json(heroes)
  })

//Route qui renvoie les héros
app.get("/:slug", (req, res) => {
    const { slug } = req.params
    const eachHeroe = heroes.find(heroe => heroe.slug === slug)
    // console.log(eachHeroe)
    res.json(eachHeroe)
})

//Route qui renvoie les pouvoirs de chaque héro
app.get("/:slug/powers", (req, res) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)
  // console.log(powers)
  res.json(heroe.power)
})

//Route qui ajoute des héros ou renvoie une erreur pour ceux existants déjà
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

//Route qui retire un héro de la liste ou renvoie une erreur
app.delete("/:slug", (req, res) => {
  const { slug } = req.params
  const heroeDelete = heroes.findIndex(heroe => heroe.slug === slug)
  
  heroes.splice(slug, 1)
  res.send(`${slug} effacé correctement`)
})

  module.exports = app
  

