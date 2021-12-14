import React, { useEffect, useState } from 'react'
import { Box, Image, Badge, Button } from '@chakra-ui/react'

const Heroes = () => {
    const [ heroes, setHeroes ] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/heroes')
            .then(response => response.json())
            .then(data => setHeroes(data))
            console.log(setHeroes)
    }, [])

    return (
    <>
            {heroes.map(hero => (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom='20px'>
            <Image src={hero.image} alt={""} />
    
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {hero.name}
                    </Badge>
                </Box>
        
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    <Box>{hero.power}</Box> 
                        {/* <Button colorScheme='teal' variant='solid'>
                            Button
                        </Button>  */}
                    <Box>{hero.color}</Box>
                    <Box>{hero.isAlive}</Box>
                    <Box>{hero.age}</Box>
                </Box>
            </Box>
        </Box>
            ))}
    </>
    )
}

export default Heroes