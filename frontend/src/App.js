import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'

import { HeroContextProvider } from './contexts/Hero'
import Home from './pages/Home'
import Hero from './pages/Hero'
import CreateHero from './pages/CreateHero'
import NotFound from './pages/NotFound'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <ChakraProvider>
      <Box
        w='100%'
        h='100vh'
        style={{padding:"40px 100px 40px 100px"}}
        bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
        ]}
      >
        <GlobalStyle/>
        <BrowserRouter>
          <HeroContextProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/heroes" element={<Home />} />
              <Route path="/heroes/:slug" element={<Hero />} />
              <Route path="/heroes/create" element={<CreateHero />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HeroContextProvider>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}

export default App
