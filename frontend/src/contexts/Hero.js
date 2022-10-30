import { createContext } from 'react'

const apiUrl = `http://localhost:5000`

const HeroContext = createContext({})

const HeroContextProvider = ({ children }) => {
  const getHeroes = () => {
    return fetch(`${apiUrl}/heroes`)
      .then(response => response.json())
      .then(data => data)
  }

  const getHero = slug => {
    return fetch(`${apiUrl}/heroes/${slug}`)
      .then(response => response.json())
      .then(data => data)
  }

  const value = {
    getHeroes,
    getHero
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