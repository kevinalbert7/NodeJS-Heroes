import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                textAlign='center'
                >
                Mes héros préférés :
            </ Text>
            <Text
                fontSize='4xl'
                fontFamily='sans-serif'
                paddingX='80px'
                paddingY='20px'
                >
                {heroes.map(hero => (
                    <ul>
                        <li>
                            <Link to={`/heroes/${hero.slug}`}>
                                {hero.name}
                            </Link>
                        </li>
                    </ul>
                ))}
            </Text>
        </>
    )
}

export default Heroes