import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import FormNewHero from '../Components/FormNewHero'

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
        <div style={{display: "flex", justifyContent:"space-between"}}>
            <Card
                hero={hero}
            />
                <FormNewHero />
        </div>
    )
}

export default Hero