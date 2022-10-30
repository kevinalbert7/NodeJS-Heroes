import { createContext } from 'react'

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
      .then(response => console.log(response))
      // .then(data => data)

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