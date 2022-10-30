import { createContext } from 'react'
import { Navigate } from 'react-router-dom'

const apiUrl = `http://localhost:5000/heroes`

const HeroContext = createContext({})

const HeroContextProvider = ({ children }) => {
  const getHeroes = () => {
    return fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(data => data)
  }

  const getHero = slug => {
    return fetch(`${apiUrl}/${slug}`)
      .then(response => response.json())
      .then(data => data)
  }

  const deleteHero = slug => {
    return fetch(`${apiUrl}/${slug}`, {
      method: 'delete'
    })
      .then(response => response)
  }

  // le paramètre body correspond au pouvoir que j'ajoute
  // => { power: "invisible" }
  const updatePower = (slug, body) => {
    fetch(`${apiUrl}/${slug}/powers`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  const value = {
    getHeroes,
    getHero,
    deleteHero
  }

  return (
    <HeroContext.Provider value={value}>
        {children}
    </HeroContext.Provider>
  )
}

export {
    HeroContext,
    HeroContextProvider
}