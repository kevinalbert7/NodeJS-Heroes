const express = require('express')
const app = express()

let heroes = require('../heroes.json')

const failIfExists = (req, res, next) => {
  const { name } = req.body
  const hero = heroes.find(hero => hero.name === name)

  if (hero) {
    res.status(409).send('Hero already exist')
  } else {
    next()
  }
}

const successIfExists = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  if (hero) {
    next()
  } else {
    res.status(404).send('Hero not found')
  }
}

const validateHero = (req, res, next) => {
  //Obect.keys permet de récupérer dans un tableau de string
  //toutes les clé de mon objet en paramètre
  const allowedKeys = Object.keys(heroes[0])
  const bodyKeys = Object.keys(req.body)
  const invalidKey = bodyKeys.find(key => !allowedKeys.includes(key))
  
  if (invalidKey) {
    res.status(400).send("Request invalid")
  } else {
    next()
  }
}

app.get('/', (req, res) => {
  res.json(heroes)
})

app.get('/:slug', successIfExists, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  res.json(hero)
})

app.get('/:slug/powers', successIfExists, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  res.json(hero.power)
})

app.post('/', failIfExists, validateHero, (req, res) => {
  const hero = { 
    slug: req.body.name.toLowerCase().replace(/[^\w\s]/gi, '-'),
    ...req.body
  }

  heroes = [ ...heroes, hero ]

  res.json(hero)
})

app.put('/:slug/powers', successIfExists, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)
  hero.power = [ ...hero.power, req.body.power] 

  res.json(hero)
})

app.delete('/:slug', successIfExists, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  heroes = heroes.filter(hero => hero.slug !== slug) 

  res.json(`The super hero ${hero.name} has been deleted`)
})

app.delete('/:slug/power/:power', successIfExists, (req,res) => {
  const { slug, power } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  hero.power = hero.power.filter(p => p !== power)

  res.json(`${power} deleted`)
})

app.put('/:slug', successIfExists, validateHero, (req,res) => {
  const { slug } = req.params
  const index = heroes.findIndex(hero => hero.slug === slug)

  heroes[index] = {
    // Je récupère mon objet de base (ex: thor) et je mets à jour
    // toutes ses clés contenues dans req.body
    ...heroes[index],
    // chaque modification d'un clé existante remplacera la clé
    // présente dans mon héro de base
    ...req.body
  }

  res.json(heroes[index])
})
module.exports = app
  

