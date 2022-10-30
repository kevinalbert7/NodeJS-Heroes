import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { HeroContext } from '../contexts/Hero'
import Container from '../components/Container'

const Hero = () => {
    const { slug } = useParams()
    const { getHero } = useContext(HeroContext)
    const [hero, setHero] = useState(null)

    useEffect(() => {
        getHero(slug)
            .then(response => console.log(response))
    }, [])

    return (
        <Container>
            <h1>{hero.name}</h1>
        </Container>
    )
}

export default Hero