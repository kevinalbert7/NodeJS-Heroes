import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Heroes from './Pages/Heroes'
import Hero from './Pages/Hero'


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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Heroes />} />
            <Route path="/heroes/:slug" element={<Hero />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}

export default App
