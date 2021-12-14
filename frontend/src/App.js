import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Heroes from './Routes/Heroes'
import Hero from './Routes/Hero'


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
