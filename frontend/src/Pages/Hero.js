import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import Form from '../Components/Form'

const Hero = props => {

    const { slug } = useParams()

    const [ hero, setHero ] = useState([])

    useEffect (() => {
        fetch(`http://localhost:5000/heroes/${slug}`)
            .then(response => response.json())
            .then(data => setHero(data))
            console.log(setHero)
    }, [slug])

    console.log(hero)

    return (
        <>
            <Card
                hero={hero}
            />
            <Form />
        </>
    )
}

export default Hero